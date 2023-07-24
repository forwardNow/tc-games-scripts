import { GunCategory, MirrorCategory, PostureCategory } from '../../types';
import { gun, Gun } from './gun';
import { Posture, posture } from './posture';
import { mirror, Mirror } from './mirror';
import { utils } from './utils';
import { pressArgs } from './pressArgs';
import store from './store';
import { skill } from './skill';

export class PressCtrl {
  currGunCategory = null as ( null | GunCategory )
  currPostureCategory = null as ( null | PostureCategory )
  currMirrorCategory = null as ( null | MirrorCategory )

  fire() {
    if (!gun.isHoldConfiguredGun()) {
      utils.holdPressCurrentKey();
      return false;
    }

    if (!mirror.isOpen()) {
      utils.holdPressCurrentKey();

      utils.pauseCustomAim();

      skill.nodHead({ isCheckMirrorOpen: false, isCheckHoldGun: false });

      return;
    }
``
    this.doCustomAim();
    utils.holdPressCurrentKey();
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

    if (currMirrorCategory === Mirror.Categories.X6X3Sight) {
      adjustedMirror = mirror.adjustX6ToX6();
    } else {
      adjustedMirror = mirror.adjustX6ToX3();
    }

    store.mutations.setMirrorOfAdjustedGun(currGunCategory, adjustedMirror)
  }

  logErrorPressArgs() {
    const status = this.getStatus();

    if (!status) {
      logerror(`logErrorPressArgs(): status 为 None`)
      return;
    }

    const { gunCategory, cnPostureCategory, cnMirrorCategory } = status;
    const args = pressArgs.getGunPressArgs(gunCategory, cnPostureCategory, cnMirrorCategory);

    logerror(`logErrorPressArgs: ${ gunCategory }${ cnPostureCategory }${ cnMirrorCategory }: ${ JSON.stringify(args) }`)
  }

  doCustomAim() {
    utils.startCustomAim();

    const success = this.updatePressArgs();

    if (!success) {
      utils.pauseCustomAim();
      return;
    }

    utils.playCustomAim();
  }

  updatePressArgs = () => {
    try {
      const args = this.getArgsOfCustomAimPar();

      if (!args) {
        return false;
      }

      const { x, y, delay } = args;

      utils.updateCustomAim(x, y, delay);

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
      logerror(`getArgsOfCustomAimPar(): status 为 None`)
      return;
    }

    const { gunCategory, cnPostureCategory, cnMirrorCategory } = status;

    const args = pressArgs.getGunPressArgs(gunCategory, cnPostureCategory, cnMirrorCategory);

    const argsFullKey = `${ gunCategory }${ cnPostureCategory }${ cnMirrorCategory }`;

    if (!args) {
      logerror(`getArgsOfCustomAimPar: ${argsFullKey}: 没有对应的配置`)
      return;
    }

    args.delay += store.state.deltaDelayOfGunPressArgs;

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

    const cnPostureCategory = Posture.Mapping[postureCategory];
    const cnMirrorCategory = Mirror.Mapping[mirrorCategory];

    return { gunCategory, cnPostureCategory, cnMirrorCategory };
  }

  getCurrentMirrorByGun(gunCategory: GunCategory) {
    let disabledMirrors: MirrorCategory[] = ['X8Sight'];

    if (Gun.X8SightGuns.includes(gunCategory)) {
      disabledMirrors = ['X2Sight', 'RedDotSight', 'HolographicSight', 'MachineSight']
    }

    let mirrorCategory = mirror.getCurrentMirror(disabledMirrors);

    if (mirrorCategory === Mirror.Categories.X6Sight) {
      mirrorCategory = store.getters.getMirrorOfAdjustedGun(gunCategory) || Mirror.Categories.X6Sight;
    }

    return mirrorCategory;
  }

}

export const pressCtrl = new PressCtrl();
