import Utils from 'utils';

/**
 * 药物类别
 */
const CATEGORIES = {
  // 能量饮料
  ENERGY_DRINK: 'ENERGY_DRINK',

  // 止痛药
  PAINKILLER: 'PAINKILLER',

  // 肾上腺素注射剂
  EPINEPHRINE_INJECTION: 'EPINEPHRINE_INJECTION',

  // 绷带
  BANDAGE: 'BANDAGE',

  // 急救包
  FIRST_AID_KIT: 'FIRST_AID_KIT',

  // 医疗急救箱
  MEDICAL_FIRST_AID_KIT: 'MEDICAL_FIRST_AID_KIT',
};

const IMAGE_NAMES = {
  // 能量饮料
  [CATEGORIES.ENERGY_DRINK]: '能量饮料',
  // 止痛药
  [CATEGORIES.PAINKILLER]: '止痛药',
  // 肾上腺素注射剂
  [CATEGORIES.EPINEPHRINE_INJECTION]: '肾上腺素注射剂',
  // 绷带
  [CATEGORIES.BANDAGE]: '绷带',
  // 急救包
  [CATEGORIES.FIRST_AID_KIT]: '急救包',
  // 医疗急救箱
  [CATEGORIES.MEDICAL_FIRST_AID_KIT]: '医疗急救箱',

  // 药品列表-展开按钮
  EXPAND_LIST_BUTTON: '药品列表展开按钮',

  // 药品列表-折叠按钮
  COLLAPSE_LIST_BUTTON: '药品列表折叠按钮',

  // 取消吃药按钮
  CANCEL_TAKE_MEDICINE_BUTTON: '取消吃药按钮',
};

/**
 * 取消吃药
 * @returns {boolean} true - 执行成功
 */
function cancelTakeMedicine() {
  const point = mapi.findimage(IMAGE_NAMES.CANCEL_TAKE_MEDICINE_BUTTON, 0.75, 3, 4, 1, 3);

  if (Utils.isPointNotExist(point)) {
    return false;
  }

  mapi.click(point);

  mapi.aimreset();

  return true;
}

// 吃药
function takeMedicine(category) {
  expandList();

  mapi.delay(100);

  const point = mapi.findimage(IMAGE_NAMES[category], 0.75, 4, 4, 4, 4);

  if (Utils.isPointNotExist(point)) {
    Utils.showTip('未找到药品：' + IMAGE_NAMES[category]);
    collapseList();
    return;
  }

  mapi.click(point);
}

function expandList() {
  Utils.clickImagePosition(IMAGE_NAMES.EXPAND_LIST_BUTTON, 0.75, 4, 4, 4, 4);
}

function collapseList() {
  Utils.clickImagePosition(IMAGE_NAMES.COLLAPSE_LIST_BUTTON, 0.75, 4, 4, 4, 4);
}

// 吃 能量饮料
function eatEnergyDrink() {
  takeMedicine(CATEGORIES.ENERGY_DRINK);
}

// 吃 止痛药
function eatPainkiller() {
  takeMedicine(CATEGORIES.PAINKILLER);
}

// 吃 肾上腺素注射剂
function eatEpinephrineInjection() {
  takeMedicine(CATEGORIES.EPINEPHRINE_INJECTION);
}

// 吃 绷带
function eatBandage() {
  takeMedicine(CATEGORIES.BANDAGE);
}

// 吃 急救包
function eatFirstAidKit() {
  takeMedicine(CATEGORIES.FIRST_AID_KIT);
}

// 吃 医疗急救箱
function eatMedicalFirstAidKit() {
  takeMedicine(CATEGORIES.MEDICAL_FIRST_AID_KIT);
}

export default {
  cancelTakeMedicine,

  eatEnergyDrink,
  eatPainkiller,
  eatEpinephrineInjection,

  eatBandage,
  eatFirstAidKit,
  eatMedicalFirstAidKit,
}
