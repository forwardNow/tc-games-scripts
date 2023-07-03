const { src, dest, series } = require('gulp');
const rename = require('gulp-rename');
const { CTX_PATH, TCG_IMAGES_DIR } = require('./utils');
const clean = require('./clean');


function build() {
  return src(`src/images/**/*.png`, { cwd: CTX_PATH })

    // 1600/guns/AMK.png -> 1600/AMK.png
    .pipe(rename(function (path) {
      // { dirname: '1600\\guns', basename: 'ACVAL', extname: '.png' }
      const { dirname } = path;

      const dirs = dirname.split(/[/\\]/);

      const firstDir = dirs[0] || '';

      path.dirname = firstDir;
    }))

    .pipe(dest(TCG_IMAGES_DIR));
}

module.exports = series(clean(TCG_IMAGES_DIR), build);
