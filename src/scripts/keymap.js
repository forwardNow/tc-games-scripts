import gunPressControl from 'gunPressControl';
import Utils from 'utils';
import Gun from 'gun';
import Variable from 'variable';

export default {
  /**
   * @description 开火
   * @bind 鼠标左键
   */
  fire() {
    gunPressControl.fire();
  },

  /**
   * @description 调整 6 倍镜，并记录调整过 6 倍镜倍率的枪及倍率
   * @bind 鼠标滚轮-滚上
   */
  toggleX6Sight() {
    gunPressControl.toggleX6Sight();
  },

  /**
   * @description 启用/禁用 mapi.tip()
   * @bind F12
   */
  toggleEnableOfTip() {
    Utils.toggleEnableOfTip();
  },

  /**
   * @description 切枪
   * @bind Q
   */
  switchGun() {
    Gun.switchGun();
  },

  /**
   * @description 收枪
   * @bind Tab
   */
  hideGun() {
    mapi.shotmode(true);
    Gun.hideGun();
  },

  /**
   * @description 动态调整压枪参数, +1
   * @bind 上箭头
   */
  addDelay() {
    Variable.addDelay(1);
  },

  /**
   * @description 动态调整压枪参数, -1
   * @bind 下箭头
   */
  subtractDelay() {
    Variable.addDelay(-1);
  },

  /**
   * @description 记录不准确的压枪参数
   *
   * @bind F11
   */
  logErrorPressArgs() {
    gunPressControl.logErrorPressArgs();
  },

  /**
   * @description 重置 准心、方向键
   *
   * @bind Ctrl
   */
  reset() {
    Utils.reset();
  },
}
