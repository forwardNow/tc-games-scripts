import { getCurrentGunName } from 'gun';
import { getPosture, POSTURE_CATEGORIES } from 'posture';
import { getCurrentMirrorName, isMirrorOpen, MIRROR_CATEGORIES } from 'mirror';
import { showTip } from 'utils';
import { gunConfig } from 'gunConfig';

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

export const pressGunControl = {
  status: {
    gun: null,      // GUN_CATEGORIES
    posture: null,  // POSTURE_CATEGORIES
    mirror: null,   // MIRROR_CATEGORIES
  },

  run() {
    const isSightOpen = isMirrorOpen();

    if (!isSightOpen) {
      this.pause();
      return;
    }

    this.play();
    this.setConfig();
  },

  /** 此方法用在开火键（鼠标左键）上 */
  start() {
    mapi.holdpress(FIRE_ICON_POINT.x, FIRE_ICON_POINT.y);

    mapi.startcustomaimpar();

    this.run();
  },

  play() {
    mapi.customaimpar(false);
  },

  pause() {
    mapi.customaimpar(true);
  },

  setConfig() {
    const { gun, posture, mirror } = this.getStatus();
    const fmtPosture = MAPPING[posture];
    const fmtMirror = MAPPING[mirror] || '';

    const argsMap = gunConfig[gun];

    if (!argsMap) {
      showTip(`${gun}: 没有对应的配置`, 1);
      return;
    }

    const key = gun + fmtPosture + fmtMirror;

    const [x, y, delay] = argsMap[key];

    showTip(`${ key } - ${ String([x, y, delay]) }`);

    mapi.changecustomaimpar(x, y, delay);
  },

  getStatus() {
    const gun = getCurrentGunName();
    const posture = getPosture();
    const mirror = getCurrentMirrorName();

    return { gun, posture, mirror };
  },

};
