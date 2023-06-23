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

| 类别   | 描述                                                                                                  |
|------|-----------------------------------------------------------------------------------------------------|
| 版本   | 3.0(Update 3412370)                                                                                 |
| 图片模板 | [TCG多段，时间间隔压枪配置（推荐设置较简单）](./docs/官方资料/TCG多段，时间间隔压枪配置（推荐设置较简单）.zip)/1-和平图像模板.zip                     |
| 图片位置 | C:\Users\abc\AppData\Roaming\Sigma-RT\TC Games\resource\game\smartkey\com.tencent.tmgp.pubgmhd\1080 |

## 2. 基本使用

### 2.1. JS 文件

#### 2.1.1. 存放位置

位置：

* `C:\Users\abc\AppData\Roaming\Sigma-RT\TC Games\resource\Scripts` (简称“脚本目录”)
* ![JS 文件存放位置](./docs/images/01-js-settings.png)

说明：

* 在 “脚本目录” 中存放的 JS 文件都会被加载

#### 2.1.2. 刷新

输入设置 中 快捷键：

* 键位一键恢复： Ctrl + F5

修改了 “脚本目录” 中的 JS 文件后，按 `Ctrl + F5` 后就生效了

#### 2.1.3. 模块化语法

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

模块实例问题：

```javascript
// test.js
export default {
  count: 1,
  add() {
    this.count += 1;
  }
};

// 绑定 num1
(function() {
  import('test').then(({ default: test }) => {
    const prev = test.count;
    test.add();
    const curr = test.count;
    
    mapi.tip(`prev = ${prev}; curr = ${curr}`); // 显示累加的结果
  });
}());

// 绑定 num2
(function() {
  import('test').then(({ default: test }) => {
    mapi.tip(`count = ${test.count}`); // 一直显示初始值
  });
}());


// num1 宏，产生一个 test 模块对象 A；num1 宏，多次执行，`import()` 都返回模块对象 A
// num2 宏，产生一个 test 模块对象 B
```

JS 宏日志：

* 作用：JS 代码报错都会记录在日志文件
* 位置：`C:\Users\abc\AppData\Roaming\Sigma-RT\TC Games\log\macro_javascript.log`

## 3. JS API

### 3.1. mapi

全局对象，JSAPI 接口

类型说明文件：[types/mapi.d.ts](./types/mapi.d.ts)

官方文档：[http://www.sigma-rt.com/tcgames/help/?u=15](http://www.sigma-rt.com/tcgames/help/?u=15)

### 3.2. 多点找色

说明：

* 那个点 是否 是那个色
* 配合

API：

* `mapi.findcolor`

示例：

```javascript
const point = mapi.findimage('255:254:247:142', '1475:648+1477:648+1475:650+1477:650');

if (point.X !== 0 || point.Y !== 0) {
  // 找到了
}
```

### 3.3. 全局 map

说明：

* 读写全局变量

API：

* `mapi.setglobalmap`: 写
* `mapi.getglobalmap`: 读

示例：

### 3.4. 鼠标宏

说明：

* 用于压枪

API:

* `mapi.startsectionaimpar`: 启动
* `mapi.changesectionaimpar`: 设置参数
* `mapi.customaimpar`: 开始/暂停

示例：

* 鼠标左键宏：

  ```javascript
  (function() {
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

### 3.5. 日志

说明：

* 日志输出路径：%appdata%\Sigma-RT\TC Games\Log\macro_javascript.log

API：

* `logdebug`
* `loginfo`
* `logwarning`
* `logerror`
* `logfatal`

注意：

* API 是全局方法，不需要 mapi

## 4. 调整

### 4.1. 相似度

| 图片名称 | 官方值  | 调整后的值    |
|------|------|----------|
| 2倍压枪 | 0.75 | 0.68     |
| 3倍压枪 | 0.75 | **0.56** |
| 4倍压枪 | 0.75 | 0.68     |
| 6倍压枪 | 0.75 | **0.60** |

### 新增图片

## 5. bug

### 5.1. 分段压枪，自动开枪

描述：

* 分段压枪，切换 蹲/站 时，点一下开火键会自动打二三十发子弹

## 6. 参考

* [和平精英手游物资及事件场景中英文对照（持续更新，务必收藏！）](https://zhuanlan.zhihu.com/p/359768662)
