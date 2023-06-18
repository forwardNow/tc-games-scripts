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

  /**
   * 简单找图，返回当前图标在屏幕的坐标点
   * @param imgName 图片的名称
   * @param sim 相似度
   * @param setCol 屏幕分几列
   * @param setRow 屏幕分几行
   * @param selectCol 取第几列
   * @param selectRow 取第几行
   */
  function findimage(imgName: string, sim: number, setCol: number, setRow: number, selectCol: number, selectRow: number): point;
}
