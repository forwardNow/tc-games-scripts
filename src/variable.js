const KEYS = {
  // 控制 mapi.tip() 是否 启用
  IS_TIP_ENABLED: 'IS_TIP_ENABLED',

  // 调整过 6 倍镜倍率 的 枪及倍率
  ADJUSTED_GUNS_OF_6X_SIGHT: 'ADJUSTED_GUNS_OF_6X_SIGHT',
};


export default {
  get isTipEnabled() {
    return mapi.getglobalmap(KEYS.IS_TIP_ENABLED);
  },

  set isTipEnabled(isTipEnabled) {
    mapi.setglobalmap(KEYS.IS_TIP_ENABLED, isTipEnabled);
  },

  // 获取调整过 6 倍镜倍率的枪的准镜
  getMirrorOfAdjustedGun(gun) {
    const adjustedX6SightsGuns = mapi.getglobalmap(KEYS.ADJUSTED_GUNS_OF_6X_SIGHT) || {};

    return adjustedX6SightsGuns[gun];
  },

  // 设置调整过 6 倍镜倍率的枪及准镜
  setMirrorOfAdjustedGun(gun, mirror) {
    const adjustedX6SightsGuns = mapi.getglobalmap(KEYS.ADJUSTED_GUNS_OF_6X_SIGHT) || {};

    adjustedX6SightsGuns[gun] = mirror;

    mapi.setglobalmap(KEYS.ADJUSTED_GUNS_OF_6X_SIGHT, adjustedX6SightsGuns);
  },
}
