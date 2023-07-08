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
  // 破片手榴弹
  [CATEGORIES.FRAGMENT_BOMB]: '破片手榴弹',

  // 烟雾弹
  [CATEGORIES.SMOKE_BOMB]: '烟雾弹',

  // 燃烧瓶
  [CATEGORIES.MOLOTOV_COCKTAIL]: '燃烧瓶',

  CANCEL_THROW_BUTTON: '取消投掷按钮',

  // 投掷物列表-展开按钮
  EXPAND_LIST_BUTTON: '药品列表展开按钮',

  // 投掷物列表-折叠按钮
  COLLAPSE_LIST_BUTTON: '药品列表折叠按钮',

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

function switchMissile(category) {
  expandList();

  mapi.delay(100);

  const point = mapi.findimage(IMAGE_NAMES[category], 0.75, 4, 4, 4, 4);

  if (Utils.isPointNotExist(point)) {
    Utils.showTip('未找到投掷物：' + IMAGE_NAMES[category]);
    collapseList();
    return;
  }

  mapi.click(point);
}

function expandList() {
  Utils.clickImagePosition(IMAGE_NAMES.EXPAND_LIST_BUTTON, 0.75, 4, 4, 4, 4);
}

function collapseList() {
  Utils.clickImagePosition(IMAGE_NAMES.COLLAPSE_LIST_BUTTON, 0.75, 4, 4, 4, 4);
}

// 切换 破片手榴弹
function switchFragmentBomb() {
  switchMissile(CATEGORIES.FRAGMENT_BOMB);
}

// 切换 烟雾弹
function switchSmokeBomb() {
  switchMissile(CATEGORIES.SMOKE_BOMB);
}

// 切换 燃烧瓶
function switchMolotovCocktail() {
  switchMissile(CATEGORIES.MOLOTOV_COCKTAIL);
}

export default {
  cancelThrow,

  switchFragmentBomb,
  switchSmokeBomb,
  switchMolotovCocktail,
};
