const KEYS = {
  // 控制 mapi.tip() 是否 启用
  IS_TIP_ENABLED: 'IS_TIP_ENABLED',

  // 调整过 6 倍镜倍率 的 枪及倍率
  ADJUSTED_X6_SIGHTS_GUNS: 'ADJUSTED_X6_SIGHTS_GUNS',
};


export default {
  get isTipEnabled() {
    return mapi.getglobalmap(KEYS.IS_TIP_ENABLED);
  },
  set isTipEnabled(isTipEnabled) {
    mapi.setglobalmap(KEYS.IS_TIP_ENABLED, isTipEnabled);
  },

  getX6SightOfGun(gun) {
    const adjustedX6SightsGuns = mapi.getglobalmap(KEYS.ADJUSTED_X6_SIGHTS_GUNS) || {};

    return adjustedX6SightsGuns[gun];
  },

  setX6SightOfGun(gun, mirror) {
    const adjustedX6SightsGuns = mapi.getglobalmap(KEYS.ADJUSTED_X6_SIGHTS_GUNS) || {};

    adjustedX6SightsGuns[gun] = mirror;

    mapi.setglobalmap(KEYS.ADJUSTED_X6_SIGHTS_GUNS, adjustedX6SightsGuns);
  }
}
