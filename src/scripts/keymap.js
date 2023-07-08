import gunPressControl from 'gunPressControl';
import Utils from 'utils';
import Gun from 'gun';
import Variable from 'variable';
import Medicine from 'medicine';
import Missile from 'missile';

export default {
  /**
   * @description 开火
   * @bind 鼠标左键
   */
  fire() {
    gunPressControl.fire();
  },

  /**
   * @description 1. 取消投掷；<br>2. 丢弃背包中光标所指位置的配件；<br>3. 点击当前按键位置并设置压枪参数
   * @bind 鼠标右键
   */
  handleMouseRight() {
    gunPressControl.handleMouseRight();
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
   * @bind F11
   */
  logErrorPressArgs() {
    gunPressControl.logErrorPressArgs();
  },

  /**
   * @description 重置 准心、方向键
   * @bind Ctrl
   */
  reset() {
    Utils.reset();
  },

  /**
   * @description 吃 能量饮料
   * @bind Num1
   */
  eatEnergyDrink() {
    Medicine.eatEnergyDrink();
  },

  /**
   * @description 吃 止痛药
   * @bind Num2
   */
  eatPainkiller() {
    Medicine.eatPainkiller();
  },

  /**
   * @description 吃 肾上腺素注射剂
   * @bind Num3
   */
  eatEpinephrineInjection() {
    Medicine.eatEpinephrineInjection();
  },

  /**
   * @description 吃 绷带
   * @bind Num4
   */
  eatBandage() {
    Medicine.eatBandage();
  },

  /**
   * @description 吃 急救包
   * @bind Num5
   */
  eatFirstAidKit() {
    Medicine.eatFirstAidKit();
  },

  /**
   * @description 吃 医疗急救箱
   * @bind Num6
   */
  eatMedicalFirstAidKit() {
    Medicine.eatMedicalFirstAidKit();
  },

  /**
   * @description 切换 破片手榴弹
   * @bind Num7
   */
  switchFragmentBomb() {
    Missile.switchFragmentBomb();
  },

  /**
   * @description 切换 烟雾弹
   * @bind Num8
   */
  switchSmokeBomb() {
    Missile.switchSmokeBomb();
  },

  /**
   * @description 切换 燃烧瓶
   * @bind Num9
   */
  switchMolotovCocktail() {
    Missile.switchMolotovCocktail();
  },
}
