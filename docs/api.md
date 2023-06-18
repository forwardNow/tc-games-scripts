# API

全局对象 mapi

## 点击

## 鼠标宏

说明：

* `startsectionaimpar`: 启动
* `changesectionaimpar`: 设置参数
* `customaimpar`: 开始/暂停

示例：

* 鼠标左键宏：

  ```javascript
  const fire_icon_position = { x: 2032, y: 806 };
  
  function handleLongPressLeftMouseButton() {
    if (!mapi) {
      return;
    }
  
    mapi.holdpress(fire_icon_position.x, fire_icon_position.y);
    
    // 启动
    mapi.startsectionaimpar();
  }
  
  handleLongPressLeftMouseButton();
  ```
  
* F1 键宏：

  ```javascript
  // 开始
  mapi.customaimpar(false);
  
  
  const name = 'M4站';
  const totalTime = 3800;
  const par = [19].toString();
  const offsetPixel = 1;
  const mode = false 
  
  mapi.changesectionaimpar(name, totalTime, par, offsetPixel, mode);
  ```

* F2 键宏：

  ```javascript
  // 停止
  mapi.customaimpar(true);
  ```
