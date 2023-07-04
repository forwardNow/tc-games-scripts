// num1
(function testPosture() {
  import('posture').then(({ default: Posture }) => {
    const result = Posture.getCurrentPosture();
    mapi.tip(`Posture.getCurrentPosture(): ${ result }`);
  });
} ());

// num2
(function testGun() {
  import('gun').then(({ default: Gun }) => {
    const result = Gun.getCurrentGun();
    mapi.tip(`Gun.getCurrentGun(): ${ result }`);
  });
} ());

// num3
(function testMirror() {
  import('mirror').then(({ default: Mirror }) => {
    const isOpen = Mirror.isOpen();
    const getCurrentMirror = Mirror.getCurrentMirror();
    mapi.tip(`Mirror.isOpen(): ${ isOpen }。Mirror.getCurrentMirror(): ${ getCurrentMirror }。`);
  });
} ());


// 鼠标左键
(function test_main_fire() {
  import('main').then(({ default: gunPressControl }) => {
    gunPressControl.fire();
  });
} ());

// F12
(function test_main_toggleEnableOfTip() {
  import('main').then(({ default: gunPressControl }) => {
    gunPressControl.toggleEnableOfTip();
  });
} ());

// 滚上
(function test_main_toggleX6Sight() {
  import('main').then(({ default: gunPressControl }) => {
    gunPressControl.toggleX6Sight();
  });
} ());
``
// 切枪
(function() {
  import('main').then(({ default: main }) => {
    main.switchGun();
  });
} ());

// 收枪
(function() {
  import('main').then(({ default: main }) => {
    main.hideGun();
  });
} ());

// 上箭头
(function() {
  import('main').then(({ default: main }) => {
    main.addDelay();
  });
} ());

// 下箭头
(function() {
  import('main').then(({ default: main }) => {
    main.subtractDelay();
  });
} ());



