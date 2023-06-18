declare namespace mapi {
  interface point {
    X: number,
    Y: number,
  }
  /**
   * 弹出消息框
   *
   * @param info 内容
   * @param closeTime 单位 秒，默认 3 秒
   */
  function tip(info: string, closeTime?: number): void;

  function findcolor(color: string, poslist: string): point;
}
