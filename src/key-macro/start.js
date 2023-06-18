/*
  开始
 */

var main = import('main');
function autostart(){
  if(null != main){
    main.then((module) =>{
      var g = new module.gunPressControl();
      g.start();
    })
      .catch((err)=> {
        mapi.tip(err);
      });
  }
}
autostart();
