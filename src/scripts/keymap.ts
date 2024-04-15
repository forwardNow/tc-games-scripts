import { utils } from './utils';
import { gun } from './gun';
import store from './store';
import { medicine } from './medicine';
import { missile } from './missile';
import { bag } from './bag';
import { pressCtrl } from './pressCtrl';

export default {
  /**
   * @description 开火
   * @bind 鼠标左键
   */
  fire() {
    pressCtrl.fire();
  },

  /**
   * @description 复合按键：
   *    1. 丢弃背包中光标所指位置的配件 (一旦执行，后续操作都取消)
   *    2. 取消投掷 (一旦执行，后续操作都取消)
   *    3. 开镜
   *    4. 更新压枪参数
   * @bind 鼠标右键
   */
  bindKeyMouseRight() {
    utils.series([
      // 丢弃背包物资
      bag.discardMaterialsUnderCursor,

      // 取消投掷
      missile.cancelThrow,

      utils.clickCurrentKey,

      // 更新压枪参数
      () => {
        // 点击当前按键后，准镜不会马上打开
        // if (mirror.isOpen()) {
        //   return;
        // }
        pressCtrl.updatePressArgs();
      },
    ]);
  },


  /**
   * @description 调整 6 倍镜
   *  并存储调整过 6 倍镜倍率的枪及倍率
   * @bind 鼠标滚轮-滚上
   */
  toggleX6Sight() {
    const result = pressCtrl.toggleX6Sight();

    if (result) {
      return;
    }

    utils.clickCurrentKey();
  },

  /**
   * @description 启用/禁用 utils.showTip()
   * @bind F12
   */
  toggleEnableOfTip() {
    store.mutations.toggleEnableOfTip();
  },

  /**
   * @description 切枪
   * @bind Tab
   */
  switchGun() {
    utils.switchToShotMode();
    gun.switchGun();
  },

  /**
   * @description 收枪
   * @bind F4
   */
  hideGun() {
    gun.hideGun();
  },

  /**
   * @description
   *  1. 拾取
   *  2. 切 雷
   * @bind F1
   */
  bindKeyF1() {
    if (bag.canPickUp()) {
      utils.clickCurrentKey();
      return;
    }

    missile.switchFragmentBomb()
  },

  /**
   * @description
   *  1. 拾取
   *  2. 切 烟
   * @bind F2
   */
  bindKeyF2() {
    if (bag.canPickUp()) {
      utils.clickCurrentKey();
      return;
    }

    missile.switchSmokeBomb();
  },

  /**
   * @description
   *  1. 拾取
   *  2. 切 火
   * @bind F3
   */
  bindKeyF3() {
    if (bag.canPickUp()) {
      utils.clickCurrentKey();
      return;
    }

    missile.switchMolotovCocktail();
  },

  /**
   * @description 左右枪互换
   * @bind F5
   */
  swapGuns() {
    bag.swapGuns();
  },

  /**
   * @description 动态调整压枪参数, +1
   * @bind 上箭头
   */
  addDelayOfGunPressArgs() {
    store.mutations.addDelayOfGunPressArgs(1);
  },

  /**
   * @description 动态调整压枪参数, -1
   * @bind 下箭头
   */
  subtractDelay() {
    store.mutations.addDelayOfGunPressArgs(-1);
  },

  /**
   * @description 记录不准确的压枪参数
   * @bind F11
   */
  logErrorPressArgs() {
    pressCtrl.logErrorPressArgs();
  },

  /**
   * @description
   *  1. 重置 准心
   *  2. 重置 方向键
   *  3. 重置点头操作
   * @bind Ctrl
   */
  reset() {
    utils.resetAimAndDirection();
  },

  /**
   * @description 吃 能量饮料
   * @bind Num1
   */
  eatEnergyDrink() {
    medicine.eatEnergyDrink();
  },

  /**
   * @description 吃 止痛药
   * @bind Num2
   */
  eatPainkiller() {
    medicine.eatPainkiller();
  },

  /**
   * @description 吃 肾上腺素注射剂
   * @bind Num3
   */
  eatEpinephrineInjection() {
    medicine.eatEpinephrineInjection();
  },

  /**
   * @description 吃 绷带
   * @bind Num4
   */
  eatBandage() {
    medicine.eatBandage();
  },

  /**
   * @description 吃 急救包
   * @bind Num5
   */
  eatFirstAidKit() {
    medicine.eatFirstAidKit();
  },

  /**
   * @description 吃 医疗急救箱
   * @bind Num6
   */
  eatMedicalFirstAidKit() {
    medicine.eatMedicalFirstAidKit();
  },

  /**
   * @description 切换 破片手榴弹
   * @bind Num7
   */
  switchFragmentBomb() {
    missile.switchFragmentBomb();
  },

  /**
   * @description 切换 烟雾弹
   * @bind Num8
   */
  switchSmokeBomb() {
    missile.switchSmokeBomb();
  },

  /**
   * @description 切换 燃烧瓶
   * @bind Num9
   */
  switchMolotovCocktail() {
    missile.switchMolotovCocktail();
  },
}
