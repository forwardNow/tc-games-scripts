import { getCurrentGunName } from 'gun';
import { getPosture, POSTURE_CATEGORIES } from 'posture';
import { getCurrentMirrorName, isMirrorOpen, MIRROR_CATEGORIES } from 'mirror';
import { showTip } from 'utils';
import { gunPressArgs } from 'config';

const FIRE_ICON_POINT = { x: 2032, y: 806 };

const MAPPING = {
  [POSTURE_CATEGORIES.STAND]: '站',
  [POSTURE_CATEGORIES.SQUAT]: '蹲',
  [POSTURE_CATEGORIES.PROSTRATE]: '趴',
  [MIRROR_CATEGORIES.X2_SIGHT]: '2倍',
  [MIRROR_CATEGORIES.X3_SIGHT]: '3倍',
  [MIRROR_CATEGORIES.X4_SIGHT]: '4倍',
  // [MIRROR_CATEGORIES.X6_SIGHT]: '6倍',
};

export const gunPressControl = {
  /** 此方法用在开火键（鼠标左键）上 */
  fire() {
    mapi.holdpress(FIRE_ICON_POINT.x, FIRE_ICON_POINT.y);

    this.run();
  },

  run() {
    if (!isMirrorOpen()) {
      this.pause();
      return;
    }

    const args = this.getConfig();

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
  getConfig() {
    const { gun, posture, mirror } = this.getStatus();

    const argsMap = gunPressArgs[gun];

    if (!argsMap) {
      showTip(`${gun}: 没有对应的配置`, 1);
      return null;
    }

    const key = gun + posture + mirror;

    const [x, y, delay] = argsMap[key];

    showTip(`${ key } - ${ String([x, y, delay]) }`);

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
