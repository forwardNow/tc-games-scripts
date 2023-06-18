function 切换6倍() {
  var 倍镜缩放 = mapi.findimage('倍镜缩放', 0.92, 4, 1, 2, 1);
  if (倍镜缩放.X != 0 && 倍镜缩放.Y !=0 ) {
    mapi.click(678, 346);
    mapi.setglobalmap('6倍状态',6);
    return;
  }
  var 倍镜缩放展开 = mapi.findimage('倍镜缩放展开', 0.8, 4, 1, 2, 1);
  if (倍镜缩放展开.X != 0 && 倍镜缩放展开.Y !=0 ){
    mapi.click(678, 222);
    mapi.delay(100);
    var 倍镜缩放 = mapi.findimage('倍镜缩放', 0.92, 4, 1, 2, 1);
    if (倍镜缩放.X != 0 && 倍镜缩放.Y !=0 ) {
      mapi.click(678, 346);
      mapi.setglobalmap('6倍状态',6);
      return;
    }
  }
}
切换6倍();
