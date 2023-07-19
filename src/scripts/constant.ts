import { ColorArgs, Point } from '../../types';
export const Keyboard = {
  Shift: 'shift',

  B: 'B',
  F: 'F',
  G: 'G',

  Num5: '5',

  SmallNum1: 'num1'
}

export const BindKeys = {
  /** 背包 */
  Bag: Keyboard.B,

  /** 上车，驾驶*/
  GetOnDriver: Keyboard.F,

  /** 上车，乘坐*/
  GetOnPassenger: Keyboard.G,

  /** 打药 */
  TakeMedicine: Keyboard.Num5,
};


export const NodHeadConfig = {
  Interval: 300,
  MaxDuration: 2000,
};

// 华为 nova9， 2430 × 1080
const Nova9 = {
  SquatColorPoint: [ '255:255:241:119', '1305:653+1307:658+1307:665+1312:672+1313:681+1313:684' ] as ColorArgs,
  ProstrateColorPoint: [ '255:253:237:119', '1421:639+1426:644+1437:649+1445:652' ] as ColorArgs,

  CurrLeftGunColorPoint: [ '255:255:221:0', '613:613' ] as ColorArgs,
  CurrRightGunColorPoint: [ '255:254:220:1', '786:614' ] as ColorArgs,

  LeftGunPositionPoint: { x: 1036, y: 946 }  as Point,
  RightGunPositionPoint: { x: 1263, y: 961 } as Point,

  X6SightZoomBarPoint: { x: 678, y: 222 } as Point,
  X6ToX3Point: { x: 678, y: 597 } as Point,
  X6ToX6Point: { x: 678, y: 346 } as Point,

  MirrorTextImageSim: {
    X8Sight: 0.65,
    X6Sight: 0.60,
    X4Sight: 0.68,
    X3Sight: 0.56,
    X2Sight: 0.68,
    MachineSight: 0.65,
    HolographicSight: 0.65,
    RedDotSight: 0.65,
  },

  BagDustbinX: 2350,

  RescueButtonPosition: { x: 1, y: 1 } as Point,

  OpenMirrorButtonPosition: { x: 1, y: 1 } as Point,

  SquatButtonPosition: { x: 1, y: 1 } as Point,
};


// 华为 MatePad 11， 2560 × 1600
const MatePad11 = {
  SquatColorPoint: [ '255:254:239:111', '983:694+984:682+993:690+992:691' ] as ColorArgs,
  ProstrateColorPoint: [ '255:254:225:114', '1076:655+1100:661+1107:661+1112:659' ] as ColorArgs,

  CurrLeftGunColorPoint: [ '255:242:211:4', '437:629' ] as ColorArgs,
  CurrRightGunColorPoint: [ '255:255:222:0', '582:629' ] as ColorArgs,

  LeftGunPositionPoint: { x: 1125, y: 1450 }  as Point,
  RightGunPositionPoint: { x: 1430, y: 1450 } as Point,

  X6SightZoomBarPoint: { x: 738, y: 388 } as Point,
  X6ToX3Point: { x: 746, y: 882 } as Point,
  X6ToX6Point: { x: 748, y: 538 } as Point,

  MirrorTextImageSim: {
    X8Sight: 0.75,
    X6Sight: 0.85,
    X4Sight: 0.75,
    X3Sight: 0.75,
    X2Sight: 0.75,
    MachineSight: 0.65,
    HolographicSight: 0.75,
    RedDotSight: 0.75,
  },

  BagDustbinX: 2500,

  RescueButtonPosition: { x: 1282, y: 1070 } as Point,

  OpenMirrorButtonPosition: { x: 2465, y: 954 } as Point,

  SquatButtonPosition: { x: 2200, y: 1500 } as Point,
};

export default /* replace start */ MatePad11 /* replace end */;
