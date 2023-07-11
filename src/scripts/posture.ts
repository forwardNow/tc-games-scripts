import Utils from './utils';
import Constant from './constant'
import { ColorArgs, T_OfficialPosture, T_Posture } from '../../types';

/** 姿势类别 */
const CATEGORIES: { [key in T_Posture]: T_Posture } = {
  /** 站 */
  STAND: 'STAND',
  /** 蹲 */
  SQUAT: 'SQUAT',
  /** 趴 */
  PROSTRATE: 'PROSTRATE'
};

/** 姿势映射，对应官方名称 */
const MAPPING: { [key in T_Posture]: T_OfficialPosture } = {
  STAND: '站',
  SQUAT: '蹲',
  PROSTRATE: '趴',
};

/**
 * 姿势类别-颜色点
 */
const COLOR_POINT: { [key in Exclude<T_Posture, 'STAND'>]: ColorArgs } = {
  SQUAT: Constant.SQUAT_COLOR_POINT,
  PROSTRATE: Constant.PROSTRATE_COLOR_POINT,
}

/**
 * 获取姿势
 *
 * @return {string}
 */
function getCurrentPosture() {
  if (isSquat()) {
    return CATEGORIES.SQUAT;
  }

  if (isProstrate()) {
    return CATEGORIES.PROSTRATE;
  }

  return CATEGORIES.STAND;
}

function isSquat() {
  const [color, posList] = COLOR_POINT.SQUAT;
  return Utils.isColorExist(color, posList);
}

function isProstrate() {
  const [color, posList] = COLOR_POINT.PROSTRATE;
  return Utils.isColorExist(color, posList);
}


export default {
  CATEGORIES,
  MAPPING,
  getCurrentPosture,
}
