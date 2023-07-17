import { GunCategory, T_Mirror, T_Posture } from '../../types';
import { gun, Gun } from './gun';
import { Posture, posture } from './posture';
import { mirror, Mirror } from './mirror';
import { utils } from './utils';
import { pressArgs } from './pressArgs';
import Store from './store';
import { skill } from './skill';

export class PressCtrl {
  currGunCategory = null as ( null | GunCategory )
  currPostureCategory = null as ( null | T_Posture )
  currMirrorCategory = null as ( null | T_Mirror )

  fire() {
    mapi.holdpress();

    if (skill.nodHead()) {
      this.pause();
      return;
    }

    if (!mirror.isOpen()) {
      this.pause();
      return;
    }

    this.start();
  }

  toggleX6Sight() {
    if (!mirror.isOpen()) {
      return;
    }

    if (!mirror.isX6Sight()) {
      return;
    }

    const currGunCategory = gun.getCurrentGun();

    if (!currGunCategory) {
      logerror('toggleX6Sight: 未识别到枪械');
      return;
    }

    const currMirrorCategory = this.getCurrentMirrorByGun(currGunCategory);

    let adjustedMirror = null;

    if (currMirrorCategory === Mirror.CATEGORIES.X6_X3_SIGHT) {
      adjustedMirror = mirror.adjustX6ToX6();
    } else {
      adjustedMirror = mirror.adjustX6ToX3();
    }

    Store.mutations.setMirrorOfAdjustedGun(currGunCategory, adjustedMirror)
  }

  logErrorPressArgs() {
    const status = this.getStatus();

    if (!status) {
      logerror(`logErrorPressArgs(): status 为 None`)
      return;
    }

    const { gunCategory, officialPostureName, officialMirrorName } = status;
    const args = pressArgs.getGunPressArgs(gunCategory, officialPostureName, officialMirrorName);

    logerror(`logErrorPressArgs: ${ gunCategory }${ officialPostureName }${ officialMirrorName }: ${ JSON.stringify(args) }`)
  }

  start() {
    mapi.startcustomaimpar();

    const success = this.updatePressArgs();

    if (!success) {
      this.pause();
      return;
    }

    this.play();
  }

  play() {
    mapi.customaimpar(false);
  }

  pause() {
    mapi.customaimpar(true);
  }

  updatePressArgs = () => {
    try {
      const args = this.getArgsOfCustomAimPar();

      if (!args) {
        return false;
      }

      const { x, y, delay } = args;

      mapi.changecustomaimpar(x, y, delay);

      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * @return {{ x: number, y: number, delay: number} | null}
   */
  getArgsOfCustomAimPar() {
    const status = this.getStatus();

    if (!status) {
      logerror(`logErrorPressArgs(): status 为 None`)
      return;
    }

    const { gunCategory, officialPostureName, officialMirrorName } = status;

    const args = pressArgs.getGunPressArgs(gunCategory, officialPostureName, officialMirrorName);

    const argsFullKey = `${ gunCategory }${ officialPostureName }${ officialMirrorName }`;

    if (!args) {
      logerror(`getArgsOfCustomAimPar: ${argsFullKey}: 没有对应的配置`)
      return;
    }

    args.delay += Store.state.deltaDelayOfGunPressArgs;

    utils.showTip(`${argsFullKey}: ${ JSON.stringify(args) }`)

    return args;
  }

  /**
   * 此方法在开镜后执行，
   *
   * 如未获取到 gun、posture、mirror，则会使用上次识别到的值
   */
  getStatus() {
    const {
      currGunCategory: lastGunCategory,
      currMirrorCategory: lastMirrorCategory
    } = this;

    let gunCategory = gun.getCurrentGun();

    if (!gunCategory) {
      logwarning('getStatus: 未识别出当前枪械！尝试使用上次识别出来的枪械');

      if (!lastGunCategory) {
        logwarning('getStatus: 上次识别出来的枪械为 None');
        return;
      }

      gunCategory = lastGunCategory;
    }

    let postureCategory = posture.getCurrentPostureCategory();

    let mirrorCategory = this.getCurrentMirrorByGun(gunCategory);

    if (!mirrorCategory) {
      logwarning('getStatus: 未识别出当前准镜！尝试使用上次识别出来的准镜！');

      if (!lastMirrorCategory) {
        logwarning('getStatus: 上次识别出来的准镜为 None');
        return;
      }

      mirrorCategory = lastMirrorCategory;
    }

    this.currGunCategory = gunCategory;
    this.currPostureCategory = postureCategory;
    this.currMirrorCategory = mirrorCategory;

    const officialPostureName = Posture.MAPPING[postureCategory];
    const officialMirrorName = Mirror.MAPPING[mirrorCategory];

    return { gunCategory, officialPostureName, officialMirrorName };
  }

  getCurrentMirrorByGun(gunCategory: GunCategory) {
    let disabledMirrors: T_Mirror[] = ['X8_SIGHT'];

    if (Gun.X8_SIGHT_GUNS.includes(gunCategory)) {
      disabledMirrors = ['X2_SIGHT', 'RED_DOT_SIGHT', 'HOLOGRAPHIC_SIGHT', 'MACHINE_SIGHT']
    }

    let mirrorCategory = mirror.getCurrentMirror(disabledMirrors);

    if (mirrorCategory === Mirror.CATEGORIES.X6_SIGHT) {
      mirrorCategory = Store.getters.getMirrorOfAdjustedGun(gunCategory) || Mirror.CATEGORIES.X6_SIGHT;
    }

    return mirrorCategory;
  }

}

export const pressCtrl = new PressCtrl();
