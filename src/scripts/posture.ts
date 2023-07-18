import { utils } from './utils';
import constant from './constant'
import { ColorArgs, CnPostureCategory, PostureCategory } from '../../types';

export class Posture {
  /** 姿势类别 */
  static CATEGORIES: { [key in PostureCategory]: PostureCategory } = {
    /** 站 */
    STAND: 'STAND',
    /** 蹲 */
    SQUAT: 'SQUAT',
    /** 趴 */
    PROSTRATE: 'PROSTRATE'
  };

  /** 姿势映射，对应官方名称 */
  static MAPPING: { [key in PostureCategory]: CnPostureCategory } = {
    STAND: '站',
    SQUAT: '蹲',
    PROSTRATE: '趴',
  };

  /**
   * 姿势类别-颜色点
   */
  static COLOR_POINT: { [key in Exclude<PostureCategory, 'STAND'>]: ColorArgs } = {
    SQUAT: constant.SquatColorPoint,
    PROSTRATE: constant.ProstrateColorPoint,
  }

  /**
   * 获取姿势
   *
   * @return {string}
   */
  getCurrentPostureCategory() {
    if (this.isSquat()) {
      return Posture.CATEGORIES.SQUAT;
    }

    if (this.isProstrate()) {
      return Posture.CATEGORIES.PROSTRATE;
    }

    return Posture.CATEGORIES.STAND;
  }

  isSquat() {
    return utils.isColorExist(...Posture.COLOR_POINT.SQUAT);
  }

  isProstrate() {
    return utils.isColorExist(...Posture.COLOR_POINT.PROSTRATE);
  }

  clickSquatKey() {
    utils.clickPoint(constant.SquatButtonPosition);
  }

}

export const posture = new Posture();
