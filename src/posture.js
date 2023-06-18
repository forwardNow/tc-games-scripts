import { POSTURE } from 'constant';

/**
 * 获取姿势
 *
 * @return {string}
 */
export function getPosture() {
  const squatPoint = mapi.findcolor('255:255:241:119', '1305:653+1307:658+1307:665+1312:672+1313:681+1313:684');

  if (isNotEmpty(squatPoint)) {
    return POSTURE.squat;
  }

  const prostrationPoint = mapi.findcolor('255:253:237:119', '1421:639+1426:644+1437:649+1445:652');

  if (isNotEmpty(prostrationPoint)) {
    return POSTURE.prostration;
  }

  return POSTURE.stand;
}

/**
 *
 * @param point { mapi.point }
 * @returns {boolean}
 */
function isNotEmpty(point) {
  return point.X !== 0 || point.Y !== 0;
}
