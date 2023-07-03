const { src, dest, series } = require('gulp');
const clean = require('./clean')
const { CTX_PATH, TCG_SCRIPTS_DIR } = require('./utils');

function build() {
  return src(`src/scripts/*.js`, { cwd: CTX_PATH })
    .pipe(dest(TCG_SCRIPTS_DIR));
}

module.exports = series(clean(TCG_SCRIPTS_DIR), build);
