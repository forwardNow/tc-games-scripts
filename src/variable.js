/**
 * 控制 mapi.tip() 是否 启用
 */
const IS_TIP_ENABLED = 'IS_TIP_ENABLED';

export default {
  get isTipEnabled() {
    return mapi.getglobalmap(IS_TIP_ENABLED);
  },
  set isTipEnabled(isTipEnabled) {
    mapi.setglobalmap(IS_TIP_ENABLED, isTipEnabled);
  }
}
