import { Point } from '../../types';
import store from './store';

export class Utils {
  /**
   * mapi.point 是否 存在
   *
   * @param point { mapi.point }
   * @returns {boolean}
   */
  isPointExist(point: mapi.point) {
    return point.X !== 0 || point.Y !== 0;
  }

  /**
   * mapi.point 是否 不存在
   *
   * @param point { mapi.point }
   * @returns {boolean}
   */
  isPointNotExist(point: mapi.point) {
    return point.X === 0 || point.Y === 0;
  }

  isImageExist(imgName: string, sim: number, setCol: number, setRow: number, selectCol: number, selectRow: number) {
    return this.isPointExist(this.findImage(imgName, sim, setCol, setRow, selectCol, selectRow));
  }

  /**
   * @param color {string}
   * @param posList {string}
   * @return {boolean}
   */
  isColorExist(color: string, posList: string) {
    return this.isPointExist(mapi.findcolor(color, posList));
  }

  /**
   * 包装 mapi.tip(content)
   *
   * @param content {string} 显式的内容
   * @param duration {number} 存在时间，单位 秒，默认 1 秒
   */
  showTip(content: string, duration = 1) {
    if (!store.state.tip) {
      return;
    }
    mapi.tip(content, duration);
  }

  findImage(imgName: string, sim: number, columnTotal: number, rowTotal: number, selectCol: number, selectRow: number) {
    return mapi.findimage(imgName, sim, columnTotal, rowTotal, selectCol, selectRow);
  }

  clickImagePosition(imgName: string, sim: number, columnTotal: number, rowTotal: number, selectCol: number, selectRow: number) {
    const point = this.findImage(imgName, sim, columnTotal, rowTotal, selectCol, selectRow);

    if (this.isPointNotExist(point)) {
      return false;
    }

    mapi.click(point);
  }

  clickPoint(point: mapi.point | Point) {
    let x: number;
    let y: number;

    if ('x' in point) {
      ({ x, y } = point);
    } else {
      ({ X: x, Y: y } = point);
    }

    mapi.click(x, y);
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
  resetAimAndDirection() {
    mapi.aimreset();
    mapi.directionreset();
  }

  resetAim() {
    mapi.aimreset();
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

  /** 按住当前按键，松开后释放 */
  holdPressCurrentKey() {
    mapi.holdpress();
  }

  /** 启动 自定义准心调节 */
  startCustomAim() {
    mapi.startcustomaimpar();
  }

  /** 运行 自定义准心调节 */
  playCustomAim() {
    mapi.customaimpar(false);
  }

  /** 暂停 自定义准心调节 */
  pauseCustomAim() {
    mapi.customaimpar(true);
  }

  /** 更新 自定义准心调节 参数 */
  updateCustomAim(x: number, y: number, delay: number) {
    mapi.changecustomaimpar(x, y, delay);
  }

  /** 获取光标的位置 */
  getMousePosition() {
    return mapi.getmousepos()
  }

  /** 滑动操作 */
  slide(startX: number, startY: number, endX: number, endY: number, interval: number, pointNum: number) {
    mapi.slide(startX, startY, endX, endY, interval, pointNum);
  }

  /** 延迟 */
  delay(milliseconds: number = 100) {
    mapi.delay(milliseconds)
  }

  isPressingKey(keyName: string): boolean {
    return mapi.keyispress(keyName)
  }

  isPressingCurrentKey() {
    return mapi.keyispress();
  }

  getValueFromGlobalMap(key: string | Object): any {
    return mapi.getglobalmap(key);
  }

  setValueToGlobalMap(key: string | Object, value: any) {
    mapi.setglobalmap(key, value)
  }
}

export const utils = new Utils();
