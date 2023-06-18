function Fire(){
  if(null != mapi) {
    // 坐标为开火位置
    mapi.holdpress(2032, 806);
    // 启动单段压枪
    // mapi.startcustomaimpar();
    // 启动分段压枪
    mapi.startsectionaimpar();
  }
}
Fire();
