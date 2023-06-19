/**
 * mapi.point 是否 存在
 *
 * @param point { mapi.point }
 * @returns {boolean}
 */
export function isPointExist(point) {
  return point.X !== 0 || point.Y !== 0;
}

/**
 * mapi.point 是否 不存在
 *
 * @param point { mapi.point }
 * @returns {boolean}
 */
export function isPointNotExist(point) {
  return point.X === 0 || point.Y === 0;
}
