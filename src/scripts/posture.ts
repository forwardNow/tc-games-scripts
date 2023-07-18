import { utils } from './utils';
import constant from './constant'
import { ColorArgs, CnPostureCategory, PostureCategory } from '../../types';

export class Posture {
  /** 姿势类别 */
  static Categories: { [key in PostureCategory]: PostureCategory } = {
    /** 站 */
    Stand: 'Stand',
    /** 蹲 */
    Squat: 'Squat',
    /** 趴 */
    Prostrate: 'Prostrate'
  };

  /** 姿势映射，对应官方名称 */
  static Mapping: { [key in PostureCategory]: CnPostureCategory } = {
    Stand: '站',
    Squat: '蹲',
    Prostrate: '趴',
  };

  /**
   * 姿势类别-颜色点
   */
  static ColorPoint: { [key in Exclude<PostureCategory, 'Stand'>]: ColorArgs } = {
    Squat: constant.SquatColorPoint,
    Prostrate: constant.ProstrateColorPoint,
  }

  /**
   * 获取姿势
   *
   * @return {string}
   */
  getCurrentPostureCategory() {
    if (this.isSquat()) {
      return Posture.Categories.Squat;
    }

    if (this.isProstrate()) {
      return Posture.Categories.Prostrate;
    }

    return Posture.Categories.Stand;
  }

  isSquat() {
    return utils.isColorExist(...Posture.ColorPoint.Squat);
  }

  isProstrate() {
    return utils.isColorExist(...Posture.ColorPoint.Prostrate);
  }

  clickSquatKey() {
    utils.clickPoint(constant.SquatButtonPosition);
  }

}

export const posture = new Posture();
