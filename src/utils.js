/**
 * 全局缓存 map key
 *
 * 控制 mapi.tip() 是否 启用
 */
const IS_TIP_ENABLED = 'IS_TIP_ENABLED';

/**
 * mapi.point 是否 存在
 *
 * @param point { mapi.point }
 * @returns {boolean}
 */
function isPointExist(point) {
  return point.X !== 0 || point.Y !== 0;
}

/**
 * mapi.point 是否 不存在
 *
 * @param point { mapi.point }
 * @returns {boolean}
 */
function isPointNotExist(point) {
  return point.X === 0 || point.Y === 0;
}

/**
 * 包装 mapi.tip(content)
 *
 * @param content {string} 显式的内容
 * @param duration {number} 存在时间，单位 秒，默认 1 秒
 */
function showTip(content, duration = 1) {
  if (!mapi.getglobalmap(IS_TIP_ENABLED)) {
    return;
  }
  mapi.tip(content, duration);
}

/**
 * 切换 mapi.tip() 的启用和禁止
 */
function toggleEnableOfTip() {
  const isTipEnabled = mapi.getglobalmap(IS_TIP_ENABLED);

  mapi.setglobalmap(IS_TIP_ENABLED, !isTipEnabled);
}

export default {
  isPointExist,
  isPointNotExist,

  showTip,
  toggleEnableOfTip,
}
