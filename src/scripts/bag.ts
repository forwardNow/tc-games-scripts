import { utils } from './utils';
import constant, { BindKeys } from './constant';
import { ImageArgs, Point, PointArgs } from '../../types';

export class Bag {
  static ImageArgs: { [name: string]: ImageArgs } = {
    BagOpenFlagIcon: ['背包已打开的标志', 0.75, 4, 4, 4, 1],
    PickupCloseIcon: ['拾取列表关闭按钮', 0.75, 4, 4, 3, 1],
  }

  static Points: { [prop: string]: Point } = {
    BagLeftGunCenterPoint: { x: 1788, y: 325 } as Point,
    BagRightGunCenterPoint: { x: 1788, y: 973 } as Point,
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
    return utils.isImageExist(...Bag.ImageArgs.BagOpenFlagIcon);
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
      BagLeftGunCenterPoint: { x: startX, y: startY },
      BagRightGunCenterPoint: { x: endX, y: endY },
    } = Bag.Points;

    const total = 300;
    const pointNum = 20;
    const interval = total / pointNum;

    utils.slide(startX, startY, endX, endY, interval, pointNum);

    this.closeBag();
  }

  /** 是否可以拾取东西 */
  canPickUp() {
    return utils.isImageExist(...Bag.ImageArgs.PickupCloseIcon)
  }
}

export const bag = new Bag();
