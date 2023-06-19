/**
 * 在小键盘 num2 上绑定
 */
(function test_getPosture() {
  import('gun')
    .then((module) =>{
      const gunPosition = module.getGunPosition();

      mapi.tip(`gunPosition: ${gunPosition}`, 1);
    });
}());


/**
 * 在小键盘 num3 上绑定
 */
(function test_getPosture() {
  import('gun')
    .then((module) =>{
      const currentGunName = module.getCurrentGunName();

      mapi.tip(`currentGunName: ${currentGunName}`, 1);
    });
}());
