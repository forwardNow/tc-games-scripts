// num1
(function testPosture() {
  import('posture').then(({ default: Posture }) => {
    const result = Posture.getCurrentPosture();
    mapi.tip(`Posture.getCurrentPosture(): ${ result }`);
  });
} ());
