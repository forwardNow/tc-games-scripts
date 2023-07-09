import Utils from 'utils';
import Constant from 'constant';

const IMAGE_NAMES = {
  BAG_OPEN: '背包已打开的标志',
};

function isBagOpen() {
  const point = mapi.findimage(IMAGE_NAMES.BAG_OPEN, 0.75, 4, 4, 4, 1);

  return Utils.isPointExist(point)
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

export default {
  isBagOpen,
  discardMaterialsUnderCursor,
}
