const { resolve } = require('path');
const { src, dest } = require('gulp');

// C:\Users\wuqinfei
const USER_HOME = process.env.HOME || process.env.USERPROFILE;

const scriptDirPath = resolve(USER_HOME, 'AppData\\Roaming\\Sigma-RT\\TC Games\\resource\\Scripts')

exports.default = function() {
  // 读取文件
  return src('src/*.js')
    // 写到 output 目录
    .pipe(dest(scriptDirPath));
}
