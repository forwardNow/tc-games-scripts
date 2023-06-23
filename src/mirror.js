import Utils from 'utils';

/** 准镜类型 */
const CATEGORIES = {
  /** 机瞄 */
  MACHINE_SIGHT: 'MACHINE_SIGHT',
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

/** 准镜映射，对应官方名称 */
const MAPPING = {
  [CATEGORIES.X2_SIGHT]: '2倍',
  [CATEGORIES.X3_SIGHT]: '3倍',
  [CATEGORIES.X4_SIGHT]: '4倍',
  [CATEGORIES.X6_SIGHT]: '6倍6',
  [CATEGORIES.X6_X3_SIGHT]: '6倍3',
};

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
  CURRENT_6X_3X_SIGHT: '6倍转3倍压枪', // TODO: 新增图片

  /** 打开 6 倍镜缩放条 的按钮 */
  BUTTON_OF_X6_SIGHT_ZOOM_BAR: '倍镜缩放展开',
  /** 6 倍镜缩放条 */
  X6_SIGHT_ZOOM_BAR: '倍镜缩放',
};

/**
 * 是否开镜
 *
 * @return {boolean}
 */
function isOpen() {
  // 第一（三）人称图标 如果存在 则说明未开镜
  const point = mapi.findimage(IMAGE_NAMES.FIRST_PERSON_ICON, 0.75, 4, 4, 1, 4);
  const isExist = Utils.isPointExist(point)

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
function getCurrentMirror() {
  if (isX6Sight()) {
    return CATEGORIES.X6_SIGHT;
  }

  if (isX4Sight()) {
    return CATEGORIES.X4_SIGHT;
  }

  if (isX3Sight()) {
    return CATEGORIES.X3_SIGHT;
  }

  if (isX2Sight()) {
    return CATEGORIES.X2_SIGHT;
  }

  return '';
}

/**
 * 当前是否为 6 倍镜
 * @return {boolean}
 */
function isX6Sight() {
  const similarity = CURRENT_MIRROR_IMAGE_AREA.SIMILARITY - 0.08;
  const point = mapi.findimage(IMAGE_NAMES.CURRENT_6X_SIGHT, similarity, ...MIRROR_IMAGE_ARGS.slice(1));
  return Utils.isPointExist(point);
}

/**
 * 当前是否为 4 倍镜
 * @return {boolean}
 */
function isX4Sight() {
  const point = mapi.findimage(IMAGE_NAMES.CURRENT_4X_SIGHT, ...MIRROR_IMAGE_ARGS);
  return Utils.isPointExist(point);
}

/**
 * 当前是否为 3 倍镜
 * @return {boolean}
 */
function isX3Sight() {
  const similarity = CURRENT_MIRROR_IMAGE_AREA.SIMILARITY - 0.12;
  const point = mapi.findimage(IMAGE_NAMES.CURRENT_3X_SIGHT, similarity, ...MIRROR_IMAGE_ARGS.slice(1));
  return Utils.isPointExist(point);
}

/**
 * 当前是否为 2 倍镜
 * @return {boolean}
 */
function isX2Sight() {
  const point = mapi.findimage(IMAGE_NAMES.CURRENT_2X_SIGHT, ...MIRROR_IMAGE_ARGS);
  return Utils.isPointExist(point);
}


const X6_SIGHT_ZOOM_BAR_POINT = { x: 678, y: 222 };
const X6_TO_X3_POINT = { x: 678, y: 597 };
const X6_TO_X6_POINT = { x: 678, y: 346 };

/**
 * 打开 6 倍瞄准镜的缩放栏
 */
function openZoomBarOf6XSight() {
  const zoomBarPoint = mapi.findimage(IMAGE_NAMES.X6_SIGHT_ZOOM_BAR, 0.92, 4, 1, 2, 1);

  if (Utils.isPointExist(zoomBarPoint)) {
    return;
  }

  const buttonPoint = mapi.findimage(IMAGE_NAMES.BUTTON_OF_X6_SIGHT_ZOOM_BAR, 0.8, 4, 1, 2, 1);

  if (!Utils.isPointExist(buttonPoint)) {
    logerror('未找到打开 6 倍镜缩放条 的按钮');
    return;
  }

  mapi.click(X6_SIGHT_ZOOM_BAR_POINT.x, X6_SIGHT_ZOOM_BAR_POINT.y);

  return true;
}

/**
 * 调整六倍镜，设置为 3 倍率
 * @return {string} CATEGORIES.X6_X3_SIGHT
 */
function adjustX6ToX3() {
  if(openZoomBarOf6XSight()) {
    mapi.delay(100);
  }

  mapi.click(X6_TO_X3_POINT.x, X6_TO_X3_POINT.y);

  return CATEGORIES.X6_X3_SIGHT;
}

/**
 * 调整六倍镜，设置为 6 倍率
 * @return {string} CATEGORIES.X6_TO_X6_SIGHT
 */
function adjustX6ToX6() {
  if(openZoomBarOf6XSight()) {
    mapi.delay(100);
  }

  mapi.click(X6_TO_X6_POINT.x, X6_TO_X6_POINT.y);

  return CATEGORIES.X6_SIGHT;
}

export default {
  CATEGORIES,
  MAPPING,
  isOpen,
  getCurrentMirror,
  isX6Sight,
  isX4Sight,
  isX3Sight,
  isX2Sight,
  adjustX6ToX3,
  adjustX6ToX6,
}
