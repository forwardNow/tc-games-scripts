import { ImageArgs, T_Missile } from '../../types';
import Utils from './utils';

export class Missile {
  /**
   * 投掷物类别
   */
  static CATEGORIES: { [key in T_Missile]: T_Missile } = {
    // 碎片手榴弹
    FRAGMENT_BOMB: 'FRAGMENT_BOMB',

    // 烟雾弹
    SMOKE_BOMB: 'SMOKE_BOMB',

    // 燃烧瓶
    MOLOTOV_COCKTAIL: 'MOLOTOV_COCKTAIL',
  };

  static MISSILE_IMAGE_NAMES: { [key in T_Missile]: string } = {
    // 碎片手榴弹
    FRAGMENT_BOMB: '碎片手榴弹',

    // 烟雾弹
    SMOKE_BOMB: '烟雾弹',

    // 燃烧瓶
    MOLOTOV_COCKTAIL: '燃烧瓶',
  };

  static IMAGE_ARGS: { [name: string]: ImageArgs } = {
    CANCEL_THROW_BUTTON: [ '取消投掷按钮', 0.75, 3, 4, 1, 3 ],

    EXPAND_LIST_BUTTON: [ '投掷物展开按钮', 0.75, 4, 4, 3, 4 ],
    COLLAPSE_LIST_BUTTON: [ '投掷物折叠按钮', 0.75, 4, 2, 3, 2 ],
    FRAGMENT_BOMB: [ Missile.MISSILE_IMAGE_NAMES.FRAGMENT_BOMB, 0.75, 4, 2, 3, 2 ],
  };

  /**
   * 取消投掷
   * @returns {boolean} true - 执行成功
   */
  cancelThrow = () => {
    const point = mapi.findimage(...Missile.IMAGE_ARGS.CANCEL_THROW_BUTTON);

    if (Utils.isPointNotExist(point)) {
      return false;
    }

    mapi.click(point);

    mapi.aimreset();

    return true;
  }

  switchMissile(missile: T_Missile) {
    this.expandList();

    mapi.delay(200);

    const point = mapi.findimage(...Missile.IMAGE_ARGS[missile]);

    if (Utils.isPointNotExist(point)) {
      Utils.showTip('未找到投掷物：' + Missile.MISSILE_IMAGE_NAMES[missile]);
      this.collapseList();
      return;
    }

    mapi.click(point);
  }

  expandList() {
    Utils.clickImagePosition(...Missile.IMAGE_ARGS.EXPAND_LIST_BUTTON);
  }

  collapseList() {
    Utils.clickImagePosition(...Missile.IMAGE_ARGS.COLLAPSE_LIST_BUTTON);
  }

  /**切换 碎片手榴弹*/
  switchFragmentBomb() {
    this.switchMissile(Missile.CATEGORIES.FRAGMENT_BOMB);
  }

  /**切换 烟雾弹*/
  switchSmokeBomb() {
    this.switchMissile(Missile.CATEGORIES.SMOKE_BOMB);
  }

  /**切换 燃烧瓶*/
  switchMolotovCocktail() {
    this.switchMissile(Missile.CATEGORIES.MOLOTOV_COCKTAIL);
  }
}

export const missile = new Missile();
