import point = mapi.point;

export type ImageArgs = [ string, number, number, number, number, number ]

/** [sim, setCol, setRow, selectCol, selectRow] */
export type ImageAreaArgs = [ number, number, number, number, number ];

export type ColorArgs = [ string, string ];

/** mapi.point */
export type Point = point


export interface IState {
  [prop: string]: any,
}

export interface IGetters {
  [prop: string]: Function,
}

export interface IMutations {
  [prop: string]: Function,
}


export type T_Gun = 'M4'
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

export type T_GunPosition = 'LEFT' | 'RIGHT';

export type T_Mirror = 'MACHINE_SIGHT'
  | 'RED_DOT_SIGHT'
  | 'HOLOGRAPHIC_SIGHT'
  | 'X2_SIGHT'
  | 'X3_SIGHT'
  | 'X4_SIGHT'
  | 'X6_SIGHT'
  | 'X8_SIGHT'
  ;

export type T_OfficialMirror =
  ''
  | '2倍'
  | '3倍'
  | '4倍'
  | '6倍6'
  | '6倍3'
  | '8倍'
  ;


export type T_Missile = 'FRAGMENT_BOMB' | 'SMOKE_BOMB' | 'MOLOTOV_COCKTAIL';

export type T_Posture = 'STAND'
  | 'SQUAT'
  | 'PROSTRATE'

export type T_OfficialPosture = '站'
  | '蹲'
  | '趴'

export type T_PressConfig = {
  [key in T_Gun]: IMirrorPressArgs
}

export interface IMirrorPressArgs {
  [prop: string]: [ number, number, number ];
}
