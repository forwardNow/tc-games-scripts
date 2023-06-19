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

  /**
   * 多点找色，返回当前颜色的坐标点。
   *
   * @param color
   * @param poslist
   */
  function findcolor(color: string, poslist: string): point;

  /**
   * 单点找色，返回当前颜色的坐标
   *
   * 主要解决部分图标按下后会变色的场景，
   * 如要要区分按钮变色状态可以通过此接口处理
   *
   * @param color
   * @param point
   */
  function findcolor(color: string, point: point): point;

  /**
   * 简单找图，返回当前图标在屏幕的坐标点
   *
   * @param imgName 图片的名称
   * @param sim 相似度
   * @param setCol 屏幕分几列
   * @param setRow 屏幕分几行
   * @param selectCol 取第几列
   * @param selectRow 取第几行
   */
  function findimage(imgName: string, sim: number, setCol: number, setRow: number, selectCol: number, selectRow: number): point;
}
