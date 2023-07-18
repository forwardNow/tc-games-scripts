import { utils } from './utils';
import constant, { BindKeys } from './constant';
import { PointArgs } from '../../types';

export class Bag {
  static ImageNames = {
    BagOpenFlagIcon: '背包已打开的标志',
  };

  static Point: { [prop: string]: PointArgs } = {
    LeftGunPoint: [ 1788, 325 ],
    RightGunPoint: [ 1788, 973 ],
  };

  openBag() {
    if (this.isBagOpen()) {
      return;
    }

    utils.clickKey(BindKeys.Bag);
  }

  closeBag() {
    if (!this.isBagOpen()) {
      return;
    }

    utils.clickKey(BindKeys.Bag)
  }

  isBagOpen() {
    const point = utils.findImage(Bag.ImageNames.BagOpenFlagIcon, 0.75, 4, 4, 4, 1);

    return utils.isPointExist(point);
  }

  /**
   * 丢弃光标所指的物资
   * @returns {boolean} true - 执行成功
   */
  discardMaterialsUnderCursor = () => {
    if (!this.isBagOpen()) {
      return false;
    }

    const startPoint = utils.getMousePosition();

    const startX = startPoint.X;
    const startY = startPoint.Y;
    const endX = constant.BagDustbinX;
    const endY = startPoint.Y;

    const total = 200;
    const pointNum = 10;
    const interval = total / pointNum;

    utils.slide(startX, startY, endX, endY, interval, pointNum);

    return true;
  }

  swapGuns() {
    this.openBag();

    utils.delay();

    const {
      LeftGunPoint: [ startX, startY ],
      RightGunPoint: [ endX, endY ],
    } = Bag.Point;

    const total = 300;
    const pointNum = 20;
    const interval = total / pointNum;

    utils.slide(startX, startY, endX, endY, interval, pointNum);

    this.closeBag();
  }
}

export const bag = new Bag();
