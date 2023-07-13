import Store from './store';
import Mirror from './mirror';
import Gun from './gun';
import Constant, { FLASH_MIRROR } from './constant';


export default {
  flashMirror() {
    if (!this.isEnabledOfFlashMirror()) {
      return false;
    }

    if (!Gun.isHoldValidGun()) {
      return false;
    }

    if (Mirror.isOpen()) {
      return false;
    }

    const { INTERVAL, MAX_DURATION } = FLASH_MIRROR

    const maxTimes = MAX_DURATION / INTERVAL;

    for (let i = 0; i < maxTimes; i++) {
      if (!mapi.keyispress()) {
        break;
      }

      this.clickOpenMirrorButton();

      mapi.delay(INTERVAL);

      if (i % 3 === 0) {
        this.nodHead();
      }
    }

    return true;
  },

  isEnabledOfFlashMirror() {
    return Store.state.enabledOfFlashMirror;
  },

  clickOpenMirrorButton() {
    const { x, y } = Constant.OPEN_MIRROR_BUTTON_POSITION;
    mapi.click(x, y);
  },

  nodHead() {
    if (!mapi.keyispress('shift')) {
      return;
    }

    const { x, y } = Constant.SQUAT_BUTTON_POSITION;

    mapi.click(x, y);
  },
}
