import { ImageArgs } from '../../types';
import { utils } from './utils';
import { BindKeys } from './constant';

export class Car {
  static ImageArgs: { [name: string]: ImageArgs } = {
    GetOffButton: ['下车按钮', 0.75, 4, 3, 4, 2]
  }

  /** 是否在车上 */
  isOnCar() {
    const point = utils.findImage(...Car.ImageArgs.GetOffButton);

    const result = utils.isPointExist(point);

    return { point, result };
  }

  /** 上车 */
  getOn() {
    utils.clickKey(BindKeys.GetOnDriver);

    utils.resetAimAndDirection(100);

    return true;
  }

  /** 下车 */
  getOff = () => {
    const { result, point } = this.isOnCar();

    if (!result) {
      return;
    }

    utils.clickPoint(point);

    utils.resetAimAndDirection(100);

    return true;
  }
}

export const car = new Car();
