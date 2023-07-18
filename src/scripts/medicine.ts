import { utils } from './utils';
import { ImageArgs, MedicineCategory } from '../../types';
import { BindKeys } from './constant';

export class Medicine {
  /**
   * 药物类别
   */
  static Categories: { [key in MedicineCategory]: MedicineCategory } = {
    // 能量饮料
    EnergyDrink: 'EnergyDrink',

    // 止痛药
    Painkiller: 'Painkiller',

    // 肾上腺素注射剂
    EpinephrineInjection: 'EpinephrineInjection',

    // 绷带
    Bandage: 'Bandage',

    // 急救包
    FirstAidKit: 'FirstAidKit',

    // 医疗急救箱
    MedicalFirstAidKit: 'MedicalFirstAidKit',
  };

  static MedicineImageNames: { [key in MedicineCategory]: string } = {
    // 能量饮料
    EnergyDrink: '能量饮料',
    // 止痛药
    Painkiller: '止痛药',
    // 肾上腺素注射剂
    EpinephrineInjection: '肾上腺素注射剂',
    // 绷带
    Bandage: '绷带',
    // 急救包
    FirstAidKit: '急救包',
    // 医疗急救箱
    MedicalFirstAidKit: '医疗急救箱',
  };

  static ImageArgs: { [name: string]: ImageArgs } = {
    CancelTakeMedicineButton: [ '取消打药按钮', 0.75, 4, 4, 3, 4 ],

    ExpandListButton: [ '投掷物展开按钮', 0.75, 4, 4, 2, 4 ],
    CollapseListButton: [ '投掷物折叠按钮', 0.75, 4, 2, 2, 2 ],
    EnergyDrink: [ '能量饮料', 0.75, 4, 2, 2, 2 ],
    Painkiller: [ '止痛药', 0.75, 4, 2, 2, 2 ],
    FirstAidKit: [ '急救包', 0.75, 4, 2, 2, 2 ],
  };


  /**
   * 取消吃药
   * @returns {boolean} true - 执行成功
   */
  cancelTakeMedicine() {
    const point = utils.findImage(...Medicine.ImageArgs.CancelTakeMedicineButton);

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

    const point = utils.findImage(...Medicine.ImageArgs[medicine]);

    if (utils.isPointNotExist(point)) {
      utils.showTip('未找到药品：' + Medicine.MedicineImageNames[medicine]);
      this.collapseList();
      return;
    }

    utils.clickPoint(point);

    utils.delay();

    utils.clickKey(BindKeys.TakeMedicine)
  }

  expandList() {
    utils.clickImagePosition(...Medicine.ImageArgs.ExpandListButton);
  }

  collapseList() {
    utils.clickImagePosition(...Medicine.ImageArgs.CollapseListButton);
  }

  /** 吃 能量饮料  */
  eatEnergyDrink() {
    this.takeMedicine(Medicine.Categories.EnergyDrink);
  }

  /** 吃 止痛药  */
  eatPainkiller() {
    this.takeMedicine(Medicine.Categories.Painkiller);
  }

  /** 吃 肾上腺素注射剂  */
  eatEpinephrineInjection() {
    this.takeMedicine(Medicine.Categories.EpinephrineInjection);
  }

  /** 吃 绷带  */
  eatBandage() {
    this.takeMedicine(Medicine.Categories.Bandage);
  }

  /** 吃 急救包  */
  eatFirstAidKit() {
    this.takeMedicine(Medicine.Categories.FirstAidKit);
  }

  /** 吃 医疗急救箱  */
  eatMedicalFirstAidKit() {
    this.takeMedicine(Medicine.Categories.MedicalFirstAidKit);
  }
}

export const medicine = new Medicine();
