import Store from './store';
import Mirror from './mirror';
import { gun } from './gun';
import constant, { NOD_HEAD } from './constant';
import { posture } from './posture';

export class Skill {
  flashMirror() {
    if (!this.isNodHead()) {
      return false;
    }

    if (!gun.isHoldConfiguredGun()) {
      return false;
    }

    if (Mirror.isOpen()) {
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

  isNodHead() {
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
