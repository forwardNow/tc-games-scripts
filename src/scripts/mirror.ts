import { ImageArgs, MirrorCategory, T_OfficialMirror } from '../../types';
import { utils } from './utils';
import constant from './constant';

type DelicateMirror = Exclude<MirrorCategory, 'MACHINE_SIGHT'>;

export class Mirror {
  static X6_SIGHT_ZOOM_BAR_POINT = constant.X6_SIGHT_ZOOM_BAR_POINT;
  static X6_TO_X3_POINT = constant.X6_TO_X3_POINT;
  static X6_TO_X6_POINT = constant.X6_TO_X6_POINT;

  /** 准镜类型 */
  static CATEGORIES: { [key in MirrorCategory | 'X6_X3_SIGHT']: MirrorCategory | 'X6_X3_SIGHT'; } = {
    /** 机瞄 */
    MACHINE_SIGHT: 'MACHINE_SIGHT',
    /** 红点 */
    RED_DOT_SIGHT: 'RED_DOT_SIGHT',
    /** 全息 */
    HOLOGRAPHIC_SIGHT: 'HOLOGRAPHIC_SIGHT',
    /** 2倍镜 */
    X2_SIGHT: 'X2_SIGHT',
    /** 3倍镜 */
    X3_SIGHT: 'X3_SIGHT',
    /** 4倍镜 */
    X4_SIGHT: 'X4_SIGHT',
    /** 6倍镜，未调整过的 */
    X6_SIGHT: 'X6_SIGHT',

    /** 6倍镜，3倍率 */
    X6_X3_SIGHT: 'X6_X3_SIGHT',

    X8_SIGHT: 'X8_SIGHT',
  };


  /** 准镜映射，对应官方名称 */
  static MAPPING: { [key in (keyof (typeof Mirror.CATEGORIES))]: T_OfficialMirror } = {
    MACHINE_SIGHT: '',
    RED_DOT_SIGHT: '',
    HOLOGRAPHIC_SIGHT: '',
    X2_SIGHT: '2倍',
    X3_SIGHT: '3倍',
    X4_SIGHT: '4倍',
    X6_SIGHT: '6倍6',
    X6_X3_SIGHT: '6倍3',
    X8_SIGHT: '8倍',
  };

  /** 图片名称 */
  static IMAGE_NAMES = {
    /** 第一（三）人称图标 */
    FIRST_PERSON_ICON: '第一人称文本',

    CURRENT_MACHINE_SIGHT: '机瞄文本',
    CURRENT_RED_DOT_SIGHT: '红点文本',
    CURRENT_HOLOGRAPHIC_SIGHT: '全息文本',

    CURRENT_2X_SIGHT: '2倍镜文本',
    CURRENT_3X_SIGHT: '3倍镜文本',
    CURRENT_4X_SIGHT: '4倍镜文本',
    CURRENT_6X_SIGHT: '6倍镜文本',
    CURRENT_8X_SIGHT: '8倍镜文本',

    /** 打开 6 倍镜缩放条 的按钮 */
    BUTTON_OF_X6_SIGHT_ZOOM_BAR: '6倍镜调距按钮',
    /** 6 倍镜缩放条 */
    X6_SIGHT_ZOOM_BAR: '6倍镜调距条',
  };

  static MIRROR_TEXT_IMAGE_NAMES: { [key in MirrorCategory]: string } = {
    MACHINE_SIGHT: '机瞄文本',
    RED_DOT_SIGHT: '红点文本',
    HOLOGRAPHIC_SIGHT: '全息文本',
    X2_SIGHT: '2倍镜文本',
    X3_SIGHT: '3倍镜文本',
    X4_SIGHT: '4倍镜文本',
    X6_SIGHT: '6倍镜文本',
    X8_SIGHT: '8倍镜文本',
  };

  static DELICATE_MIRROR_IMAGE_NAMES: { [key in DelicateMirror]: string } = {
    RED_DOT_SIGHT: '大图红点',
    HOLOGRAPHIC_SIGHT: '大图全息',
    X2_SIGHT: '大图2倍镜',
    X3_SIGHT: '大图3倍镜',
    X4_SIGHT: '大图4倍镜',
    X6_SIGHT: '大图6倍镜',
    X8_SIGHT: '大图8倍镜',
  };

  static AVAILABLE_MIRRORS: MirrorCategory[] = [
    'RED_DOT_SIGHT',
    'HOLOGRAPHIC_SIGHT',
    'X8_SIGHT',
    'X6_SIGHT',
    'X3_SIGHT',
    'X4_SIGHT',
    'X2_SIGHT',
    'MACHINE_SIGHT',
  ];

  /**
   * 是否开镜
   *
   * @return {boolean}
   */
  isOpen() {
    // 第一（三）人称图标 如果存在 则说明未开镜
    const isExist = utils.isImageExist(Mirror.IMAGE_NAMES.FIRST_PERSON_ICON, 0.65, 4, 4, 1, 4);

    return !isExist;
  }


  /**
   * 获取当前准镜名称
   *
   * @return { string }
   */
  getCurrentMirror(disabledMirrors = [ 'X8_SIGHT' as MirrorCategory ], availableMirrors = Mirror.AVAILABLE_MIRRORS) {
    return this.getCurrentBySightText(disabledMirrors, availableMirrors);
  }

  getCurrentBySightText(disabledMirrors: MirrorCategory[], availableMirrors: MirrorCategory[]) {
    const areaArgs: [ number, number, number, number ] = [ 4, 4, 4, 2 ];

    const mirrors = availableMirrors.filter((mirror) => {
      if (!Mirror.MIRROR_TEXT_IMAGE_NAMES[mirror]) {
        return false;
      }

      if (disabledMirrors.includes(mirror)) {
        return false;
      }

      return true;
    });

    const mirrorArgsList = mirrors.map((mirror) => {
      const imageName = Mirror.MIRROR_TEXT_IMAGE_NAMES[mirror];
      const sim = constant.MIRROR_TEXT_IMAGE_SIM[mirror];

      return [ imageName, sim, ...areaArgs ] as ImageArgs;
    });

    const targetIndex = mirrorArgsList.findIndex((args: ImageArgs) => utils.isImageExist(...args));

    if (targetIndex === -1) {
      // TODO 一个准镜都没有的情况，没有“机瞄”文本
      return null;
    }

    return mirrors[targetIndex];
  }

  isX6Sight() {
    const mirror = this.getCurrentMirror();

    return mirror === Mirror.CATEGORIES.X6_SIGHT;
  }

  /**
   * 识别出所有可用准镜
   *
   * @return {*[]}
   */
  identityAvailableMirror() {
    const result: string[] = [];

    const delicateMirrors = Object.keys(Mirror.DELICATE_MIRROR_IMAGE_NAMES) as DelicateMirror[];

    delicateMirrors.forEach((mirror) => {
      const imageName = Mirror.DELICATE_MIRROR_IMAGE_NAMES[mirror];

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

    const delicateMirrors = Object.keys(Mirror.DELICATE_MIRROR_IMAGE_NAMES) as DelicateMirror[];

    delicateMirrors.forEach((mirror) => {
      const imageName = Mirror.DELICATE_MIRROR_IMAGE_NAMES[mirror].replace('大图', '背包');

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


  /**
   * 打开 6 倍瞄准镜的缩放栏
   */
  openZoomBarOf6XSight() {
    const zoomBarPoint = mapi.findimage(Mirror.IMAGE_NAMES.X6_SIGHT_ZOOM_BAR, 0.75, 4, 1, 2, 1);

    if (utils.isPointExist(zoomBarPoint)) {
      return;
    }

    // TODO 平板，图片寻找区域调整，手机可能也需要调整
    const buttonPoint = mapi.findimage(Mirror.IMAGE_NAMES.BUTTON_OF_X6_SIGHT_ZOOM_BAR, 0.75, 4, 3, 2, 1);

    if (!utils.isPointExist(buttonPoint)) {
      loginfo('openZoomBarOf6XSight(): 未找到图片 - ' + Mirror.IMAGE_NAMES.BUTTON_OF_X6_SIGHT_ZOOM_BAR);
      return;
    }

    utils.clickPoint(Mirror.X6_SIGHT_ZOOM_BAR_POINT);

    return true;
  }

  /**
   * 调整六倍镜，设置为 3 倍率
   * @return {string} Mirror.CATEGORIES.X6_X3_SIGHT
   */
  adjustX6ToX3() {
    if (this.openZoomBarOf6XSight()) {
      mapi.delay(100);
    }

    utils.clickPoint(Mirror.X6_TO_X3_POINT);

    return Mirror.CATEGORIES.X6_X3_SIGHT;
  }

  /**
   * 调整六倍镜，设置为 6 倍率
   * @return {string} Mirror.CATEGORIES.X6_TO_X6_SIGHT
   */
  adjustX6ToX6() {
    if (this.openZoomBarOf6XSight()) {
      mapi.delay(100);
    }

    utils.clickPoint(Mirror.X6_TO_X6_POINT);

    return Mirror.CATEGORIES.X6_SIGHT;
  }
}

export const mirror = new Mirror();
