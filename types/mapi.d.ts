declare namespace mapi {
  /**
   * 多点找色、简单找图等返回的 point，
   *
   * 通过 ( point.X !== 0 || point.Y !== 0 ) 判断是否合法
   */
  interface point {
    X: number,
    Y: number,
  }

  /**
   * 延时操作，milliseconds为整型，单位毫秒
   * @param milliseconds
   */
  function delay(milliseconds: number);

  /**
   * 弹出消息框
   *
   * @param info 内容
   * @param closeTime 单位 秒，默认 3 秒
   */
  function tip(info: string, closeTime?: number): void;


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
   * 多点找色，返回当前颜色的坐标点。
   *
   * 配合 TCG界面里的“取色工具” 一起使用
   *
   * @param color
   * @param poslist
   */
  function findcolor(color: string, poslist: string): point;

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
  function findimage(
    imgName: string,
    sim: number,
    setCol: number,
    setRow: number,
    selectCol: number,
    selectRow: number
  ): point;

  /**
   * 启动（多段动态调整）鼠标宏 参数获取
   *
   * 在代码起始位置，写一次就好，参数调节需要使用。
   */
  function startsectionaimpar(): void;

  /**
   * 改变（多段动态调整）鼠标宏的参数
   *
   * @param name 当前的名称，相同则不处理
   * @param totalTime 弹夹打完所需要的总耗时，单位 毫秒
   * @param par 多段参数，数组字符串
   * @param offsetPixel 每次压枪像素偏移值，模式二的写法
   * @param mode true 使用模式一，false 使用模式二
   */
  function changesectionaimpar(
    name: string,
    totalTime: number,
    par: string,
    offsetPixel?: number,
    mode?: boolean
  ): void;

  /**
   * 启动自定义鼠标宏，
   *
   * 在代码起始位置，写一次就好，
   *
   * 参数调节需要使用 changecustomaimpar，
   *
   * 启停需要配合使用 customaimpar。
   */
  function startcustomaimpar();

  /**
   * 动态调整自定义的鼠标宏参数
   *
   * @param x 水平方向，每次移动 x 像素
   * @param y 垂直方向，每次移动 y 像素
   * @param delay 每隔多少毫秒移动一次
   */
  function changecustomaimpar(x: number, y: number, delay: number);

  /**
   * 控制鼠标宏的启停
   *
   * @param isPause true 是停止；false 是开始
   */
  function customaimpar(isPause: boolean): void;

  /**
   * 按住当前宏按键所指的手机位置
   */
  function holdpress();

  /**
   * 按住操作，按键松开后才会释放此接口
   */
  function holdpress(x: number, y: number);

  /**
   * 按住操作，按键松开后才会释放此接口
   */
  function holdpress(point: point);

  /**
   * 设置全局缓存 map 的键值对
   * @param key
   * @param value
   */
  function setglobalmap(key: string, value: any);

  /**
   * 获取全局缓存 map 指定 key 的值
   * @param key
   */
  function getglobalmap(key: string): any;

  /**
   * 设置是否为射击模式。射击模式没有鼠标
   *
   * @param isShotMode { boolean } 是否为射击模式
   * @example 按 Tab 键，默认会退出，可用通过 mapi.shotmode(true) 进入射击模式
   */
  function shotmode(isShotMode: boolean);

  /**
   * 点击当前宏按键所指的手机位置
   */
  function click();

  /**
   * 点击操作
   *
   * @param x {number}
   * @param y {number}
   */
  function click(x: number, y: number);

  /**
   * 点击操作
   * @param point
   */
  function click(point: point);

  /**
   * 获取当前宏按键所指手机屏幕上的坐标
   */
  function getkeypos(): point;

  /**
   * 准心重置操作，
   * 在隐藏鼠标控制视角时，使用此接口会释放视角然后立即在准心位置重新按下，
   * 主要解决某些游戏因为点击其他位置导致视角失灵的情况
   */
  function aimreset();
}


/**
 * 日志，类别 debug
 * @param content {string} 内容
 */
declare function logdebug(content: string): void;

/**
 * 日志，类别 info
 * @param content {string} 内容
 */
declare function loginfo(content: string): void;

/**
 * 日志，类别 warning
 * @param content {string} 内容
 */
declare function logwarning(content: string): void;

/**
 * 日志，类别 error
 * @param content {string} 内容
 */
declare function logerror(content: string): void;

/**
 * 日志，类别 fatal
 * @param content {string} 内容
 */
declare function logfatal(content: string): void;

