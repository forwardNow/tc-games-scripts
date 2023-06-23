/**
 * 在小键盘 num7 上绑定
 */
(function test_getGunPressArgs() {
  import('config')
    .then(({ default: Config }) =>{
      const getGunPressArgs = Config.getGunPressArgs('M4', '蹲', '3倍');

      mapi.tip(`getGunPressArgs: ${JSON.stringify(getGunPressArgs)}`, 1);
    });
}());
