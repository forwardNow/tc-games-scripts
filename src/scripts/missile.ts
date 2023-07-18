import { ImageArgs, MissileCategory } from '../../types';
import { utils } from './utils';

export class Missile {
  /**
   * 投掷物类别
   */
  static Categories: { [key in MissileCategory]: MissileCategory } = {
    // 碎片手榴弹
    FragmentBomb: 'FragmentBomb',

    // 烟雾弹
    SmokeBomb: 'SmokeBomb',

    // 燃烧瓶
    MolotovCocktail: 'MolotovCocktail',
  };

  static ImageNames: { [key in MissileCategory]: string } = {
    // 碎片手榴弹
    FragmentBomb: '碎片手榴弹',

    // 烟雾弹
    SmokeBomb: '烟雾弹',

    // 燃烧瓶
    MolotovCocktail: '燃烧瓶',
  };

  static ImageArgs: { [name: string]: ImageArgs } = {
    CancelThrowButton: [ '取消投掷按钮', 0.75, 3, 4, 1, 3 ],

    ExpandListButton: [ '投掷物展开按钮', 0.75, 4, 4, 3, 4 ],
    CollapseListButton: [ '投掷物折叠按钮', 0.75, 4, 2, 3, 2 ],
    FragmentBomb: [ Missile.ImageNames.FragmentBomb, 0.75, 4, 2, 3, 2 ],
  };

  /**
   * 取消投掷
   * @returns {boolean} true - 执行成功
   */
  cancelThrow = () => {
    const point = utils.findImage(...Missile.ImageArgs.CancelThrowButton);

    if (utils.isPointNotExist(point)) {
      return false;
    }

    utils.clickPoint(point);

    utils.resetAim();

    return true;
  }

  switchMissile(missile: MissileCategory) {
    this.expandList();

    utils.delay(200);

    const point = utils.findImage(...Missile.ImageArgs[missile]);

    if (utils.isPointNotExist(point)) {
      utils.showTip('未找到投掷物：' + Missile.ImageNames[missile]);
      this.collapseList();
      return;
    }

    utils.clickPoint(point);
  }

  expandList() {
    utils.clickImagePosition(...Missile.ImageArgs.ExpandListButton);
  }

  collapseList() {
    utils.clickImagePosition(...Missile.ImageArgs.CollapseListButton);
  }

  /**切换 碎片手榴弹*/
  switchFragmentBomb() {
    this.switchMissile(Missile.Categories.FragmentBomb);
  }

  /**切换 烟雾弹*/
  switchSmokeBomb() {
    this.switchMissile(Missile.Categories.SmokeBomb);
  }

  /**切换 燃烧瓶*/
  switchMolotovCocktail() {
    this.switchMissile(Missile.Categories.MolotovCocktail);
  }
}

export const missile = new Missile();
