/** mapi.point */
export type Point = { x: number, y: number };

export type ImageArgs = [ string, number, number, number, number, number ]

/** [sim, setCol, setRow, selectCol, selectRow] */
export type ImageAreaArgs = [ number, number, number, number, number ];

export type ColorArgs = [ string, string ];

export type PointArgs = [ number, number ];

export interface IState {
  [prop: string]: any,
}

export interface IGetters {
  [prop: string]: Function,
}

export interface IMutations {
  [prop: string]: Function,
}


export type GunCategory =
  'M4'
  | 'SCARL'
  | 'DP28'
  | 'UMP45'
  | 'YENIU'
  | 'UZI'
  | 'VECTOR'
  | 'TANGMUXUN'
  | 'AKM'
  | 'ACVAL'
  | 'PKM'
  | 'VSS'
  | 'MK20H'
  | 'M417'
  | 'M249'
  | 'M762'
  | 'AUG'
  | 'GROZA'
  | 'MG3'
  | 'P90'
  | 'MIGUAN'
;

export type T_GunPosition = 'LEFT' | 'RIGHT';

export type MirrorCategory =
  'MACHINE_SIGHT'
  | 'RED_DOT_SIGHT'
  | 'HOLOGRAPHIC_SIGHT'
  | 'X2_SIGHT'
  | 'X3_SIGHT'
  | 'X4_SIGHT'
  | 'X6_SIGHT'
  | 'X8_SIGHT'
  ;

export type CnMirrorCategory =
  ''
  | '2倍'
  | '3倍'
  | '4倍'
  | '6倍6'
  | '6倍3'
  | '8倍'
  ;


export type T_Missile = 'FRAGMENT_BOMB' | 'SMOKE_BOMB' | 'MOLOTOV_COCKTAIL';

export type T_Medicine =
  'ENERGY_DRINK'
  | 'PAINKILLER'
  | 'EPINEPHRINE_INJECTION'
  | 'BANDAGE'
  | 'FIRST_AID_KIT'
  | 'MEDICAL_FIRST_AID_KIT'

export type T_Posture =
  'STAND'
  | 'SQUAT'
  | 'PROSTRATE'

export type CnPostureCategory =
  '站'
  | '蹲'
  | '趴'

export type PressConfig = {
  [key in GunCategory]: IMirrorPressArgs
}

export interface IMirrorPressArgs {
  [prop: string]: [ number, number, number ];
}
