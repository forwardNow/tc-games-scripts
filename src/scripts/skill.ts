import Store from './store';
import { mirror } from './mirror';
import { gun } from './gun';
import constant, { NOD_HEAD } from './constant';
import { posture } from './posture';

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

      mapi.delay(INTERVAL);

      posture.clickSquatKey();
    }

    return true;
  }

  isEnableOfNodHead() {
    return Store.state.nodHead;
  }

  clickOpenMirrorButton() {
    const { x, y } = constant.OPEN_MIRROR_BUTTON_POSITION;
    mapi.click(x, y);
  }

  isPressShift() {
    return mapi.keyispress('shift');
  }

  toggleNodHead() {
    Store.state.nodHead = !Store.state.nodHead;
  }
}

export const skill = new Skill();
