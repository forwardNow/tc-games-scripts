import Utils from './utils';
import { ImageArgs, T_Missile } from '../../types';

/**
 * 投掷物类别
 */
const CATEGORIES: { [key in T_Missile]: T_Missile } = {
  // 碎片手榴弹
  FRAGMENT_BOMB: 'FRAGMENT_BOMB',

  // 烟雾弹
  SMOKE_BOMB: 'SMOKE_BOMB',

  // 燃烧瓶
  MOLOTOV_COCKTAIL: 'MOLOTOV_COCKTAIL',
};

const IMAGE_NAMES = {
  // 碎片手榴弹
  [CATEGORIES.FRAGMENT_BOMB]: '碎片手榴弹',

  // 烟雾弹
  [CATEGORIES.SMOKE_BOMB]: '烟雾弹',

  // 燃烧瓶
  [CATEGORIES.MOLOTOV_COCKTAIL]: '燃烧瓶',
};

const IMAGE_ARGS: { [name: string]: ImageArgs } = {
  CANCEL_THROW_BUTTON: ['取消投掷按钮', 0.75, 3, 4, 1, 3],

  EXPAND_LIST_BUTTON: ['投掷物展开按钮', 0.75, 4, 4, 3, 4],
  COLLAPSE_LIST_BUTTON: ['投掷物折叠按钮', 0.75, 4, 2, 3, 2],
  FRAGMENT_BOMB: ['碎片手榴弹', 0.75, 4, 2, 3, 2],
};

/**
 * 取消投掷
 * @returns {boolean} true - 执行成功
 */
function cancelThrow() {
  const point = mapi.findimage(...IMAGE_ARGS.CANCEL_THROW_BUTTON);

  if (Utils.isPointNotExist(point)) {
    return false;
  }

  mapi.click(point);

  mapi.aimreset();

  return true;
}

function switchMissile(category: T_Missile) {
  expandList();

  mapi.delay(200);

  const point = mapi.findimage(...IMAGE_ARGS[category]);

  if (Utils.isPointNotExist(point)) {
    Utils.showTip('未找到投掷物：' + IMAGE_NAMES[category]);
    collapseList();
    return;
  }

  mapi.click(point);
}

function expandList() {
  Utils.clickImagePosition(...IMAGE_ARGS.EXPAND_LIST_BUTTON);
}

function collapseList() {
  Utils.clickImagePosition(...IMAGE_ARGS.COLLAPSE_LIST_BUTTON);
}

// 切换 碎片手榴弹
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
