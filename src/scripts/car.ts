import { ImageArgs } from '../../types';
import Utils from './utils';
import { BIND_KEYS } from './constant';

const IMAGE_ARGS: { [name: string]: ImageArgs } = {
  GET_OFF_BUTTON: ['下车按钮', 0.75, 4, 3, 4, 2]
}

const POSITIONS = {

};

/** 是否在车上 */
function isOnCar() {
  const point = mapi.findimage(...IMAGE_ARGS.GET_OFF_BUTTON);

  const result = Utils.isPointExist(point);

  return { point, result };
}

/** 上车 */
function getOn() {
  mapi.key(BIND_KEYS.GET_ON_DRIVER);

  return true;
}

/** 下车 */
function getOff() {
  const { result, point } = isOnCar();

  if (!result) {
    return;
  }

  mapi.click(point);

  return true;
}

export default {
  getOn,
  getOff,
  isOnCar,
}
