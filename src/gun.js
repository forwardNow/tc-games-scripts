import { isPointNotEmpty } from 'utils';

/** 持枪位置 */
export const GUN_POSITION = {
  /** 左边枪 */
  left: 'left',
  /** 右边枪 */
  right: 'right',
}

/** 枪的类型 */
export const GUN_CATEGORIES = {
  M4: 'M4',
  SCARL: 'SCARL',
  DP28: 'DP28',

  UMP45: 'UMP45',
  YENIU: 'YENIU',
  UZI: 'UZI',
  VECTOR: 'VECTOR',
  TANGMUXUN: 'TANGMUXUN', // 汤姆逊枪

  AKM: 'AKM',

  ACVAL: 'ACVAL',

  M249: 'M249',

  M762: 'M762',

  AUG: 'AUG',
  GROZA: 'GROZA',
  MG3: 'MG3',
  P90: 'P90',

  MIGUAN: 'MIGUAN', // 蜜罐
};

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
