import store from './store';
import { mirror } from './mirror';
import { gun } from './gun';
import constant, { KEYBOARD, NOD_HEAD } from './constant';
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

    const { INTERVAL, MAX_DURATION } = NOD_HEAD

    const maxTimes = MAX_DURATION / INTERVAL;

    for (let i = 0; i < maxTimes; i++) {
      if (!this.isPressShift()) {
        break;
      }

      utils.delay(INTERVAL);

      posture.clickSquatKey();
    }

    return true;
  }

  isEnableOfNodHead() {
    return store.state.nodHead;
  }

  clickOpenMirrorButton() {
    utils.clickPoint(constant.OPEN_MIRROR_BUTTON_POSITION)
  }

  isPressShift() {
    return utils.isPressingKey(KEYBOARD.Shift);
  }

  toggleNodHead() {
    store.state.nodHead = !store.state.nodHead;
  }
}

export const skill = new Skill();
