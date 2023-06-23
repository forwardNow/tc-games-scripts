import Gun from 'gun';
import Posture from 'posture';
import Mirror from 'mirror';
import Utils from 'utils';
import Config from 'config';

const FIRE_ICON_POINT = { x: 2032, y: 806 };

const MAPPING = {
  [Posture.CATEGORIES.STAND]: '站',
  [Posture.CATEGORIES.SQUAT]: '蹲',
  [Posture.CATEGORIES.PROSTRATE]: '趴',

  [Mirror.CATEGORIES.X2_SIGHT]: '2倍',
  [Mirror.CATEGORIES.X3_SIGHT]: '3倍',
  [Mirror.CATEGORIES.X4_SIGHT]: '4倍',
  [Mirror.CATEGORIES.X6_SIGHT]: '6倍6',
  [Mirror.CATEGORIES.X6_X3_SIGHT]: '6倍3',
};

export const GUN_X6_SIGHTS = {
  // [Gun.CATEGORIES.M4]: Mirror.CATEGORIES.X6_X3_SIGHT,
  // [Gun.CATEGORIES.SCARL]: Mirror.CATEGORIES.X6_X3_SIGHT,
}

export const gunPressControl = {
  currGun: '',
  currPosture: '',
  currMirror: '',

  /** 此方法用在开火键（鼠标左键）上 */
  fire() {
    mapi.holdpress(FIRE_ICON_POINT.x, FIRE_ICON_POINT.y);

    this.run();
  },

  /** 此方法用在鼠标 滚轮滚上，调整 6 倍镜，并记录每个枪支的 6 倍镜倍率 */
  toggleX6Sight() {
    if (!Mirror.isOpen()) {
      return;
    }

    if (Mirror.isX6Sight()) {
      return;
    }

    const { currMirror, currGun} = this;

    let adjustedMirror = null;

    if (currMirror === Mirror.CATEGORIES.X6_X3_SIGHT) {
      adjustedMirror = Mirror.adjustX6ToX3();
    } else {
      adjustedMirror = Mirror.adjustX3ToX6();
    }

    GUN_X6_SIGHTS[currGun] = adjustedMirror;
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

    const {x, y, delay} = args;

    return [x, y, delay];
  },

  getStatus() {
    const gun = Gun.getCurrentGun();
    const posture = Posture.getCurrentPosture();
    const mirror = this.getMirror(gun);

    this.currGun = gun;
    this.currPosture = posture;
    this.currMirror = mirror;

    const fmtPosture = MAPPING[posture];
    const fmtMirror = MAPPING[mirror] || '';

    return { gun, posture: fmtPosture, mirror: fmtMirror };
  },

  getMirror(gun) {
    let mirror = Mirror.getCurrentMirror();

    // 如果是 6 倍镜，则尝试取调整过 6 倍镜倍率
    if (mirror === Mirror.CATEGORIES.X6_SIGHT) {
      mirror = GUN_X6_SIGHTS[gun] || Mirror.CATEGORIES.X6_SIGHT;
    }

    return mirror;
  },

};
