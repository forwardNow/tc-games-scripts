import { GUN_POSITION, POSTURE } from 'constant';
import { isPointNotEmpty } from 'utils';

/**
 * 获取当前持枪的位置
 * 变量 持左枪=多点找色 255:255:221:0 613:613
 * 变量 持右枪=多点找色 255:254:220:1 786:614
 */
export function getGunPosition() {
  const leftPoint = mapi.findcolor('255:255:221:0', '613:613');

  if (isPointNotEmpty(leftPoint)) {
    return GUN_POSITION.left;
  }

  const rightPoint = mapi.findcolor('255:254:220:1', '786:614');

  if (isPointNotEmpty(rightPoint)) {
    return GUN_POSITION.right;
  }

  return null;
}
