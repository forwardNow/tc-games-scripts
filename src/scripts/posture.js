import Utils from 'utils';
import Constant from 'constant'

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
  [CATEGORIES.SQUAT]: Constant.SQUAT_COLOR_POINT,
  [CATEGORIES.PROSTRATE]: Constant.PROSTRATE_COLOR_POINT,
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
