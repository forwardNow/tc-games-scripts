import Utils from 'utils';

/**
 * 投掷物类别
 */
const CATEGORIES = {

};

const IMAGE_NAMES = {
  CANCEL_THROW_BUTTON: '取消投掷按钮',
};

/**
 * 取消投掷
 */
function cancelThrow() {
  const point = mapi.findimage(IMAGE_NAMES.CANCEL_THROW_BUTTON, 0.75, 3, 4, 1, 3);

  const isPointExist = Utils.isPointExist(point);

  if (!isPointExist) {
    return false;
  }

  mapi.click(point);

  mapi.aimreset();

  return true;
}

export default {
  cancelThrow,
};
