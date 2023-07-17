import Utils from './utils';
import Constant from './constant'
import { ColorArgs, T_OfficialPosture, T_Posture } from '../../types';

export class Posture {
  /** 姿势类别 */
  static CATEGORIES: { [key in T_Posture]: T_Posture } = {
    /** 站 */
    STAND: 'STAND',
    /** 蹲 */
    SQUAT: 'SQUAT',
    /** 趴 */
    PROSTRATE: 'PROSTRATE'
  };

  /** 姿势映射，对应官方名称 */
  static MAPPING: { [key in T_Posture]: T_OfficialPosture } = {
    STAND: '站',
    SQUAT: '蹲',
    PROSTRATE: '趴',
  };

  /**
   * 姿势类别-颜色点
   */
  static COLOR_POINT: { [key in Exclude<T_Posture, 'STAND'>]: ColorArgs } = {
    SQUAT: Constant.SQUAT_COLOR_POINT,
    PROSTRATE: Constant.PROSTRATE_COLOR_POINT,
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
    const [ color, posList ] = Posture.COLOR_POINT.SQUAT;
    return Utils.isColorExist(color, posList);
  }

  isProstrate() {
    const [ color, posList ] = Posture.COLOR_POINT.PROSTRATE;
    return Utils.isColorExist(color, posList);
  }

  clickSquatKey() {
    const { x, y } = Constant.SQUAT_BUTTON_POSITION;

    mapi.click(x, y);
  }

}

export const posture = new Posture();
