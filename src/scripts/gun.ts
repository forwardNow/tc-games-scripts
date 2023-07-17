import { GunCategory, T_GunPosition, ImageAreaArgs } from '../../types';
import Utils from './utils';
import constant from './constant';

export class Gun {
  /** 枪的类型 */
  static CATEGORIES: { [key in GunCategory]: GunCategory } = {
    M4: 'M4',
    SCARL: 'SCARL',
    DP28: 'DP28',

    UMP45: 'UMP45',
    YENIU: 'YENIU',
    UZI: 'UZI',
    VECTOR: 'VECTOR',
    TANGMUXUN: 'TANGMUXUN', // 汤姆逊枪

    AKM: 'AKM',

    ACVAL: 'ACVAL',

    PKM: 'PKM',

    VSS: 'VSS',
    MK20H: 'MK20H',
    M417: 'M417',

    M249: 'M249',

    M762: 'M762',

    AUG: 'AUG',
    GROZA: 'GROZA',
    MG3: 'MG3',
    P90: 'P90',

    MIGUAN: 'MIGUAN', // 蜜罐
  };

  static X8_SIGHT_GUNS: GunCategory[] = [ 'M417', 'MK20H' ];

  /** 持枪位置 */
  static GUN_POSITION: { [key in T_GunPosition]: T_GunPosition } = {
    /** 左边枪 */
    LEFT: 'LEFT',
    /** 右边枪 */
    RIGHT: 'RIGHT',
  }


  /** 持枪位置-图片区域 */
  static GUN_POSITION_IMAGE_AREA: { [key in T_GunPosition]: ImageAreaArgs } = {
    LEFT: [ 0.85, 4, 4, 2, 4 ],
    RIGHT: [ 0.85, 4, 4, 3, 4 ],
  }

  /**
   * 获取当前持枪的位置
   * @return { string | null }
   */
  getGunPosition() {
    if (this.isLeftGun()) {
      return Gun.GUN_POSITION.LEFT;
    }

    if (this.isRightGun()) {
      return Gun.GUN_POSITION.RIGHT;
    }

    return null;
  }

  /** 是否持 左 枪 */
  isLeftGun() {
    const [ color, posList ] = constant.GUN_POSITION_LEFT_COLOR_POINT;
    return Utils.isColorExist(color, posList);
  }

  /** 是否持 右 枪 */
  isRightGun() {
    const [ color, posList ] = constant.GUN_POSITION_RIGHT_COLOR_POINT;
    return Utils.isColorExist(color, posList);
  }

  /** 是否 持枪 */
  isHoldGun() {
    return Boolean(this.getGunPosition());
  }

  /** 是否持有已配置的枪 */
  isHoldConfiguredGun() {
    return Boolean(this.getCurrentGun());
  }


  /**
   * 获取当前枪械的名称
   *
   * @return {string | null}
   */
  getCurrentGun() {
    const gunPosition = this.getGunPosition();

    if (!gunPosition) {
      return;
    }

    const imageArgs: ImageAreaArgs = Gun.GUN_POSITION_IMAGE_AREA[gunPosition];

    const guns = Object.keys(Gun.CATEGORIES) as GunCategory[];

    return guns.find((gun) => Utils.isImageExist(gun, ...imageArgs));
  }

  identityGunsInBag() {
    let leftGuns: string[] = [];
    let rightGuns: string[] = [];

    Object.keys(Gun.CATEGORIES).forEach((cate) => {
      const imageName = `大图${ cate }`;

      if (Utils.isImageExist(imageName, 0.85, 2, 2, 2, 1)) {
        leftGuns.push(cate);
      }
      if (Utils.isImageExist(imageName, 0.85, 2, 2, 2, 2)) {
        rightGuns.push(cate);
      }
    });

    const result = { leftGuns, rightGuns };

    loginfo(JSON.stringify(result));

    return result;
  }

  identityFlatGuns() {
    let leftGuns: string[] = [];
    let rightGuns: string[] = [];

    Object.keys(Gun.CATEGORIES).forEach((cate) => {
      if (Utils.isImageExist(cate, 0.85, 4, 4, 2, 4)) {
        leftGuns.push(cate);
      }
      if (Utils.isImageExist(cate, 0.85, 4, 4, 3, 4)) {
        rightGuns.push(cate);
      }
    });

    const result = { leftGuns, rightGuns };

    loginfo(JSON.stringify(result));

    return result;
  }

  /**
   * 收枪
   */
  hideGun() {
    const gunPosition = this.getGunPosition();

    if (!gunPosition) {
      return;
    }

    if (gunPosition === Gun.GUN_POSITION.LEFT) {
      this.clickLeftGun();
      return;
    }

    if (gunPosition === Gun.GUN_POSITION.RIGHT) {
      this.clickRightGun();
    }
  }

  /**
   * 切枪
   */
  switchGun() {
    const gunPosition = this.getGunPosition();

    if (!gunPosition) {
      this.clickLeftGun();
      return;
    }

    if (gunPosition === Gun.GUN_POSITION.LEFT) {
      this.clickRightGun();
      return;
    }

    if (gunPosition === Gun.GUN_POSITION.RIGHT) {
      this.clickLeftGun();
    }
  }

  clickLeftGun() {
    const [ x, y ] = constant.GUN_POSITION_LEFT_POINT
    mapi.click(x, y);
  }

  clickRightGun() {
    const [ x, y ] = constant.GUN_POSITION_RIGHT_POINT
    mapi.click(x, y);
  }

}

export const gun = new Gun();
