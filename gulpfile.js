const { src, dest } = require('gulp');

exports.default = function() {
  // 读取文件
  return src('src/*.js')
    // 写到 output 目录
    .pipe(dest('C:\\Users\\abc\\AppData\\Roaming\\Sigma-RT\\TC Games\\resource\\Scripts'));
}
