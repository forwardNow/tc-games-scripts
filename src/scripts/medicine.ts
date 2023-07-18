import { utils } from './utils';
import { ImageArgs, MedicineCategory } from '../../types';
import { BIND_KEYS } from './constant';

export class Medicine {
  /**
   * 药物类别
   */
  static CATEGORIES: { [key in MedicineCategory]: MedicineCategory } = {
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

  static MEDICINE_IMAGE_NAMES: { [key in MedicineCategory]: string } = {
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

  static IMAGE_ARGS: { [name: string]: ImageArgs } = {
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
  cancelTakeMedicine() {
    const point = utils.findImage(...Medicine.IMAGE_ARGS.CANCEL_TAKE_MEDICINE_BUTTON);

    if (utils.isPointNotExist(point)) {
      return false;
    }

    utils.clickPoint(point);

    utils.resetAim();

    return true;
  }

// 吃药
  takeMedicine(medicine: MedicineCategory) {
    this.expandList();

    utils.delay(200);

    const point = utils.findImage(...Medicine.IMAGE_ARGS[medicine]);

    if (utils.isPointNotExist(point)) {
      utils.showTip('未找到药品：' + Medicine.MEDICINE_IMAGE_NAMES[medicine]);
      this.collapseList();
      return;
    }

    utils.clickPoint(point);

    utils.delay();

    utils.clickKey(BIND_KEYS.TAKE_MEDICINE)
  }

  expandList() {
    utils.clickImagePosition(...Medicine.IMAGE_ARGS.EXPAND_LIST_BUTTON);
  }

  collapseList() {
    utils.clickImagePosition(...Medicine.IMAGE_ARGS.COLLAPSE_LIST_BUTTON);
  }

  /** 吃 能量饮料  */
  eatEnergyDrink() {
    this.takeMedicine(Medicine.CATEGORIES.ENERGY_DRINK);
  }

  /** 吃 止痛药  */
  eatPainkiller() {
    this.takeMedicine(Medicine.CATEGORIES.PAINKILLER);
  }

  /** 吃 肾上腺素注射剂  */
  eatEpinephrineInjection() {
    this.takeMedicine(Medicine.CATEGORIES.EPINEPHRINE_INJECTION);
  }

  /** 吃 绷带  */
  eatBandage() {
    this.takeMedicine(Medicine.CATEGORIES.BANDAGE);
  }

  /** 吃 急救包  */
  eatFirstAidKit() {
    this.takeMedicine(Medicine.CATEGORIES.FIRST_AID_KIT);
  }

  /** 吃 医疗急救箱  */
  eatMedicalFirstAidKit() {
    this.takeMedicine(Medicine.CATEGORIES.MEDICAL_FIRST_AID_KIT);
  }
}

export const medicine = new Medicine();
