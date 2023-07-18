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

export type GunPosition = 'Left' | 'Right';

export type MirrorCategory =
  'MachineSight'
  | 'RedDotSight'
  | 'HolographicSight'
  | 'X2Sight'
  | 'X3Sight'
  | 'X4Sight'
  | 'X6Sight'
  | 'X8Sight'
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


export type MissileCategory = 'FragmentBomb' | 'SmokeBomb' | 'MolotovCocktail';

export type MedicineCategory =
  'EnergyDrink'
  | 'Painkiller'
  | 'EpinephrineInjection'
  | 'Bandage'
  | 'FirstAidKit'
  | 'MedicalFirstAidKit'

export type PostureCategory =
  'Stand'
  | 'Squat'
  | 'Prostrate'

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
