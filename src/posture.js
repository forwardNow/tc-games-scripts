import Utils from 'utils';

/** 姿势类别 */
const CATEGORIES = {
  /** 站 */
  STAND: 'STAND',
  /** 蹲 */
  SQUAT: 'SQUAT',
  /** 趴 */
  PROSTRATE: 'PROSTRATE'
};

/** 姿势映射，对应官方名称 */
const MAPPING = {
  [CATEGORIES.STAND]: '站',
  [CATEGORIES.SQUAT]: '蹲',
  [CATEGORIES.PROSTRATE]: '趴',
};

/**
 * 姿势类别-颜色点
 */
const COLOR_POINT = {
  [CATEGORIES.SQUAT]: ['255:255:241:119', '1305:653+1307:658+1307:665+1312:672+1313:681+1313:684'],
  [CATEGORIES.PROSTRATE]: ['255:253:237:119', '1421:639+1426:644+1437:649+1445:652'],
}

/**
 * 获取姿势
 *
 * @return {string}
 */
function getCurrentPosture() {
  const squatPoint = mapi.findcolor(...COLOR_POINT[CATEGORIES.SQUAT]);

  if (Utils.isPointExist(squatPoint)) {
    return CATEGORIES.SQUAT;
  }

  const prostrationPoint = mapi.findcolor(...COLOR_POINT[CATEGORIES.PROSTRATE]);

  if (Utils.isPointExist(prostrationPoint)) {
    return CATEGORIES.PROSTRATE;
  }

  return CATEGORIES.STAND;
}

export default {
  CATEGORIES,
  MAPPING,
  getCurrentPosture,
}
