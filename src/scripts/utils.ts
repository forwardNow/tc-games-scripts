import Store from './store';
import { Point } from '../../types';
import {BIND_KEYS} from "./constant";

/**
 * mapi.point 是否 存在
 *
 * @param point { mapi.point }
 * @returns {boolean}
 */
function isPointExist(point: Point) {
  return point.X !== 0 || point.Y !== 0;
}

/**
 * mapi.point 是否 不存在
 *
 * @param point { mapi.point }
 * @returns {boolean}
 */
function isPointNotExist(point: Point) {
  return point.X === 0 || point.Y === 0;
}

function isImageExist(imgName: string, sim: number, setCol: number, setRow: number, selectCol: number, selectRow: number) {
  return isPointExist(mapi.findimage(imgName, sim, setCol, setRow, selectCol, selectRow));
}

/**
 * @param color {string}
 * @param posList {string}
 * @return {boolean}
 */
function isColorExist(color: string, posList: string) {
  return isPointExist(mapi.findcolor(color, posList))
}

/**
 * 包装 mapi.tip(content)
 *
 * @param content {string} 显式的内容
 * @param duration {number} 存在时间，单位 秒，默认 1 秒
 */
function showTip(content: string, duration = 1) {
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


function clickImagePosition(imgName: string, sim: number, setCol: number, setRow: number, selectCol: number, selectRow: number) {
  const point = mapi.findimage(imgName, sim, setCol, setRow, selectCol, selectRow);

  if (isPointNotExist(point)) {
    return false;
  }

  mapi.click(point);
}

// 点击当前按键所在位置
function clickCurrentKey() {
  mapi.click();
}

/** 按 key 按键 pressDuration 毫秒 */
function clickKey(key: string, pressDuration: number = 100) {
  mapi.key(key, pressDuration);
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
function series(funcList: Function[], interruptReturnValue = true) {
  funcList.some((func) => {
    const result = func();

    return result === interruptReturnValue;
  });
}

function switchToShotMode() {
  mapi.shotmode(true);
}

function switchToMouseMode() {
  mapi.shotmode(true);
}

export default {
  isPointExist,
  isPointNotExist,

  isImageExist,
  isColorExist,

  showTip,
  toggleEnableOfTip,

  clickImagePosition,
  clickCurrentKey,
  clickKey,

  reset,

  series,

  switchToShotMode,
  switchToMouseMode,
}
