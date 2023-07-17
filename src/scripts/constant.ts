import { ColorArgs, Point } from '../../types';

export const BIND_KEYS = {
  /** 背包 */
  BAG: 'B',

  /** 上车，驾驶*/
  GET_ON_DRIVER: 'F',

  /** 上车，乘坐*/
  GET_ON_PASSENGER: 'G',

  /** 打药 */
  TAKE_MEDICINE: '5',
};

export const NOD_HEAD = {
  INTERVAL: 300,
  MAX_DURATION: 6000,
};

// 华为 nova9， 2430 × 1080
const NOVA_9 = {
  SQUAT_COLOR_POINT: [ '255:255:241:119', '1305:653+1307:658+1307:665+1312:672+1313:681+1313:684' ] as ColorArgs,
  PROSTRATE_COLOR_POINT: [ '255:253:237:119', '1421:639+1426:644+1437:649+1445:652' ] as ColorArgs,

  GUN_POSITION_LEFT_COLOR_POINT: [ '255:255:221:0', '613:613' ] as ColorArgs,
  GUN_POSITION_RIGHT_COLOR_POINT: [ '255:254:220:1', '786:614' ] as ColorArgs,

  GUN_POSITION_LEFT_POINT: { x: 1036, y: 946 }  as Point,
  GUN_POSITION_RIGHT_POINT: { x: 1263, y: 961 } as Point,

  X6_SIGHT_ZOOM_BAR_POINT: { x: 678, y: 222 } as Point,
  X6_TO_X3_POINT: { x: 678, y: 597 } as Point,
  X6_TO_X6_POINT: { x: 678, y: 346 } as Point,

  MIRROR_TEXT_IMAGE_SIM: {
    X8_SIGHT: 0.65,
    X6_SIGHT: 0.60,
    X4_SIGHT: 0.68,
    X3_SIGHT: 0.56,
    X2_SIGHT: 0.68,
    MACHINE_SIGHT: 0.65,
    HOLOGRAPHIC_SIGHT: 0.65,
    RED_DOT_SIGHT: 0.65,
  },

  BAG_DUSTBIN_X: 2350,

  RESCUE_BUTTON_POSITION: { x: 1, y: 1 } as Point,

  OPEN_MIRROR_BUTTON_POSITION: { x: 1, y: 1 } as Point,

  SQUAT_BUTTON_POSITION: { x: 1, y: 1 } as Point,
};


// 华为 MatePad 11， 2560 × 1600
const MATE_PAD_11 = {
  SQUAT_COLOR_POINT: [ '255:254:239:111', '983:694+984:682+993:690+992:691' ] as ColorArgs,
  PROSTRATE_COLOR_POINT: [ '255:254:225:114', '1076:655+1100:661+1107:661+1112:659' ] as ColorArgs,

  GUN_POSITION_LEFT_COLOR_POINT: [ '255:242:211:4', '437:629' ] as ColorArgs,
  GUN_POSITION_RIGHT_COLOR_POINT: [ '255:255:222:0', '582:629' ] as ColorArgs,

  GUN_POSITION_LEFT_POINT: { x: 1125, y: 1450 }  as Point,
  GUN_POSITION_RIGHT_POINT: { x: 1430, y: 1450 } as Point,

  X6_SIGHT_ZOOM_BAR_POINT: { x: 738, y: 388 } as Point,
  X6_TO_X3_POINT: { x: 746, y: 882 } as Point,
  X6_TO_X6_POINT: { x: 748, y: 538 } as Point,

  MIRROR_TEXT_IMAGE_SIM: {
    X8_SIGHT: 0.75,
    X6_SIGHT: 0.85,
    X4_SIGHT: 0.75,
    X3_SIGHT: 0.75,
    X2_SIGHT: 0.75,
    MACHINE_SIGHT: 0.65,
    HOLOGRAPHIC_SIGHT: 0.75,
    RED_DOT_SIGHT: 0.75,
  },

  BAG_DUSTBIN_X: 2500,

  RESCUE_BUTTON_POSITION: { x: 1282, y: 1070 } as Point,

  OPEN_MIRROR_BUTTON_POSITION: { x: 2465, y: 954 } as Point,

  SQUAT_BUTTON_POSITION: { x: 2200, y: 1500 } as Point,
};

export default /* replace start */ MATE_PAD_11 /* replace end */;
