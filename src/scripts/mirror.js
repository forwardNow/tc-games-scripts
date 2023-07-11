import Utils from 'utils';
import Constant from 'constant';

const X6_SIGHT_ZOOM_BAR_POINT = Constant.X6_SIGHT_ZOOM_BAR_POINT;
const X6_TO_X3_POINT = Constant.X6_TO_X3_POINT;
const X6_TO_X6_POINT = Constant.X6_TO_X6_POINT;

/** 准镜类型 */
const CATEGORIES = {
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
}

/** 准镜映射，对应官方名称 */
const MAPPING = {
  [CATEGORIES.MACHINE_SIGHT]: '',
  [CATEGORIES.RED_DOT_SIGHT]: '',
  [CATEGORIES.HOLOGRAPHIC_SIGHT]: '',
  [CATEGORIES.X2_SIGHT]: '2倍',
  [CATEGORIES.X3_SIGHT]: '3倍',
  [CATEGORIES.X4_SIGHT]: '4倍',
  [CATEGORIES.X6_SIGHT]: '6倍6',
  [CATEGORIES.X6_X3_SIGHT]: '6倍3',
  [CATEGORIES.X8_SIGHT]: '8倍',
};

/** 图片名称 */
const IMAGE_NAMES = {
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

const MIRROR_TEXT_IMAGE_NAMES = {
  [CATEGORIES.MACHINE_SIGHT]: '机瞄文本',
  [CATEGORIES.RED_DOT_SIGHT]: '红点文本',
  [CATEGORIES.HOLOGRAPHIC_SIGHT]: '全息文本',
  [CATEGORIES.X2_SIGHT]: '2倍镜文本',
  [CATEGORIES.X3_SIGHT]: '3倍镜文本',
  [CATEGORIES.X4_SIGHT]: '4倍镜文本',
  [CATEGORIES.X6_SIGHT]: '6倍镜文本',
  [CATEGORIES.X8_SIGHT]: '8倍镜文本',
}

const DELICATE_MIRROR_IMAGE_NAMES = {
  [CATEGORIES.RED_DOT_SIGHT]: '大图红点',
  [CATEGORIES.HOLOGRAPHIC_SIGHT]: '大图全息',
  [CATEGORIES.X2_SIGHT]: '大图2倍镜',
  [CATEGORIES.X3_SIGHT]: '大图3倍镜',
  [CATEGORIES.X4_SIGHT]: '大图4倍镜',
  [CATEGORIES.X6_SIGHT]: '大图6倍镜',
  [CATEGORIES.X8_SIGHT]: '大图8倍镜',
}

/**
 * 是否开镜
 *
 * @return {boolean}
 */
function isOpen() {
  // 第一（三）人称图标 如果存在 则说明未开镜
  const isExist = Utils.isImageExist(IMAGE_NAMES.FIRST_PERSON_ICON, 0.65, 4, 4, 1, 4)

  return !isExist;
}

/**
 * 获取当前准镜名称
 *
 * @return { string }
 */
function getCurrentMirror(disabledMirrors = [CATEGORIES.X8_SIGHT] , availableMirrors = CATEGORIES) {
  return getCurrentBySightText(disabledMirrors, availableMirrors);
}

function getCurrentBySightText(disabledMirrors, availableMirrors) {
  const areaArgs = [4, 4, 4, 2];

  const mirrors = availableMirrors.keys().filter((mirror) => {
    if (!MIRROR_TEXT_IMAGE_NAMES[mirror]) {
      return false;
    }

    if (disabledMirrors.includes(mirror)) {
      return false;
    }

    return true;
  });

  const mirrorArgsList = mirrors.map((mirror) => {
    return [
      MIRROR_TEXT_IMAGE_NAMES[mirror],
      Constant.MIRROR_TEXT_IMAGE_SIM[mirror],
      ...areaArgs,
    ];
  });

  const targetIndex = mirrorArgsList.findIndex((args, index) => Utils.isImageExist(...args))

  if (targetIndex === -1) {
    logerror('getCurrentBySightText() 未识别出倍镜');
    return '';
  }

  return mirrors[targetIndex];
}

function isX6Sight() {
  const mirror = getCurrentMirror();

  return mirror === CATEGORIES.X6_SIGHT;
}

/**
 * 识别出所有准镜
 *
 * @return {*[]}
 */
function identifyDelicateMirror() {
  const result = [];

  Object.keys(DELICATE_MIRROR_IMAGE_NAMES).forEach((mirror) => {
    const imageName = DELICATE_MIRROR_IMAGE_NAMES[mirror];

    if(Utils.isImageExist(imageName, 0.75, 4, 1, 4, 1)) {
      result.push(mirror)
    }
  });

  // loginfo(JSON.stringify(result));
  return result;
}

function identityDelicateMirrorOfBag() {
  let leftGunMirrors = [];
  let rightGunMirrors = [];

  Object.keys(DELICATE_MIRROR_IMAGE_NAMES).forEach((mirror) => {
    const imageName = DELICATE_MIRROR_IMAGE_NAMES[mirror].replace('大图', '背包');

    if( Utils.isImageExist(imageName, 0.75, 4, 4, 3, 1)) {
      leftGunMirrors.push(mirror);
    }
    if( Utils.isImageExist(imageName, 0.75, 4, 3, 3, 2)) {
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
function openZoomBarOf6XSight() {
  const zoomBarPoint = mapi.findimage(IMAGE_NAMES.X6_SIGHT_ZOOM_BAR, 0.75, 4, 1, 2, 1);

  if (Utils.isPointExist(zoomBarPoint)) {
    return;
  }

  // TODO 平板，图片寻找区域调整，手机可能也需要调整
  const buttonPoint = mapi.findimage(IMAGE_NAMES.BUTTON_OF_X6_SIGHT_ZOOM_BAR, 0.75, 4, 3, 2, 1);

  if (!Utils.isPointExist(buttonPoint)) {
    loginfo('未找到图片：' + IMAGE_NAMES.BUTTON_OF_X6_SIGHT_ZOOM_BAR);
    return;
  }

  mapi.click(X6_SIGHT_ZOOM_BAR_POINT.x, X6_SIGHT_ZOOM_BAR_POINT.y);

  return true;
}

/**
 * 调整六倍镜，设置为 3 倍率
 * @return {string} CATEGORIES.X6_X3_SIGHT
 */
function adjustX6ToX3() {
  if(openZoomBarOf6XSight()) {
    mapi.delay(100);
  }

  mapi.click(X6_TO_X3_POINT.x, X6_TO_X3_POINT.y);

  return CATEGORIES.X6_X3_SIGHT;
}

/**
 * 调整六倍镜，设置为 6 倍率
 * @return {string} CATEGORIES.X6_TO_X6_SIGHT
 */
function adjustX6ToX6() {
  if(openZoomBarOf6XSight()) {
    mapi.delay(100);
  }

  mapi.click(X6_TO_X6_POINT.x, X6_TO_X6_POINT.y);

  return CATEGORIES.X6_SIGHT;
}

export default {
  CATEGORIES,
  MAPPING,
  isOpen,
  getCurrentMirror,
  isX6Sight,
  adjustX6ToX3,
  adjustX6ToX6,

  identifyDelicateMirror,
  identityDelicateMirrorOfBag,
}
