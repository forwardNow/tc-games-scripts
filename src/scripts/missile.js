import Utils from 'utils';

/**
 * 投掷物类别
 */
const CATEGORIES = {
  // 破片手榴弹
  FRAGMENT_BOMB: 'FRAGMENT_BOMB',

  // 烟雾弹
  SMOKE_BOMB: 'SMOKE_BOMB',

  // 燃烧瓶
  MOLOTOV_COCKTAIL: 'MOLOTOV_COCKTAIL',
};

const IMAGE_NAMES = {
  CANCEL_THROW_BUTTON: '取消投掷按钮',

  // 投掷物列表-展开按钮
  EXPAND_MISSILE_BUTTON: '药品列表展开按钮',

  // 投掷物列表-折叠按钮
  COLLAPSE_MISSILE_BUTTON: '药品列表折叠按钮',

};

/**
 * 取消投掷
 */
function cancelThrow() {
  const point = mapi.findimage(IMAGE_NAMES.CANCEL_THROW_BUTTON, 0.75, 3, 4, 1, 3);

  if (Utils.isPointNotExist(point)) {
    return false;
  }

  mapi.click(point);

  mapi.aimreset();

  return true;
}

export default {
  cancelThrow,
};
