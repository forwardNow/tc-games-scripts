/**
 * 在小键盘 num1 上绑定
 */
(function test_getPosture() {
  import('posture')
    .then((module) =>{
      const postureCategory = module.getPosture();

      mapi.tip(postureCategory, 1);
    });
}());
