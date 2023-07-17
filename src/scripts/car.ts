import { ImageArgs } from '../../types';
import { utils } from './utils';
import { BIND_KEYS } from './constant';

export class Car {
  static IMAGE_ARGS: { [name: string]: ImageArgs } = {
    GET_OFF_BUTTON: ['下车按钮', 0.75, 4, 3, 4, 2]
  }

  static POSITIONS = {
  };

  /** 是否在车上 */
  isOnCar() {
    const point = mapi.findimage(...Car.IMAGE_ARGS.GET_OFF_BUTTON);

    const result = utils.isPointExist(point);

    return { point, result };
  }

  /** 上车 */
  getOn() {
    mapi.key(BIND_KEYS.GET_ON_DRIVER);

    return true;
  }

  /** 下车 */
  getOff = () => {
    const { result, point } = this.isOnCar();

    if (!result) {
      return;
    }

    mapi.click(point);

    utils.resetAimAndDirection();

    return true;
  }
}

export const car = new Car();
