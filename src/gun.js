import Utils from 'utils';

/** 持枪位置 */
const GUN_POSITION = {
  /** 左边枪 */
  LEFT: 'LEFT',
  /** 右边枪 */
  RIGHT: 'RIGHT',
}


/** 持枪位置-图片区域 */
const GUN_POSITION_IMAGE_AREA = {
  [GUN_POSITION.LEFT]: {
    SIMILARITY: 0.85,
    TOTAL_COLUMNS: 4,
    TOTAL_ROWS: 4,
    COLUMN_INDEX: 2, // 第 2 列
    ROW_INDEX: 4,
  },
  [GUN_POSITION.RIGHT]: {
    SIMILARITY: 0.85,
    TOTAL_COLUMNS: 4,
    TOTAL_ROWS: 4,
    COLUMN_INDEX: 3, // 第 3 列
    ROW_INDEX: 4,
  },
}

/* 持枪位置-颜色点 */
const GUN_POSITION_COLOR_POINT = {
  [GUN_POSITION.LEFT]: ['255:255:221:0', '613:613'],
  [GUN_POSITION.RIGHT]: ['255:254:220:1', '786:614'],
};

/** 枪的类型 */
const CATEGORIES = {
  M4: 'M4',
  SCARL: 'SCARL',
  DP28: 'DP28',

  UMP45: 'UMP45',
  YENIU: 'YENIU',
  UZI: 'UZI',
  VECTOR: 'VECTOR',
  TANGMUXUN: 'TANGMUXUN', // 汤姆逊枪

  AKM: 'AKM',

  ACVAL: 'ACVAL',

  M249: 'M249',

  M762: 'M762',

  AUG: 'AUG',
  GROZA: 'GROZA',
  MG3: 'MG3',
  P90: 'P90',

  MIGUAN: 'MIGUAN', // 蜜罐
};

/**
 * 获取当前持枪的位置
 *
 * @return { string | null }
 */
export function getGunPosition() {
  const leftPoint = mapi.findcolor(...GUN_POSITION_COLOR_POINT[GUN_POSITION.LEFT]);

  if (Utils.isPointExist(leftPoint)) {
    return GUN_POSITION.LEFT;
  }

  const rightPoint = mapi.findcolor(...GUN_POSITION_COLOR_POINT[GUN_POSITION.RIGHT]);

  if (Utils.isPointExist(rightPoint)) {
    return GUN_POSITION.RIGHT;
  }

  return null;
}


/**
 * 获取当前枪械的名称
 *
 * @return {string | null}
 */
function getCurrentGun() {
  const gunPosition = getGunPosition();

  const {
    SIMILARITY,
    TOTAL_COLUMNS,
    TOTAL_ROWS,
    COLUMN_INDEX,
    ROW_INDEX,
  } = GUN_POSITION_IMAGE_AREA[gunPosition];

  let currentGunName = null;

  Object.keys(CATEGORIES).some((gunName) => {
    const point = mapi.findimage(gunName, SIMILARITY, TOTAL_COLUMNS, TOTAL_ROWS, COLUMN_INDEX, ROW_INDEX);

    const isExist = Utils.isPointExist(point);

    if (isExist) {
      currentGunName = gunName;
    }

    return isExist;
  })

  return currentGunName;
}

export default {
  CATEGORIES,
  getCurrentGun,
}
