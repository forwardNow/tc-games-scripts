const { src, dest, series } = require('gulp');
const replace = require('gulp-replace');
const ts = require('gulp-typescript');
const clean = require('./clean')
const { CTX_PATH, TCG_SCRIPTS_DIR, DIST_PATH } = require('./utils');

const tsProject = ts.createProject('tsconfig.json');

const DEVICE = process.env.DEVICE;

function build() {
  return src(['src/scripts/*.js', 'src/scripts/*.ts'], { cwd: CTX_PATH })
    // 指定编译哪个设备
    .pipe(replace(/\/\*\s*replace\s*start\s*\*\/\s*\w+\s*\/\*\s*replace end\s*\*\//, DEVICE))

    .pipe(tsProject()).js

    // import x from './x' --> import x from 'x'
    .pipe(replace(/(from\s+['"])(\.\/)(\w+)'/gm, '$1$3'))

    .pipe(dest(TCG_SCRIPTS_DIR))
    .pipe(dest(DIST_PATH));
}

module.exports = series(clean(TCG_SCRIPTS_DIR), build);
