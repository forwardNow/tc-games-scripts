import Utils from './utils';
import Constant, { BIND_KEYS } from './constant';
import { PointArgs } from '../../types';

const IMAGE_NAMES = {
  BAG_OPEN: '背包已打开的标志',
};

const POINT: { [prop: string]: PointArgs } = {
  LEFT_GUN_POINT: [1788, 325],
  RIGHT_GUN_POINT: [1788, 973],
};

function openBag() {
  if (isBagOpen()) {
    return;
  }

  mapi.key(BIND_KEYS.BAG, 300);
}

function closeBag() {
  if (!isBagOpen()) {
    return;
  }

  mapi.key(BIND_KEYS.BAG, 300);
}

function isBagOpen() {
  const point = mapi.findimage(IMAGE_NAMES.BAG_OPEN, 0.75, 4, 4, 4, 1);

  return Utils.isPointExist(point);
}

/**
 * 丢弃光标所指的物资
 * @returns {boolean} true - 执行成功
 */
function discardMaterialsUnderCursor() {
  if (!isBagOpen()) {
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

function swapGuns() {
  openBag();

  mapi.delay(100);

  const {
    LEFT_GUN_POINT: [ startX, startY ],
    RIGHT_GUN_POINT: [ endX, endY ],
  } = POINT;

  const total = 300;
  const pointNum = 20;
  const interval = total / pointNum;

  mapi.slide(startX, startY, endX, endY, interval, pointNum);

  closeBag();
}

export default {
  isBagOpen,
  openBag,
  swapGuns,
  discardMaterialsUnderCursor,
}
