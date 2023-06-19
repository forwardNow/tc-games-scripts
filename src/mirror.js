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
  /** 6倍镜 */
  X6_SIGHT: 'X6_SIGHT',
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

/**
 * 获取当前准镜名称
 *
 * @return { string }
 */
export function getCurrentMirrorName() {
  const {
    SIMILARITY,
    TOTAL_COLUMNS,
    TOTAL_ROWS,
    COLUMN_INDEX,
    ROW_INDEX,
  } = CURRENT_MIRROR_IMAGE_AREA;

  const args = [TOTAL_COLUMNS, TOTAL_ROWS, COLUMN_INDEX, ROW_INDEX];

  const curr6XPoint = mapi.findimage(IMAGE_NAMES.CURRENT_6X_SIGHT, SIMILARITY, ...args);

  if (isPointExist(curr6XPoint)) {
    return MIRROR_CATEGORIES.X6_SIGHT;
  }

  const curr4XPoint = mapi.findimage(IMAGE_NAMES.CURRENT_4X_SIGHT, SIMILARITY, ...args);

  if (isPointExist(curr4XPoint)) {
    return MIRROR_CATEGORIES.X4_SIGHT;
  }

  const curr3XPoint = mapi.findimage(IMAGE_NAMES.CURRENT_3X_SIGHT, SIMILARITY - 0.08, ...args);

  if (isPointExist(curr3XPoint)) {
    return MIRROR_CATEGORIES.X3_SIGHT;
  }

  const curr2XPoint = mapi.findimage(IMAGE_NAMES.CURRENT_2X_SIGHT, SIMILARITY, ...args);

  if (isPointExist(curr2XPoint)) {
    return MIRROR_CATEGORIES.X2_SIGHT;
  }

  return '';
}
