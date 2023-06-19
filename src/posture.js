import { isPointNotEmpty } from 'utils';

/** 姿势 */
export const POSTURE_CATEGORIES = {
  /** 站 */
  STAND: 'STAND',
  /** 蹲 */
  SQUAT: 'SQUAT',
  /** 趴 */
  PROSTRATION: 'PROSTRATION'
};

/** 姿势的点的颜色 */
export const POSTURE_POINT_COLOR = {
  [POSTURE_CATEGORIES.SQUAT]: ['255:255:241:119', '1305:653+1307:658+1307:665+1312:672+1313:681+1313:684'],
  [POSTURE_CATEGORIES.PROSTRATION]: ['255:253:237:119', '1421:639+1426:644+1437:649+1445:652'],
}

/**
 * 获取姿势
 *
 * @return {string}
 */
export function getPosture() {
  const squatPoint = mapi.findcolor(...POSTURE_POINT_COLOR[POSTURE_CATEGORIES.SQUAT]);

  if (isPointNotEmpty(squatPoint)) {
    return POSTURE_CATEGORIES.SQUAT;
  }

  const prostrationPoint = mapi.findcolor(...POSTURE_POINT_COLOR[POSTURE_CATEGORIES.PROSTRATION]);

  if (isPointNotEmpty(prostrationPoint)) {
    return POSTURE_CATEGORIES.PROSTRATION;
  }

  return POSTURE_CATEGORIES.STAND;
}

