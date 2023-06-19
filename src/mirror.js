import { isPointExist } from 'utils';

/** 准镜状态 */
export const MIRROR_STATUS = {
  /** 开镜 */
  OPEN: 'OPEN',
  /** 未开镜 */
  CLOSE: 'CLOSE',
}

/** 准镜图片名称 */
export const MIRROR_IMAGE_NAMES = {
  X2: '2倍压枪',
  X3: '3倍压枪',
  X4: '4倍压枪',
  X6: '6倍压枪',
}

/** 图片名称 */
const IMAGE_NAMES = {
  /** 第一（三）人称图标 */
  FIRST_PERSON_ICON: '没有开镜',
};

/**
 * 是否开镜
 *
 * @return {boolean}
 */
export function isMirrorOpen() {
  // 第一（三）人称图标 如果存在 则说明未开镜
  const point = mapi.findimage(IMAGE_NAMES.FIRST_PERSON_ICON, 0.75, 4, 4, 1, 4);
  const isExist = isPointExist(point)

  return !isExist;
}
