import { POSTURE } from './constant';

/** 获取姿势 */
export function getPosture() {
  const isStand = mapi.findcolor('255:255:251:183', '1352:671+1351:665+1352:665+1354:670');
  if (isStand.X !== 0 || isStand.Y !== 0) {
    return POSTURE.stand;
  }
  var isProstration = mapi.findcolor('255:254:247:142', '1475:648+1477:648+1475:650+1477:650');
  if (isProstration.X != 0 || isProstration.Y != 0) {
    return '趴';
  }
  return '站';
}
