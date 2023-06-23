import Gun from 'gun';
import Posture from 'posture';
import Mirror from 'mirror';
import Utils from 'utils';
import Config from 'config';
import Variable from 'variable';

const FIRE_ICON_POINT = { x: 2032, y: 806 };

const gunPressControl = {
  currGun: '',
  currPosture: '',
  currMirror: '',

  /**
   * 开火
   *
   * 键位绑定：鼠标左键
   */
  fire() {
    mapi.holdpress(FIRE_ICON_POINT.x, FIRE_ICON_POINT.y);

    this.run();
  },

  /**
   * 调整 6 倍镜，并记录调整过 6 倍镜倍率的枪及倍率
   *
   * 键位绑定：鼠标滚轮-滚上
   */
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

    Variable.setX6SightOfGun(currGun, adjustedMirror)
  },

  /**
   * 启用/禁用 mapi.tip()
   *
   * 绑定键位：F12
   */
  toggleEnableOfTip() {
    Utils.toggleEnableOfTip();
  },

  run() {
    if (!Mirror.isOpen()) {
      this.pause();
      return;
    }

    const args = this.getArgsOfCustomAimPar();

    if (!args) {
      this.pause();
      return;
    }

    this.start();
    this.play();
    this.changePressArgs(args);
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

  changePressArgs({ x, y, delay }) {
    mapi.changecustomaimpar(x, y, delay);
  },

  /**
   * @return {{ x: number, y: number, delay: number} | null}
   */
  getArgsOfCustomAimPar() {
    const { gun, posture, mirror } = this.getStatus();

    const args = Config.getGunPressArgs(gun, posture, mirror);

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
      mirror = Variable.getX6SightOfGun(gun) || Mirror.CATEGORIES.X6_SIGHT;
    }

    return mirror;
  },

};

export default gunPressControl;
