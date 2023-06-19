(function test_getPosture() {
  import('posture')
    .then((module) =>{
      const postureCategory = module.getPosture();

      mapi.tip(postureCategory, 1);
    });
}());
