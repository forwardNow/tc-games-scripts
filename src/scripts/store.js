const state = {
  // 控制 mapi.tip() 是否 启用
  isTipEnabled: false,

  // 调整过 6 倍镜倍率 的 枪及倍率
  adjust6XSightGuns: {}, // { gun: sight, ... }

  // 动态调整压枪参数，存储差值
  deltaDelayOfGunPressArgs: 0,
};


const getters = {
  /**
   * 获取调整过 6 倍镜倍率的枪的准镜
   * @param gun {string} Gun.CATEGORIES 的值
   * @return {string} Mirror.CATEGORIES 的值
   */
  getMirrorOfAdjustedGun(gun) {
    const adjustedX6SightsGuns = this.state.adjust6XSightGuns || {}
    return adjustedX6SightsGuns[gun];
  }
};

const mutations = {
  /**
   * 设置调整过 6 倍镜倍率的枪及准镜
   * @param gun {string} Gun.CATEGORIES 的值
   * @param mirror {string} Mirror.CATEGORIES 的值
   */
  setMirrorOfAdjustedGun(gun, mirror) {
    const adjustedX6SightsGuns = this.state.adjust6XSightGuns;

    adjustedX6SightsGuns[gun] = mirror;

    this.state.adjust6XSightGuns = adjustedX6SightsGuns;
  },

  addDelayOfGunPressArgs(num) {
    this.state.deltaDelayOfGunPressArgs = this.state.deltaDelayOfGunPressArgs + num;
  },
}

const store = {
  state: {},
  getters,
  mutations,
};

store.state = new Proxy(state, {
  get(target, propName) {
    const value = mapi.getglobalmap(propName);

    loginfo(`${propName} = ${value}`);

    if (value == null) {
      const defaultValue = Reflect.get(target, propName);
      loginfo(`${propName} = ${defaultValue} (default)`);
      return defaultValue;
    }

    return value;
  },

  set(target, propName, value) {
    mapi.setglobalmap(propName, value);
    return true;
  },

  deleteProperty(target, propName) {
    mapi.setglobalmap(propName, null);
    return true;
  }
});


export default store;
