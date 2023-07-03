const { src, dest } = require('gulp');
const { CTX_PATH, TCG_SCRIPTS_DIR } = require('./utils');
const rename = require('gulp-rename');

module.exports = function() {
  return src(`src/images/**/*.png`, { cwd: CTX_PATH })
    .pipe(rename(function (path) {
      // { dirname: '1600\\guns', basename: 'ACVAL', extname: '.png' }
      const { dirname } = path;

      const dirs = dirname.split(/[/\\]/);

      const firstDir = dirs[0] || '';

      path.dirname = firstDir;
    }))
    .pipe(dest(TCG_SCRIPTS_DIR));
}
