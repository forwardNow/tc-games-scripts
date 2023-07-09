import Store from 'store';

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
  if (!Store.state.isTipEnabled) {
    return;
  }
  mapi.tip(content, duration);
}

/**
 * 切换 mapi.tip() 的启用和禁止
 */
function toggleEnableOfTip() {
  Store.state.isTipEnabled = !Store.state.isTipEnabled;
}


function clickImagePosition(imgName, sim, setCol, setRow, selectCol, selectRow) {
  const point = mapi.findimage(imgName, sim, setCol, setRow, selectCol, selectRow);

  if (isPointNotExist(point)) {
    showTip('未找到图片：' + imgName);
    return false;
  }

  mapi.click(point);
}

// 点击当前按键所在位置
function clickCurrentKey() {
  mapi.click();
}

// 重置 准心、方向键
function reset() {
  mapi.aimreset();
  mapi.directionreset();
}

/**
 * 顺序执行多个函数
 * @param funcList { Function[] }
 * @param interruptReturnValue { boolean } 如果函数返回这个值，则中断执行
 */
function series(funcList, interruptReturnValue = true) {
  funcList.some((func) => {
    const result = func();

    return result === interruptReturnValue;
  });
}

export default {
  isPointExist,
  isPointNotExist,

  showTip,
  toggleEnableOfTip,

  clickImagePosition,
  clickCurrentKey,

  reset,

  series,
}
