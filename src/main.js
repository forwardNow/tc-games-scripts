import { getCurrentGunName, getGunPressArgs, GUN_CATEGORIES } from 'gun';
import { getPosture, POSTURE_CATEGORIES } from 'posture';
import {
  adjustX3ToX6,
  adjustX6ToX3,
  getCurrentMirrorName,
  isMirrorOpen, isX6Sight,
  MIRROR_CATEGORIES
} from 'mirror';
import { showTip } from 'utils';

const FIRE_ICON_POINT = { x: 2032, y: 806 };

const MAPPING = {
  [POSTURE_CATEGORIES.STAND]: '站',
  [POSTURE_CATEGORIES.SQUAT]: '蹲',
  [POSTURE_CATEGORIES.PROSTRATE]: '趴',

  [MIRROR_CATEGORIES.X2_SIGHT]: '2倍',
  [MIRROR_CATEGORIES.X3_SIGHT]: '3倍',
  [MIRROR_CATEGORIES.X4_SIGHT]: '4倍',
  [MIRROR_CATEGORIES.X6_SIGHT]: '6倍6',
  [MIRROR_CATEGORIES.X6_X3_SIGHT]: '6倍3',
};

export const GUN_X6_SIGHTS = {
  // [GUN_CATEGORIES.M4]: MIRROR_CATEGORIES.X6_X3_SIGHT,
  // [GUN_CATEGORIES.SCARL]: MIRROR_CATEGORIES.X6_X3_SIGHT,
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
    if (!isMirrorOpen()) {
      return;
    }

    if (isX6Sight()) {
      return;
    }

    const {currMirror, currGun} = this;

    let adjustedMirror = null;

    if (currMirror === MIRROR_CATEGORIES.X6_X3_SIGHT) {
      adjustedMirror = adjustX6ToX3();
    } else {
      adjustedMirror = adjustX3ToX6();
    }

    GUN_X6_SIGHTS[currGun] = adjustedMirror;
  },

  run() {
    if (!isMirrorOpen()) {
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

    const args = getGunPressArgs(gun, posture, mirror);

    const statusStr = `${ gun }${ posture }${ mirror }`;

    if (!args) {
      showTip(`${ statusStr } 没有对应的配置！`);
      return null;
    }

    showTip(`${ statusStr }`)

    const {x, y, delay} = args;

    return [x, y, delay];
  },

  getStatus() {
    const gun = getCurrentGunName();
    const posture = getPosture();
    const mirror = this.getMirror(gun);

    this.currGun = gun;
    this.currPosture = posture;
    this.currMirror = mirror;

    const fmtPosture = MAPPING[posture];
    const fmtMirror = MAPPING[mirror] || '';

    return { gun, posture: fmtPosture, mirror: fmtMirror };
  },

  getMirror(gun) {
    let mirror = getCurrentMirrorName();

    // 如果是 6 倍镜，则尝试取调整过 6 倍镜倍率
    if (mirror === MIRROR_CATEGORIES.X6_SIGHT) {
      mirror = GUN_X6_SIGHTS[gun] || MIRROR_CATEGORIES.X6_SIGHT;
    }

    return mirror;
  },

};
