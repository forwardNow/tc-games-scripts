import Gun from 'gun';
import Posture from 'posture';
import Mirror from 'mirror';
import Utils from 'utils';
import Config from 'config';
import Missile from 'missile';
import Variable from 'variable';
import Bag from 'bag';

const gunPressControl = {
  currGun: '',
  currPosture: '',
  currMirror: '',

  fire() {
    mapi.holdpress();

    this.run();
  },

  toggleX6Sight() {
    if (!Mirror.isOpen()) {
      return;
    }

    if (!Mirror.isX6Sight()) {
      return;
    }

    const currGun = Gun.getCurrentGun();

    const currMirror = this.getCurrentMirrorByGun(currGun);

    let adjustedMirror = null;

    if (currMirror === Mirror.CATEGORIES.X6_X3_SIGHT) {
      adjustedMirror = Mirror.adjustX6ToX6();
    } else {
      adjustedMirror = Mirror.adjustX6ToX3();
    }

    Variable.setMirrorOfAdjustedGun(currGun, adjustedMirror)
  },

  /**
   * @description 1. 取消投掷；<br>2. 丢弃背包中光标所指位置的配件；<br>3. 点击当前按键位置并设置压枪参数
   *
   * @bind 鼠标右键
   */
  handleMouseRight() {
    const isDiscardMaterials = Bag.discardMaterialsUnderCursor();

    if (isDiscardMaterials) {
      return;
    }

    const isCancelThrow = Missile.cancelThrow();

    if (isCancelThrow) {
      return;
    }

    const currKeyPoint = mapi.getkeypos();

    mapi.click(currKeyPoint);

    this.updatePressArgs();
  },


  logErrorPressArgs() {
    const { gun, posture, mirror } = this.getStatus();
    const args = Config.getGunPressArgs(gun, posture, mirror);

    logerror(`${ gun }${ posture }${ mirror }: ${ JSON.stringify(args) }`)
  },

  run() {
    if (!Mirror.isOpen()) {
      this.pause();
      return;
    }

    this.start();

    const success = this.updatePressArgs();

    if (!success) {
      this.pause();
      return;
    }

    this.play();
  },

  start() {
    mapi.startcustomaimpar();
  },

  play() {
    mapi.customaimpar(false);
  },

  pause() {
    mapi.customaimpar(true);
  },

  updatePressArgs() {
    const args = this.getArgsOfCustomAimPar();

    if (!args) {
      return false;
    }

    const { x, y, delay } = args;

    mapi.changecustomaimpar(x, y, delay);

    return true;
  },

  /**
   * @return {{ x: number, y: number, delay: number} | null}
   */
  getArgsOfCustomAimPar() {
    const { gun, posture, mirror } = this.getStatus();

    const args = Config.getGunPressArgs(gun, posture, mirror);

    args.delay += Variable.deltaDelay;

    Utils.showTip(`${ gun }${ posture }${ mirror }: ${ JSON.stringify(args) }`)

    return args;
  },

  /**
   * 此方法在开镜后执行，
   *
   * 如未获取到 gun、posture、mirror，则会使用上次识别到的值
   */
  getStatus() {
    const {
      currGun: lastGun,
      currPosture: lastPosture,
      currMirror: lastMirror
    } = this;

    const gun = Gun.getCurrentGun()  || lastGun;
    const posture = Posture.getCurrentPosture()  || lastPosture;
    const mirror = this.getCurrentMirrorByGun(gun)  || lastMirror;

    this.currGun = gun;
    this.currPosture = posture;
    this.currMirror = mirror;

    const officialPostureName = Posture.MAPPING[posture];
    const officialMirrorName = Mirror.MAPPING[mirror] || '';

    return { gun, posture: officialPostureName, mirror: officialMirrorName };
  },

  getCurrentMirrorByGun(gun) {
    let mirror = Mirror.getCurrentMirror();

    if (mirror === Mirror.CATEGORIES.X6_SIGHT) {
      mirror = Variable.getMirrorOfAdjustedGun(gun) || Mirror.CATEGORIES.X6_SIGHT;
    }

    return mirror;
  },

};

export default gunPressControl;
