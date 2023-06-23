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
