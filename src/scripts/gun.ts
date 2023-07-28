import { GunCategory, GunPosition, ImageAreaArgs } from '../../types';
import { utils } from './utils';
import constant from './constant';

export class Gun {
  /** 枪的类型 */
  static Categories: { [key in GunCategory]: GunCategory } = {
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

  static X8SightGuns: GunCategory[] = [ 'M417', 'MK20H' ];

  /** 持枪位置 */
  static GunPosition: { [key in GunPosition]: GunPosition } = {
    /** 左边枪 */
    Left: 'Left',
    /** 右边枪 */
    Right: 'Right',
  }


  /** 持枪位置-图片区域 */
  static GunPositionImageArea: { [key in GunPosition]: ImageAreaArgs } = {
    Left: [ 0.85, 4, 4, 2, 4 ],
    Right: [ 0.85, 4, 4, 3, 4 ],
  }

  /**
   * 获取当前持枪的位置
   * @return { string | null }
   */
  getGunPosition() {
    if (this.isLeftGun()) {
      return Gun.GunPosition.Left;
    }

    if (this.isRightGun()) {
      return Gun.GunPosition.Right;
    }

    return null;
  }

  /** 是否持 左 枪 */
  isLeftGun() {
    return utils.isColorExist(...constant.LeftGunHighlightColorArgs);
  }

  /** 是否持 右 枪 */
  isRightGun() {
    return utils.isColorExist(...constant.RightGunHighlightColorArgs);
  }

  /** 是否 持枪 */
  isHoldGun() {
    return Boolean(this.getGunPosition());
  }

  /** 是否持有已配置的枪 */
  isHoldConfiguredGun() {
    return Boolean(this.getCurrentGun());
  }


  /** 获取当前枪械的名称 */
  getCurrentGun() {
    const gunPosition = this.getGunPosition();

    if (!gunPosition) {
      return;
    }

    const imageArgs: ImageAreaArgs = Gun.GunPositionImageArea[gunPosition];

    const guns = Object.keys(Gun.Categories) as GunCategory[];

    return guns.find((gun) => utils.isImageExist(gun, ...imageArgs));
  }

  identityGunsInBag() {
    let leftGuns: string[] = [];
    let rightGuns: string[] = [];

    Object.keys(Gun.Categories).forEach((cate) => {
      const imageName = `大图${ cate }`;

      if (utils.isImageExist(imageName, 0.85, 2, 2, 2, 1)) {
        leftGuns.push(cate);
      }
      if (utils.isImageExist(imageName, 0.85, 2, 2, 2, 2)) {
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

    Object.keys(Gun.Categories).forEach((cate) => {
      if (utils.isImageExist(cate, 0.85, 4, 4, 2, 4)) {
        leftGuns.push(cate);
      }
      if (utils.isImageExist(cate, 0.85, 4, 4, 3, 4)) {
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

    if (gunPosition === Gun.GunPosition.Left) {
      this.clickLeftGun();
      return;
    }

    if (gunPosition === Gun.GunPosition.Right) {
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

    if (gunPosition === Gun.GunPosition.Left) {
      this.clickRightGun();
      return;
    }

    if (gunPosition === Gun.GunPosition.Right) {
      this.clickLeftGun();
    }
  }

  clickLeftGun() {
    utils.clickPoint(constant.LeftGunPositionPoint);
  }

  clickRightGun() {
    utils.clickPoint(constant.RightGunPositionPoint)
  }

}

export const gun = new Gun();
