import { isPointNotEmpty } from 'utils';

/** 姿势 */
export const POSTURE = {
  /** 站 */
  stand: 'stand',
  /** 蹲 */
  squat: 'squat',
  /** 趴 */
  prostration: 'prostration'
};

/**
 * 获取姿势
 *
 * @return {string}
 */
export function getPosture() {
  const squatPoint = mapi.findcolor('255:255:241:119', '1305:653+1307:658+1307:665+1312:672+1313:681+1313:684');

  if (isPointNotEmpty(squatPoint)) {
    return POSTURE.squat;
  }

  const prostrationPoint = mapi.findcolor('255:253:237:119', '1421:639+1426:644+1437:649+1445:652');

  if (isPointNotEmpty(prostrationPoint)) {
    return POSTURE.prostration;
  }

  return POSTURE.stand;
}

