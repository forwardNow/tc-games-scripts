import Utils from './utils';
import Gun from './gun';
import Store from './store';
import Medicine from './medicine';
import Missile from './missile';
import Bag from './bag';
import PressCtrl from './pressCtrl';

export default {
  /**
   * @description 开火
   * @bind 鼠标左键
   */
  fire() {
    PressCtrl.fire();
  },

  /**
   * @description 复合按键：
   *    1. 丢弃背包中光标所指位置的配件
   *    2. 取消投掷
   *    3. 取消打药
   *    4. 开镜
   *    5. 更新压枪参数
   * @bind 鼠标右键
   */
  compositeKey_openMirror() {
    Utils.series([
      // 丢弃背包物资
      Bag.discardMaterialsUnderCursor.bind(Bag),

      // 取消投掷
      Missile.cancelThrow.bind(Missile),

      // 取消打药
      Medicine.cancelTakeMedicine.bind(Medicine),

      // 开镜（点击当前按键所在位置）
      Utils.clickCurrentKey.bind(Utils),

      // 更新压枪参数
      PressCtrl.updatePressArgs.bind(PressCtrl),
    ]);
  },

  /**
   * @description 复合按键：
   *    1. 下车
   *    2. 上车 (TODO)
   * @bind F
   */
  compositeKey_getOnCar() {
    Utils.series([
      // TODO 下车

      // 上车（点击当前按键所在位置）
      Utils.clickCurrentKey.bind(Utils),
    ]);
  },

  /**
   * @description 调整 6 倍镜
   *  并存储调整过 6 倍镜倍率的枪及倍率
   * @bind 鼠标滚轮-滚上
   */
  toggleX6Sight() {
    PressCtrl.toggleX6Sight();
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
    Utils.switchToShotMode();
    Gun.hideGun();
  },

  /**
   * @description 左右枪互换 (TODO)
   * @bind X
   */
  swapGuns() {

  },

  /**
   * @description 动态调整压枪参数, +1
   * @bind 上箭头
   */
  addDelayOfGunPressArgs() {
    Store.mutations.addDelayOfGunPressArgs(1);
  },

  /**
   * @description 动态调整压枪参数, -1
   * @bind 下箭头
   */
  subtractDelay() {
    Store.mutations.addDelayOfGunPressArgs(-1);
  },

  /**
   * @description 记录不准确的压枪参数
   * @bind F11
   */
  logErrorPressArgs() {
    PressCtrl.logErrorPressArgs();
  },

  /**
   * @description 重置 准心、方向键
   * @bind Ctrl
   */
  reset() {
    Utils.reset();
  },

  /**
   * @description 吃 能量饮料 (TODO)
   * @bind Num1
   */
  eatEnergyDrink() {
    Medicine.eatEnergyDrink();
  },

  /**
   * @description 吃 止痛药 (TODO)
   * @bind Num2
   */
  eatPainkiller() {
    Medicine.eatPainkiller();
  },

  /**
   * @description 吃 肾上腺素注射剂 (TODO)
   * @bind Num3
   */
  eatEpinephrineInjection() {
    Medicine.eatEpinephrineInjection();
  },

  /**
   * @description 吃 绷带 (TODO)
   * @bind Num4
   */
  eatBandage() {
    Medicine.eatBandage();
  },

  /**
   * @description 吃 急救包 (TODO)
   * @bind Num5
   */
  eatFirstAidKit() {
    Medicine.eatFirstAidKit();
  },

  /**
   * @description 吃 医疗急救箱 (TODO)
   * @bind Num6
   */
  eatMedicalFirstAidKit() {
    Medicine.eatMedicalFirstAidKit();
  },

  /**
   * @description 切换 破片手榴弹 (TODO)
   * @bind Num7
   */
  switchFragmentBomb() {
    Missile.switchFragmentBomb();
  },

  /**
   * @description 切换 烟雾弹 (TODO)
   * @bind Num8
   */
  switchSmokeBomb() {
    Missile.switchSmokeBomb();
  },

  /**
   * @description 切换 燃烧瓶 (TODO)
   * @bind Num9
   */
  switchMolotovCocktail() {
    Missile.switchMolotovCocktail();
  },
}