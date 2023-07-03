const { resolve } = require('path');

// C:\Users\abc
const USER_HOME = process.env.HOME || process.env.USERPROFILE;

// C:\Users\abc\AppData\Roaming\Sigma-RT\TC Games\resource\Scripts
const TCG_SCRIPTS_DIR = resolve(USER_HOME, 'AppData\\Roaming\\Sigma-RT\\TC Games\\resource\\Scripts')

// C:\Users\abc\AppData\Roaming\Sigma-RT\TC Games\resource\game\smartkey\com.tencent.tmgp.pubgmhd
const TCG_IMAGES_DIR = resolve(USER_HOME, 'AppData\\Roaming\\Sigma-RT\\TC Games\\resource\\game\\smartkey\\com.tencent.tmgp.pubgmhd')

const CTX_PATH = resolve(__dirname, '../');

module.exports = {
  TCG_SCRIPTS_DIR,
  TCG_IMAGES_DIR,
  CTX_PATH,
}
