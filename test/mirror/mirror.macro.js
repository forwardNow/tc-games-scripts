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


