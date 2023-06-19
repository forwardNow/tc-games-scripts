import { isPointExist } from 'utils';

/** 姿势类别 */
export const POSTURE_CATEGORIES = {
  /** 站 */
  STAND: 'STAND',
  /** 蹲 */
  SQUAT: 'SQUAT',
  /** 趴 */
  PROSTRATE: 'PROSTRATE'
};

/** 姿势类别-颜色点 */
const COLOR_POINT = {
  [POSTURE_CATEGORIES.SQUAT]: ['255:255:241:119', '1305:653+1307:658+1307:665+1312:672+1313:681+1313:684'],
  [POSTURE_CATEGORIES.PROSTRATE]: ['255:253:237:119', '1421:639+1426:644+1437:649+1445:652'],
}

/**
 * 获取姿势
 *
 * @return {string}
 */
export function getPosture() {
  const squatPoint = mapi.findcolor(...COLOR_POINT[POSTURE_CATEGORIES.SQUAT]);

  if (isPointExist(squatPoint)) {
    return POSTURE_CATEGORIES.SQUAT;
  }

  const prostrationPoint = mapi.findcolor(...COLOR_POINT[POSTURE_CATEGORIES.PROSTRATE]);

  if (isPointExist(prostrationPoint)) {
    return POSTURE_CATEGORIES.PROSTRATE;
  }

  return POSTURE_CATEGORIES.STAND;
}

