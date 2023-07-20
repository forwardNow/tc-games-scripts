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

    for (let i = 0; i < maxTimes; i++) {
      // 松开 Shift 才会停止，会导致一直开枪
      if (!this.isPressShift()) {
        break;
      }

      utils.delay(Interval);

      posture.clickSquatKey();
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
}

export const skill = new Skill();
