import store from './store';
import { mirror } from './mirror';
import { gun } from './gun';
import constant, { Keyboard, NodHeadConfig } from './constant';
import { posture } from './posture';
import { utils } from './utils';

export class Skill {



  clickOpenMirrorButton() {
    utils.clickPoint(constant.OpenMirrorButtonPoint)
  }

  isPressShift() {
    return utils.isPressingKey(Keyboard.Shift);
  }

}

export const skill = new Skill();
