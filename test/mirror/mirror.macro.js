/**
 * 在小键盘 num4 上绑定
 */
(function test_isMirrorOpen() {
  import('mirror')
    .then((mirror) =>{
      const isMirrorOpen = mirror.isMirrorOpen();

      mapi.tip(`isMirrorOpen: ${isMirrorOpen}`, 1);
    });
}());

/**
 * 在小键盘 num5 上绑定
 */
(function test_isMirrorOpen() {
  import('mirror')
    .then((mirror) =>{
      const currentMirrorName = mirror.getCurrentMirrorName();

      mapi.tip(`currentMirrorName: ${currentMirrorName}`, 1);
    });
}());
