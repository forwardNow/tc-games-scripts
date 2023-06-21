import { getCurrentGunName, getGunPressArgs } from 'gun';
import { getPosture, POSTURE_CATEGORIES } from 'posture';
import { getCurrentMirrorName, isMirrorOpen, MIRROR_CATEGORIES } from 'mirror';
import { showTip } from 'utils';

const FIRE_ICON_POINT = { x: 2032, y: 806 };

const MAPPING = {
  [POSTURE_CATEGORIES.STAND]: '站',
  [POSTURE_CATEGORIES.SQUAT]: '蹲',
  [POSTURE_CATEGORIES.PROSTRATE]: '趴',
  [MIRROR_CATEGORIES.X2_SIGHT]: '2倍',
  [MIRROR_CATEGORIES.X3_SIGHT]: '3倍',
  [MIRROR_CATEGORIES.X4_SIGHT]: '4倍',
  [MIRROR_CATEGORIES.X6_SIGHT]: '6倍3',
  [MIRROR_CATEGORIES.X6_TO_X3_SIGHT]: '6倍3',
  [MIRROR_CATEGORIES.X6_TO_X6_SIGHT]: '6倍6',
};

export const gunPressControl = {
  /** 此方法用在开火键（鼠标左键）上 */
  fire() {
    mapi.holdpress(FIRE_ICON_POINT.x, FIRE_ICON_POINT.y);

    this.run();
  },

  /** 此方法用在鼠标 滚轮滚上，调整 6 倍镜，并记录每个枪支的 6 倍镜倍率 */
  adjustX6Sight() {

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

    mapi.startcustomaimpar();

    this.play();

    mapi.changecustomaimpar(...args);
  },

  play() {
    mapi.customaimpar(false);
  },

  pause() {
    mapi.customaimpar(true);
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

    const { x, y, delay } = args;

    return [x, y, delay];
  },

  getStatus() {
    const gun = getCurrentGunName();
    const posture = getPosture();
    const mirror = getCurrentMirrorName();

    const fmtPosture = MAPPING[posture];
    const fmtMirror = MAPPING[mirror] || '';

    return { gun, posture: fmtPosture, mirror: fmtMirror };
  },

};
