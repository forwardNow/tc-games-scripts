const { src } = require('gulp');
const clean = require('gulp-clean');

module.exports = function(cwd) {
  return function() {
    return (
      src(
        './**/*', // 所有文件及目录
        {
          cwd,          // 工作目录
          read: false,  // 不需要读取文件内容
          dot: true,    // 以 . 打头的文件也包含
        }
      )
        .pipe(clean())
    );
  };
}
