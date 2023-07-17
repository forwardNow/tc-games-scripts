import { Point } from '../../types';
import Store from './store';

export class Utils {
  /**
   * mapi.point 是否 存在
   *
   * @param point { mapi.point }
   * @returns {boolean}
   */
  isPointExist(point: Point) {
    return point.X !== 0 || point.Y !== 0;
  }

  /**
   * mapi.point 是否 不存在
   *
   * @param point { mapi.point }
   * @returns {boolean}
   */
  isPointNotExist(point: Point) {
    return point.X === 0 || point.Y === 0;
  }

  isImageExist(imgName: string, sim: number, setCol: number, setRow: number, selectCol: number, selectRow: number) {
    return this.isPointExist(mapi.findimage(imgName, sim, setCol, setRow, selectCol, selectRow));
  }

  /**
   * @param color {string}
   * @param posList {string}
   * @return {boolean}
   */
  isColorExist(color: string, posList: string) {
    return this.isPointExist(mapi.findcolor(color, posList))
  }

  /**
   * 包装 mapi.tip(content)
   *
   * @param content {string} 显式的内容
   * @param duration {number} 存在时间，单位 秒，默认 1 秒
   */
  showTip(content: string, duration = 1) {
    if (!Store.state.isTipEnabled) {
      return;
    }
    mapi.tip(content, duration);
  }

  clickImagePosition(imgName: string, sim: number, setCol: number, setRow: number, selectCol: number, selectRow: number) {
    const point = mapi.findimage(imgName, sim, setCol, setRow, selectCol, selectRow);

    if (this.isPointNotExist(point)) {
      return false;
    }

    mapi.click(point);
  }

  /** 点击当前按键所在位置 */
  clickCurrentKey() {
    mapi.click();
  }

  /** 按 key 按键 pressDuration 毫秒 */
  clickKey(key: string, pressDuration: number = 100) {
    mapi.key(key, pressDuration);
  }

  /** 重置 准心、方向键 */
  reset() {
    mapi.aimreset();
    mapi.directionreset();
  }

  /**
   * 顺序执行多个函数
   * @param funcList { Function[] }
   * @param interruptReturnValue { boolean } 如果函数返回这个值，则中断执行
   */
  series(funcList: Function[], interruptReturnValue = true) {
    funcList.some((func) => {
      const result = func();

      return result === interruptReturnValue;
    });
  }

  switchToShotMode() {
    mapi.shotmode(true);
  }

  switchToMouseMode() {
    mapi.shotmode(true);
  }
}

export const utils = new Utils();
