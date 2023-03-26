const { src, dest } = require('gulp');
const include = require('gulp-include')
const clean = require('gulp-clean');

function testCurrSight() {
  return src('test/test.sight.tgs')
    .pipe(include({
      extensions: 'tgs',
      hardFail: true,
      includePaths: [
        __dirname
      ]
    }))
    .pipe(dest('dist/test'))
}

function autoPressGun() {
  return src('src/auto-press-gun/auto-press-gun.tgs')
    .pipe(include({
      extensions: 'tgs',
      hardFail: true,
      includePaths: [
        __dirname
      ]
    }))
    .pipe(dest('dist'))
}


function cleanDist() {
  return src('dist')
    .pipe(clean());
}

exports.cleanDist = cleanDist;

exports.testCurrSight = testCurrSight;

exports.autoPressGun = autoPressGun;
