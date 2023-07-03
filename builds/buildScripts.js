const { src, dest, series } = require('gulp');
const replace = require('gulp-replace');
const clean = require('./clean')
const { CTX_PATH, TCG_SCRIPTS_DIR } = require('./utils');

const DEVICE = process.env.DEVICE;

function build() {
  return src(`src/scripts/*.js`, { cwd: CTX_PATH })
    .pipe(replace(/\/\*\s*replace\s*start\s*\*\/\s*\w+\s*\/\*\s*replace end\s*\*\//, DEVICE))
    .pipe(dest(TCG_SCRIPTS_DIR));
}

module.exports = series(clean(TCG_SCRIPTS_DIR), build);
