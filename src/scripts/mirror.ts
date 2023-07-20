import { ImageArgs, MirrorCategory, CnMirrorCategory } from '../../types';
import { utils } from './utils';
import constant from './constant';

type DelicateMirror = Exclude<MirrorCategory, 'MachineSight'>;

export class Mirror {
  /** 准镜类型 */
  static Categories: { [key in MirrorCategory | 'X6X3Sight']: MirrorCategory | 'X6X3Sight'; } = {
    /** 机瞄 */
    MachineSight: 'MachineSight',
    /** 红点 */
    RedDotSight: 'RedDotSight',
    /** 全息 */
    HolographicSight: 'HolographicSight',
    /** 2倍镜 */
    X2Sight: 'X2Sight',
    /** 3倍镜 */
    X3Sight: 'X3Sight',
    /** 4倍镜 */
    X4Sight: 'X4Sight',
    /** 6倍镜，未调整过的 */
    X6Sight: 'X6Sight',

    /** 6倍镜，3倍率 */
    X6X3Sight: 'X6X3Sight',

    X8Sight: 'X8Sight',
  };


  /** 准镜映射，对应官方名称 */
  static Mapping: { [key in (keyof (typeof Mirror.Categories))]: CnMirrorCategory } = {
    MachineSight: '',
    RedDotSight: '',
    HolographicSight: '',
    X2Sight: '2倍',
    X3Sight: '3倍',
    X4Sight: '4倍',
    X6Sight: '6倍6',
    X6X3Sight: '6倍3',
    X8Sight: '8倍',
  };

  static ImageArgs: { [name: string]: ImageArgs } = {
    /** 第一（三）人称图标 */
    FirstPersonIcon: [ '第一人称文本', 0.65, 4, 4, 1, 4 ],

    /** 打开 6 倍镜缩放条 的按钮 */
    OpenX6MirrorZoomBarIcon: [ '6倍镜调距按钮', 0.75, 4, 3, 2, 1 ],

    /** 6 倍镜缩放条 */
    X6SightZoomBar: [ '6倍镜调距条', 0.75, 4, 1, 2, 1 ],
  }

  static MirrorTextImageNames: { [key in MirrorCategory]: string } = {
    MachineSight: '机瞄文本',
    RedDotSight: '红点文本',
    HolographicSight: '全息文本',
    X2Sight: '2倍镜文本',
    X3Sight: '3倍镜文本',
    X4Sight: '4倍镜文本',
    X6Sight: '6倍镜文本',
    X8Sight: '8倍镜文本',
  };

  static DelicateMirrorImageNames: { [key in DelicateMirror]: string } = {
    RedDotSight: '大图红点',
    HolographicSight: '大图全息',
    X2Sight: '大图2倍镜',
    X3Sight: '大图3倍镜',
    X4Sight: '大图4倍镜',
    X6Sight: '大图6倍镜',
    X8Sight: '大图8倍镜',
  };

  static AvailableMirrors: MirrorCategory[] = [
    'RedDotSight',
    'HolographicSight',
    'X8Sight',
    'X6Sight',
    'X3Sight',
    'X4Sight',
    'X2Sight',
    'MachineSight',
  ];

  /**
   * 是否开镜
   *
   * @return {boolean}
   */
  isOpen() {
    // 第一（三）人称图标 如果存在 则说明未开镜
    return !utils.isImageExist(...Mirror.ImageArgs.FirstPersonIcon);
  }

  /** 是否有可用准镜 */
  hasAvailableMirror() {
    // TODO
  }

  /** 获取当前准镜名称 */
  getCurrentMirror(disabledMirrors = [ 'X8Sight' as MirrorCategory ], availableMirrors = Mirror.AvailableMirrors) {
    return this.getCurrentBySightText(disabledMirrors, availableMirrors);
  }

  getCurrentBySightText(disabledMirrors: MirrorCategory[], availableMirrors: MirrorCategory[]) {
    const areaArgs: [ number, number, number, number ] = [ 4, 4, 4, 2 ];

    const mirrors = availableMirrors.filter((mirror) => {
      if (!Mirror.MirrorTextImageNames[mirror]) {
        return false;
      }

      if (disabledMirrors.includes(mirror)) {
        return false;
      }

      return true;
    });

    const mirrorArgsList = mirrors.map((mirror) => {
      const imageName = Mirror.MirrorTextImageNames[mirror];
      const sim = constant.MirrorTextImageSim[mirror];

      return [ imageName, sim, ...areaArgs ] as ImageArgs;
    });

    const targetIndex = mirrorArgsList.findIndex((args: ImageArgs) => utils.isImageExist(...args));

    if (targetIndex === -1) {
      return null;
    }

    return mirrors[targetIndex];
  }

  isX6Sight() {
    const mirror = this.getCurrentMirror();

    return mirror === Mirror.Categories.X6Sight;
  }

  /** 识别出所有可用准镜 */
  identityAvailableMirror() {
    const result: string[] = [];

    const delicateMirrors = Object.keys(Mirror.DelicateMirrorImageNames) as DelicateMirror[];

    delicateMirrors.forEach((mirror) => {
      const imageName = Mirror.DelicateMirrorImageNames[mirror];

      if (utils.isImageExist(imageName, 0.75, 4, 1, 4, 1)) {
        result.push(mirror);
      }
    });

    // loginfo(JSON.stringify(result));
    return result;
  }

  /** 识别背包中的准镜 */
  identityMirrorOfBag() {
    let leftGunMirrors: DelicateMirror[] = [];
    let rightGunMirrors: DelicateMirror[] = [];

    const delicateMirrors = Object.keys(Mirror.DelicateMirrorImageNames) as DelicateMirror[];

    delicateMirrors.forEach((mirror) => {
      const imageName = Mirror.DelicateMirrorImageNames[mirror].replace('大图', '背包');

      if (utils.isImageExist(imageName, 0.75, 4, 4, 3, 1)) {
        leftGunMirrors.push(mirror);
      }
      if (utils.isImageExist(imageName, 0.75, 4, 3, 3, 2)) {
        rightGunMirrors.push(mirror);
      }
    });

    const result = { leftGunMirrors, rightGunMirrors };

    // loginfo(JSON.stringify(result));

    if (leftGunMirrors.length !== 1 || rightGunMirrors.length !== 1) {
      logerror(JSON.stringify(result));
    }

    return result;
  }

  /** 打开 6 倍瞄准镜的缩放栏 */
  openZoomBarOf6XSight() {
    const zoomBarPoint = utils.findImage(...Mirror.ImageArgs.X6SightZoomBar);

    if (utils.isPointExist(zoomBarPoint)) {
      return;
    }

    // TODO 平板，图片寻找区域调整，手机可能也需要调整
    const openX6MirrorZoomBarIconPoint = utils.findImage(...Mirror.ImageArgs.OpenX6MirrorZoomBarIcon);

    if (!utils.isPointExist(openX6MirrorZoomBarIconPoint)) {
      loginfo('openZoomBarOf6XSight(): 未找到图片 - ' + Mirror.ImageArgs.OpenX6MirrorZoomBarIcon[0]);
      return;
    }

    utils.clickPoint(openX6MirrorZoomBarIconPoint);

    return true;
  }

  /** 调整六倍镜，设置为 3 倍率 */
  adjustX6ToX3() {
    if (this.openZoomBarOf6XSight()) {
      utils.delay();
    }

    utils.clickPoint(constant.X6MirrorZoomBarX3PositionPoint);

    return Mirror.Categories.X6X3Sight;
  }

  /** 调整六倍镜，设置为 6 倍率 */
  adjustX6ToX6() {
    if (this.openZoomBarOf6XSight()) {
      utils.delay();
    }

    utils.clickPoint(constant.X6MirrorZoomBarX6PositionPoint);

    return Mirror.Categories.X6Sight;
  }
}

export const mirror = new Mirror();
