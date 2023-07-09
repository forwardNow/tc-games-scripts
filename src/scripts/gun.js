import Utils from 'utils';
import Constant from 'constant';

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

  PKM: 'PKM',

  VSS: 'VSS',
  MK20H: 'MK20H',
  M417: 'M417',

  M249: 'M249',

  M762: 'M762',

  AUG: 'AUG',
  GROZA: 'GROZA',
  MG3: 'MG3',
  P90: 'P90',

  MIGUAN: 'MIGUAN', // 蜜罐
};

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
  [GUN_POSITION.LEFT]: Constant.GUN_POSITION_LEFT_COLOR_POINT,
  [GUN_POSITION.RIGHT]: Constant.GUN_POSITION_RIGHT_COLOR_POINT,
};

/* 持枪位置-中心点 */
const GUN_POSITION_POINT = {
  [GUN_POSITION.LEFT]: Constant.GUN_POSITION_LEFT_POINT,
  [GUN_POSITION.RIGHT]: Constant.GUN_POSITION_RIGHT_POINT,
}


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

function identityDelicateGuns() {
  let leftGuns = [];
  let rightGuns = [];

  Object.keys(CATEGORIES).forEach((cate) => {
    const imageName = `大图${cate}`;

    if( Utils.isImageExist(imageName, 0.85, 2, 2, 2, 1)) {
      leftGuns.push(cate);
    }
    if( Utils.isImageExist(imageName, 0.85, 2, 2, 2, 2)) {
      rightGuns.push(cate);
    }
  });

  const result = { leftGuns, rightGuns };

  loginfo(JSON.stringify(result));

  return result;
}

function identityFlatGuns() {
  let leftGuns = [];
  let rightGuns = [];

  Object.keys(CATEGORIES).forEach((cate) => {
    if( Utils.isImageExist(cate, 0.85, 4, 4, 2, 4)) {
      leftGuns.push(cate);
    }
    if( Utils.isImageExist(cate, 0.85, 4, 4, 3, 4)) {
      rightGuns.push(cate);
    }
  });

  const result = { leftGuns, rightGuns };

  loginfo(JSON.stringify(result));

  return result;
}

/**
 * 收枪
 */
function hideGun() {
  const gunPosition = getGunPosition();

  if (!gunPosition) {
    return;
  }

  if (gunPosition === GUN_POSITION.LEFT) {
    mapi.click(...GUN_POSITION_POINT.LEFT);
  }

  if (gunPosition === GUN_POSITION.RIGHT) {
    mapi.click(...GUN_POSITION_POINT.RIGHT);
  }
}

/**
 * 切枪
 */
function switchGun() {
  const gunPosition = getGunPosition();

  if (!gunPosition) {
    mapi.click(...GUN_POSITION_POINT.LEFT);
    return;
  }

  if (gunPosition === GUN_POSITION.LEFT) {
    mapi.click(...GUN_POSITION_POINT.RIGHT);
  }

  if (gunPosition === GUN_POSITION.RIGHT) {
    mapi.click(...GUN_POSITION_POINT.LEFT);
  }
}

export default {
  CATEGORIES,
  getCurrentGun,
  hideGun,
  switchGun,

  identityFlatGuns,
  identityDelicateGuns,
}
