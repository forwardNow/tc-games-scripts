# TC Games JS 脚本

## 1. 环境

手机：

| 类别     | 描述                  |
|--------|---------------------|
| 品牌     | 华为 nova9 (NAM-AL00) |
| 分辨率    | 1080 × 2430         |
| 刷新率    | 智能（最高 120 Hz）       |
| 屏幕顶部显示 | 自动匹配                |

电脑：

| 类别  | 描述                   |
|-----|----------------------|
| 品牌  | iMac                 |
| 系统  | win10                |
| 分辨率 | 4096 × 2304, 缩放 200% |

TC Games:

| 类别   | 描述                                                                              |
|------|---------------------------------------------------------------------------------|
| 版本   | 3.0(Update 3412370)                                                             |
| 图片模板 | [TCG多段，时间间隔压枪配置（推荐设置较简单）](./docs/官方资料/TCG多段，时间间隔压枪配置（推荐设置较简单）.zip)/1-和平图像模板.zip |

## 2. 基本使用

### 2.1. JS 文件

#### 2.1.1. 存放位置

位置：

* `C:\Users\abc\AppData\Roaming\Sigma-RT\TC Games\resource\Scripts` (简称“脚本目录”)
* ![JS 文件存放位置](./docs/images/01-js-settings.png)

说明：

* 在 “脚本目录” 中存放 JS 文件都会被加载
* 也就是说，要在 “脚本目录” 写 JS 文件

#### 2.1.2. 模块化语法

说明:

* 使用 ES6 模块化语法
* 不能使用相对路径

示例:

* 目录：

  ```text
  .../TC Games/resource/Scripts/
    main.js
    gun.js
  ```

* gun.js:

  ```javascript
  // 暴露一个函数
  export function getCurrentGunName() {
    // ...
  }
  ```

* main.js:

  ```javascript
  // 导入 gun 模块（gun.js）
  import gun from 'gun';
  
  const gunName = gun.getCurrentGunName();
  
  mapi.tip(gunName, 2);
  ```

### 2.2. 宏按键

什么是宏按键：

* 键位设置 -> 宏按键
* ![02-key-macro.png](./docs/images/02-key-macro.png)

宏按键里的 JS 代码必须用**立即执行的函数**包裹起来：

```javascript
(function() {
  
  // 你的代码
  
}());
```

在宏按键里使用 “脚本目录” 中的 JS 文件（模块）：

```javascript
// 使用 gun.js
(function() {
  import('gun').then((gun) =>{
    
    const gunName = gun.getCurrentGunName();

    mapi.tip(gunName, 2);
    
  });
}());
```

JS 宏日志：

* 作用：JS 代码报错都会记录在日志文件
* 位置：`C:\Users\abc\AppData\Roaming\Sigma-RT\TC Games\log\macro_javascript.log`

## 3. mapi

全局对象，JSAPI 接口

类型说明文件：[types/mapi.d.ts](./types/mapi.d.ts)

官方文档：[http://www.sigma-rt.com/tcgames/help/?u=15](http://www.sigma-rt.com/tcgames/help/?u=15)

### 3.1. 点击

### 3.2. 全局 map

说明：

* 读写全局变量

API：

* `setglobalmap`: 写
* `getglobalmap`: 读

示例：

### 3.3. 鼠标宏

说明：

* 用于压枪

API:

* `startsectionaimpar`: 启动
* `changesectionaimpar`: 设置参数
* `customaimpar`: 开始/暂停

示例：

* 鼠标左键宏：

  ```javascript
  (function() {
    mapi.tip('xx', 1);
    const fire_icon_position = { x: 2032, y: 806 };
    
    mapi.holdpress(fire_icon_position.x, fire_icon_position.y);
    
    // 启动
    mapi.startsectionaimpar();
  }());
  ```

* F1 键宏：

  ```javascript
  (function() {
   // 开始
   mapi.customaimpar(false);
       
   const name = 'M4站';
   const totalTime = 3800;
   const par = [19].toString();
   const offsetPixel = 1;
   const mode = false 
       
   mapi.changesectionaimpar(name, totalTime, par, offsetPixel, mode);
  }());
  ```

* F2 键宏：

  ```javascript
  (function() {
    // 停止
    mapi.customaimpar(true);
  }());
  ```
