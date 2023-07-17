import Utils from './utils';
import Constant, { BIND_KEYS } from './constant';
import { PointArgs } from '../../types';

export class Bag {

  static IMAGE_NAMES = {
    BAG_OPEN: '背包已打开的标志',
  };

  static POINT: { [prop: string]: PointArgs } = {
    LEFT_GUN_POINT: [ 1788, 325 ],
    RIGHT_GUN_POINT: [ 1788, 973 ],
  };

  openBag() {
    if (this.isBagOpen()) {
      return;
    }

    mapi.key(BIND_KEYS.BAG, 300);
  }

  closeBag() {
    if (!this.isBagOpen()) {
      return;
    }

    Utils.clickKey(BIND_KEYS.BAG)
  }

  isBagOpen() {
    const point = mapi.findimage(Bag.IMAGE_NAMES.BAG_OPEN, 0.75, 4, 4, 4, 1);

    return Utils.isPointExist(point);
  }

  /**
   * 丢弃光标所指的物资
   * @returns {boolean} true - 执行成功
   */
  discardMaterialsUnderCursor = () => {
    if (!this.isBagOpen()) {
      return false;
    }

    const startPoint = mapi.getmousepos();

    const startX = startPoint.X;
    const startY = startPoint.Y;
    const endX = Constant.BAG_DUSTBIN_X;
    const endY = startPoint.Y;

    const total = 200;
    const pointNum = 10;
    const interval = total / pointNum;

    mapi.slide(startX, startY, endX, endY, interval, pointNum);

    return true;
  }

  swapGuns() {
    this.openBag();

    mapi.delay(100);

    const {
      LEFT_GUN_POINT: [ startX, startY ],
      RIGHT_GUN_POINT: [ endX, endY ],
    } = Bag.POINT;

    const total = 300;
    const pointNum = 20;
    const interval = total / pointNum;

    mapi.slide(startX, startY, endX, endY, interval, pointNum);

    this.closeBag();
  }
}

export const bag = new Bag();
