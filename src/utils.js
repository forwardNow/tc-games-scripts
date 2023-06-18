/**
 * mapi.point 是否有值
 *
 * @param point { mapi.point }
 * @returns {boolean}
 */
export function isPointNotEmpty(point) {
  return point.X !== 0 || point.Y !== 0;
}
