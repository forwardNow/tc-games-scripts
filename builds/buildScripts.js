const { src, dest } = require('gulp');
const { CTX_PATH, TCG_SCRIPTS_DIR } = require('./utils');

module.exports = function() {
  return src(`src/scripts/*.js`, { cwd: CTX_PATH })
    .pipe(dest(TCG_SCRIPTS_DIR));
}
