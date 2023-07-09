const KEYS = {
  // 控制 mapi.tip() 是否 启用
  IS_TIP_ENABLED: 'IS_TIP_ENABLED',

  // 调整过 6 倍镜倍率 的 枪及倍率
  ADJUSTED_GUNS_OF_6X_SIGHT: 'ADJUSTED_GUNS_OF_6X_SIGHT',

  // 动态调整压枪参数，存储差值
  DELTA_DELAY: 'DELTA_DELAY',
};


export default {
  /**
   * 获取 是否开启 tip
   * @return { boolean } 是否开启 tip，true - 启用，false - 禁用
   */
  get isTipEnabled() {
    return mapi.getglobalmap(KEYS.IS_TIP_ENABLED);
  },

  /**
   * 设置 是否开启 tip
   * @param isTipEnabled { boolean } 是否开启 tip，true - 启用，false - 禁用
   */
  set isTipEnabled(isTipEnabled) {
    mapi.setglobalmap(KEYS.IS_TIP_ENABLED, isTipEnabled);
  },

  /**
   * 获取调整过 6 倍镜倍率的枪的准镜
   * @param gun {string} Gun.CATEGORIES 的值
   * @return {string} Mirror.CATEGORIES 的值
   */
  getMirrorOfAdjustedGun(gun) {
    const adjustedX6SightsGuns = mapi.getglobalmap(KEYS.ADJUSTED_GUNS_OF_6X_SIGHT) || {};

    return adjustedX6SightsGuns[gun];
  },

  /**
   * 设置调整过 6 倍镜倍率的枪及准镜
   * @param gun {string} Gun.CATEGORIES 的值
   * @param mirror {string} Mirror.CATEGORIES 的值
   */
  setMirrorOfAdjustedGun(gun, mirror) {
    const adjustedX6SightsGuns = mapi.getglobalmap(KEYS.ADJUSTED_GUNS_OF_6X_SIGHT) || {};

    adjustedX6SightsGuns[gun] = mirror;

    mapi.setglobalmap(KEYS.ADJUSTED_GUNS_OF_6X_SIGHT, adjustedX6SightsGuns);
  },

  get deltaDelay() {
    return mapi.getglobalmap(KEYS.IS_TIP_ENABLED);
  },

  set deltaDelay(num) {
    mapi.setglobalmap(KEYS.IS_TIP_ENABLED, num);
  },

  addDelay(num) {
    this.deltaDelay = this.deltaDelay + num;
  },
}
