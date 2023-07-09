const buildScripts = require('./builds/buildScripts');
const buildImages = require('./builds/buildImages');
const insertKeymap = require('./builds/insertKeymap');

exports.buildScripts = buildScripts;
exports.buildImages = buildImages;
exports.insertKeymap = insertKeymap;

// tail -f ~/AppData/Roaming/Sigma-RT/TC\ Games/log/macro_javascript.log
