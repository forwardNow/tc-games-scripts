import Utils from './utils';
import { ImageArgs, T_Medicine } from '../../types';
import { BIND_KEYS } from './constant';

/**
 * 药物类别
 */
const CATEGORIES: { [key in T_Medicine]: T_Medicine } = {
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

const MEDICINE_IMAGE_NAMES: { [key in T_Medicine]: string } = {
  // 能量饮料
  ENERGY_DRINK: '能量饮料',
  // 止痛药
  PAINKILLER: '止痛药',
  // 肾上腺素注射剂
  EPINEPHRINE_INJECTION: '肾上腺素注射剂',
  // 绷带
  BANDAGE: '绷带',
  // 急救包
  FIRST_AID_KIT: '急救包',
  // 医疗急救箱
  MEDICAL_FIRST_AID_KIT: '医疗急救箱',
};

const IMAGE_ARGS: { [name: string]: ImageArgs } = {
  CANCEL_TAKE_MEDICINE_BUTTON: [ '取消打药按钮', 0.75, 4, 4, 3, 4 ],

  EXPAND_LIST_BUTTON: [ '投掷物展开按钮', 0.75, 4, 4, 2, 4 ],
  COLLAPSE_LIST_BUTTON: [ '投掷物折叠按钮', 0.75, 4, 2, 2, 2 ],
  ENERGY_DRINK: [ '能量饮料', 0.75, 4, 2, 2, 2 ],
  PAINKILLER: [ '止痛药', 0.75, 4, 2, 2, 2 ],
  FIRST_AID_KIT: [ '急救包', 0.75, 4, 2, 2, 2 ],
};


/**
 * 取消吃药
 * @returns {boolean} true - 执行成功
 */
function cancelTakeMedicine() {
  const point = mapi.findimage(...IMAGE_ARGS.CANCEL_TAKE_MEDICINE_BUTTON);

  if (Utils.isPointNotExist(point)) {
    return false;
  }

  mapi.click(point);

  mapi.aimreset();

  return true;
}

// 吃药
function takeMedicine(medicine: T_Medicine) {
  expandList();

  mapi.delay(200);

  const point = mapi.findimage(...IMAGE_ARGS[medicine]);

  if (Utils.isPointNotExist(point)) {
    Utils.showTip('未找到药品：' + MEDICINE_IMAGE_NAMES[medicine]);
    collapseList();
    return;
  }

  mapi.click(point);

  mapi.delay(100);

  Utils.clickKey(BIND_KEYS.TAKE_MEDICINE)
}

function expandList() {
  Utils.clickImagePosition(...IMAGE_ARGS.EXPAND_LIST_BUTTON);
}

function collapseList() {
  Utils.clickImagePosition(...IMAGE_ARGS.COLLAPSE_LIST_BUTTON);
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
