const { rmSync } = require('fs');

module.exports = function(dir) {
  return function(next) {
    rmSync(dir, { recursive: true });
    next();
  };
}
