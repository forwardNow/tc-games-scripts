import { GUN_CATEGORIES, GUN_POSITION, POSTURE } from 'constant';
import { isPointNotEmpty } from 'utils';

/**
 * 获取当前持枪的位置
 *
 * @return { string | null }
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

/**
 * 获取当前枪械的名称
 *
 * @return {string | null}
 */
export function getCurrentGunName() {
  const gunPosition = getGunPosition();

  const sim = 0.85;
  const setCol = 4;
  const setRow = 4;
  const selectCol = gunPosition === GUN_POSITION.left ? 2 : 3;
  const selectRow = 4;

  let currentGunName = null;

  Object.keys(GUN_CATEGORIES).some((gunName) => {
    const point = mapi.findimage(gunName, sim, setCol, setRow, selectCol, selectRow);

    const isExist = isPointNotEmpty(point);

    if (isExist) {
      currentGunName = gunName;
    }

    return isExist;
  })

  return currentGunName;
}
