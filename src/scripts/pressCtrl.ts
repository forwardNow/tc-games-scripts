import Gun from './gun';
import Posture from './posture';
import Mirror from './mirror';
import Utils from './utils';
import PressArgs from './pressArgs';
import Store from './store';
import { T_Gun, T_Mirror, T_Posture } from '../../types';
import Skill from './skill';

const pressCtrl = {
  currGun: null as ( null | T_Gun ),
  currPosture: null as ( null | T_Posture ),
  currMirror: null as ( null | T_Mirror ),

  fire() {
    mapi.holdpress();

    if (Skill.flashMirror()) {
      this.pause();
      return;
    }

    if (!Mirror.isOpen()) {
      this.pause();
      return;
    }

    this.start();
  },

  toggleX6Sight() {
    if (!Mirror.isOpen()) {
      return;
    }

    if (!Mirror.isX6Sight()) {
      return;
    }

    const currGun = Gun.getCurrentGun();

    if (!currGun) {
      logerror('toggleX6Sight: 未识别到枪械');
      return;
    }

    const currMirror = this.getCurrentMirrorByGun(currGun);

    let adjustedMirror = null;

    if (currMirror === Mirror.CATEGORIES.X6_X3_SIGHT) {
      adjustedMirror = Mirror.adjustX6ToX6();
    } else {
      adjustedMirror = Mirror.adjustX6ToX3();
    }

    Store.mutations.setMirrorOfAdjustedGun(currGun, adjustedMirror)
  },

  logErrorPressArgs() {
    const status = this.getStatus();

    if (!status) {
      logerror(`logErrorPressArgs(): status 为 None`)
      return;
    }

    const { gun, posture, mirror } = status;
    const args = PressArgs.getGunPressArgs(gun, posture, mirror);

    logerror(`logErrorPressArgs: ${ gun }${ posture }${ mirror }: ${ JSON.stringify(args) }`)
  },

  start() {
    mapi.startcustomaimpar();

    const success = this.updatePressArgs();

    if (!success) {
      this.pause();
      return;
    }

    this.play();
  },

  play() {
    mapi.customaimpar(false);
  },

  pause() {
    mapi.customaimpar(true);
  },

  updatePressArgs() {
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
  },

  /**
   * @return {{ x: number, y: number, delay: number} | null}
   */
  getArgsOfCustomAimPar() {
    const status = this.getStatus();

    if (!status) {
      logerror(`logErrorPressArgs(): status 为 None`)
      return;
    }

    const { gun, posture, mirror } = status;

    const args = PressArgs.getGunPressArgs(gun, posture, mirror);

    if (!args) {
      logerror(`getArgsOfCustomAimPar: ${ gun }${ posture }${ mirror }: 没有对应的配置`)
      return;
    }

    args.delay += Store.state.deltaDelayOfGunPressArgs;

    Utils.showTip(`${ gun }${ posture }${ mirror }: ${ JSON.stringify(args) }`)

    return args;
  },

  /**
   * 此方法在开镜后执行，
   *
   * 如未获取到 gun、posture、mirror，则会使用上次识别到的值
   */
  getStatus() {
    const {
      currGun: lastGun,
      currPosture: lastPosture,
      currMirror: lastMirror
    } = this;

    let gun = Gun.getCurrentGun();

    if (!gun) {
      logwarning('getStatus: 未识别出当前枪械！尝试使用上次识别出来的枪械');

      if (!lastGun) {
        logwarning('getStatus: 上次识别出来的枪械为 None');
        return;
      }

      gun = lastGun;
    }

    let posture = Posture.getCurrentPosture();

    let mirror = this.getCurrentMirrorByGun(gun);

    if (!mirror) {
      logwarning('getStatus: 未识别出当前准镜！尝试使用上次识别出来的准镜！');

      if (!lastMirror) {
        logwarning('getStatus: 上次识别出来的准镜为 None');
        return;
      }

      mirror = lastMirror;
    }

    this.currGun = gun;
    this.currPosture = posture;
    this.currMirror = mirror;

    const officialPostureName = Posture.MAPPING[posture];
    const officialMirrorName = Mirror.MAPPING[mirror];

    return { gun, posture: officialPostureName, mirror: officialMirrorName };
  },

  getCurrentMirrorByGun(gun: T_Gun) {
    let mirror = Mirror.getCurrentMirror();

    if (mirror === Mirror.CATEGORIES.X6_SIGHT) {
      mirror = Store.getters.getMirrorOfAdjustedGun(gun) || Mirror.CATEGORIES.X6_SIGHT;
    }

    return mirror;
  },

};

export default pressCtrl;
