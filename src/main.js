import Gun from 'gun';
import Posture from 'posture';
import Mirror from 'mirror';
import Utils from 'utils';
import Config from 'config';

const FIRE_ICON_POINT = { x: 2032, y: 806 };

/** 调整过 6 倍镜倍率 的 枪及倍率 */
export const X6_SIGHTS_OF_ADJUSTED_GUN = {
  // [Gun.CATEGORIES.M4]: Mirror.CATEGORIES.X6_X3_SIGHT,
  // [Gun.CATEGORIES.SCARL]: Mirror.CATEGORIES.X6_X3_SIGHT,
}

const gunPressControl = {
  currGun: '',
  currPosture: '',
  currMirror: '',

  /**
   * 开火
   *
   * 键位绑定：鼠标左键
   */
  fire() {
    mapi.holdpress(FIRE_ICON_POINT.x, FIRE_ICON_POINT.y);

    this.run();
  },

  /**
   * 调整 6 倍镜，并记录调整过 6 倍镜倍率的枪及倍率
   *
   * 键位绑定：鼠标滚轮-滚上
   */
  toggleX6Sight() {
    if (!Mirror.isOpen()) {
      return;
    }

    if (Mirror.isX6Sight()) {
      return;
    }

    const { currMirror, currGun } = this;

    let adjustedMirror = null;

    if (currMirror === Mirror.CATEGORIES.X6_X3_SIGHT) {
      adjustedMirror = Mirror.adjustX6ToX3();
    } else {
      adjustedMirror = Mirror.adjustX3ToX6();
    }

    X6_SIGHTS_OF_ADJUSTED_GUN[currGun] = adjustedMirror;
  },

  /**
   * 启用/禁用 mapi.tip()
   *
   * 绑定键位：F12
   */
  toggleEnableOfTip() {
    Utils.toggleEnableOfTip();
  },

  run() {
    if (!Mirror.isOpen()) {
      this.pause();
      return;
    }

    const args = this.getArgsOfCustomAimPar();

    if (!args) {
      this.pause();
      return;
    }

    this.start();
    this.play();
    this.changePressArgs(args);
  },

  start() {
    mapi.startcustomaimpar();
  },

  play() {
    mapi.customaimpar(false);
  },

  pause() {
    mapi.customaimpar(true);
  },

  changePressArgs(x, y, delay) {
    mapi.changecustomaimpar(x, y, delay);
  },

  /**
   * @return {[number, number, string]}
   */
  getArgsOfCustomAimPar() {
    const { gun, posture, mirror } = this.getStatus();

    const args = Config.getGunPressArgs(gun, posture, mirror);

    const statusStr = `${ gun }${ posture }${ mirror }`;

    if (!args) {
      Utils.showTip(`${ statusStr } 没有对应的配置！`);
      return null;
    }

    Utils.showTip(`${ statusStr }`)

    const { x, y, delay } = args;

    return [ x, y, delay ];
  },

  getStatus() {
    const gun = Gun.getCurrentGun();
    const posture = Posture.getCurrentPosture();
    const mirror = this.getCurrentMirrorByGun(gun);

    this.currGun = gun;
    this.currPosture = posture;
    this.currMirror = mirror;

    const officialPostureName = Posture.MAPPING[posture];
    const officialMirrorName = Mirror.MAPPING[mirror] || '';

    return { gun, posture: officialPostureName, mirror: officialMirrorName };
  },

  getCurrentMirrorByGun(gun) {
    let mirror = Mirror.getCurrentMirror();

    if (mirror === Mirror.CATEGORIES.X6_SIGHT) {
      mirror = X6_SIGHTS_OF_ADJUSTED_GUN[gun] || Mirror.CATEGORIES.X6_SIGHT;
    }

    return mirror;
  },

};

export default gunPressControl;
