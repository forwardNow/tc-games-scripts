import { isPointExist } from 'utils';

/** 准镜状态 */
export const MIRROR_STATUS = {
  /** 开镜 */
  OPEN: 'OPEN',
  /** 未开镜 */
  CLOSE: 'CLOSE',
}

/** 准镜类型 */
export const MIRROR_CATEGORIES = {
  /** 红点 */
  RED_DOT_SIGHT: 'RED_DOT_SIGHT',
  /** 全息 */
  HOLOGRAPHIC_SIGHT: 'HOLOGRAPHIC_SIGHT',
  /** 2倍镜 */
  X2_SIGHT: 'X2_SIGHT',
  /** 3倍镜 */
  X3_SIGHT: 'X3_SIGHT',
  /** 4倍镜 */
  X4_SIGHT: 'X4_SIGHT',
  /** 6倍镜，未调整过的 */
  X6_SIGHT: 'X6_SIGHT',
  /** 6倍镜，3倍率 */
  X6_X3_SIGHT: 'X6_X3_SIGHT',
}

/** 图片名称 */
const IMAGE_NAMES = {
  /** 第一（三）人称图标 */
  FIRST_PERSON_ICON: '没有开镜',
  RED_DOT_SIGHT: '全息压枪',
  HOLOGRAPHIC_SIGHT: '红点压枪',
  CURRENT_2X_SIGHT: '2倍压枪',
  CURRENT_3X_SIGHT: '3倍压枪',
  CURRENT_4X_SIGHT: '4倍压枪',
  CURRENT_6X_SIGHT: '6倍压枪',
  CURRENT_6X_3X_SIGHT: '6倍转3倍压枪', // 新增图片
};

/**
 * 是否开镜
 *
 * @return {boolean}
 */
export function isMirrorOpen() {
  // 第一（三）人称图标 如果存在 则说明未开镜
  const point = mapi.findimage(IMAGE_NAMES.FIRST_PERSON_ICON, 0.75, 4, 4, 1, 4);
  const isExist = isPointExist(point)

  return !isExist;
}

const CURRENT_MIRROR_IMAGE_AREA = {
  SIMILARITY: 0.75 - 0.07, // 0.68,
  TOTAL_COLUMNS: 4,
  TOTAL_ROWS: 4,
  COLUMN_INDEX: 4,
  ROW_INDEX: 2,
};

const MIRROR_IMAGE_ARGS = [
  CURRENT_MIRROR_IMAGE_AREA.SIMILARITY,
  CURRENT_MIRROR_IMAGE_AREA.TOTAL_COLUMNS,
  CURRENT_MIRROR_IMAGE_AREA.TOTAL_ROWS,
  CURRENT_MIRROR_IMAGE_AREA.COLUMN_INDEX,
  CURRENT_MIRROR_IMAGE_AREA.ROW_INDEX,
];


/**
 * 获取当前准镜名称
 *
 * @return { string }
 */
export function getCurrentMirrorName() {
  if (isX6Sight()) {
    return MIRROR_CATEGORIES.X6_SIGHT;
  }

  if (isX4Sight()) {
    return MIRROR_CATEGORIES.X4_SIGHT;
  }

  if (isX3Sight()) {
    return MIRROR_CATEGORIES.X3_SIGHT;
  }

  if (isX2Sight()) {
    return MIRROR_CATEGORIES.X2_SIGHT;
  }

  return '';
}
/**
 * 当前是否为 6 倍镜
 * @return {boolean}
 */
export function isX6Sight() {
  const point = mapi.findimage(IMAGE_NAMES.CURRENT_6X_SIGHT, ...MIRROR_IMAGE_ARGS);
  return isPointExist(point);
}

/**
 * 当前是否为 4 倍镜
 * @return {boolean}
 */
export function isX4Sight() {
  const point = mapi.findimage(IMAGE_NAMES.CURRENT_4X_SIGHT, ...MIRROR_IMAGE_ARGS);
  return isPointExist(point);
}

/**
 * 当前是否为 3 倍镜
 * @return {boolean}
 */
export function isX3Sight() {
  const similarity = CURRENT_MIRROR_IMAGE_AREA - 0.08;
  const point = mapi.findimage(IMAGE_NAMES.CURRENT_3X_SIGHT, similarity, ...MIRROR_IMAGE_ARGS.slice(1));
  return isPointExist(point);
}

/**
 * 当前是否为 2 倍镜
 * @return {boolean}
 */
export function isX2Sight() {
  const point = mapi.findimage(IMAGE_NAMES.CURRENT_2X_SIGHT, ...MIRROR_IMAGE_ARGS);
  return isPointExist(point);
}


/**
 * 调整六倍镜，6倍率 -> 3倍率
 * @return {string} MIRROR_CATEGORIES.X6_X3_SIGHT
 */
export function adjustX6ToX3() {
  // TODO 调整六倍镜，6倍率 -> 3倍率
  return MIRROR_CATEGORIES.X6_X3_SIGHT;
}

/**
 * 调整六倍镜，3倍率 -> 6倍率
 * @return {string} MIRROR_CATEGORIES.X6_TO_X6_SIGHT
 */
export function adjustX3ToX6() {
  // TODO 调整六倍镜，3倍率 -> 6倍率
  return MIRROR_CATEGORIES.X6_SIGHT;
}
