import store from './store';
import { mirror } from './mirror';
import { gun } from './gun';
import constant, { Keyboard, NodHeadConfig } from './constant';
import { posture } from './posture';
import { utils } from './utils';

export class Skill {
  nodHead({ isCheckMirrorOpen = true, isCheckHoldGun = true } = {}) {
    if (!this.isEnableOfNodHead()) {
      return false;
    }

    if (isCheckHoldGun && !gun.isHoldConfiguredGun()) {
      return false;
    }

    if (isCheckMirrorOpen && mirror.isOpen()) {
      return false;
    }

    const { Interval, MaxDuration } = NodHeadConfig

    const maxTimes = MaxDuration / Interval;

    let count = 0;

    for (let i = 0; i < maxTimes; i++) {
      // 松开 Shift 才会停止，会导致一直开枪
      if (!this.isPressShift()) {
        this.handleStopNodHead(count);
        break;
      }

      if (!this.isEnableOfNodHead()) {
        this.handleStopNodHead(count);
        break;
      }

      utils.delay(Interval);

      posture.clickSquatKey();

      count += 1;
    }

    return true;
  }

  isEnableOfNodHead() {
    return store.state.nodHead;
  }

  clickOpenMirrorButton() {
    utils.clickPoint(constant.OpenMirrorButtonPoint)
  }

  isPressShift() {
    return utils.isPressingKey(Keyboard.Shift);
  }

  toggleNodHead() {
    store.state.nodHead = !store.state.nodHead;
  }

  /** 重置腰射点头，两次切换状态，中间间隔 600 毫秒 */
  resetNodHead() {
    if (!this.isEnableOfNodHead()) {
      return;
    }

    this.toggleNodHead();

    utils.delay(600);

    this.toggleNodHead();
  }

  /** 点头奇数次，则再点一次 */
  handleStopNodHead(nodCount: number) {
    if (nodCount % 2 === 0) {
      return;
    }

    posture.clickSquatKey();
  }

}

export const skill = new Skill();
