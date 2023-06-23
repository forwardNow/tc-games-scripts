/**
 * mapi.tip() 是否 启用
 * @type {boolean}
 */
let IS_TIP_ENABLED = true;

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
  loginfo(`showTip()， IS_TIP_ENABLED = ${IS_TIP_ENABLED}`)

  if (!IS_TIP_ENABLED) {
    return;
  }
  mapi.tip(content, duration);
}

function toggleEnableOfTip() {
  IS_TIP_ENABLED = !IS_TIP_ENABLED;
  loginfo(`toggleEnableOfTip()， IS_TIP_ENABLED = ${IS_TIP_ENABLED}`)
}

export default {
  isPointExist,
  isPointNotExist,

  showTip,
  toggleEnableOfTip,
}
