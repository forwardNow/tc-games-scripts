
/**
 * 压枪参数
 *
 * changecustomaimpar(x: number, y: number, delay: number)
 */
const NOVA_9 = {
  'M4': {
    'M4蹲6倍6': [0, 1, 5],
    'M4蹲6倍3': [0, 1, 10],
    'M4蹲4倍': [0, 1, 6],
    'M4蹲3倍': [0, 1, 10],
    'M4蹲2倍': [0, 1, 14],
    'M4蹲': [0, 1, 25],
    'M4趴6倍6': [0, 1, 7],
    'M4趴6倍3': [0, 1, 12],
    'M4趴4倍': [0, 1, 8],
    'M4趴3倍': [0, 1, 12],
    'M4趴2倍': [0, 1, 16],
    'M4趴': [0, 1, 28],
    'M4站6倍6': [0, 1, 3],
    'M4站6倍3': [0, 1, 8],
    'M4站4倍': [0, 1, 5],
    'M4站3倍': [0, 1, 8],
    'M4站2倍': [0, 1, 12],
    'M4站': [0, 1, 19],
  },
  'AKM': {
    'AKM蹲6倍6': [0, 5, 4],
    'AKM蹲6倍3': [0, 5, 7],
    'AKM蹲4倍': [0, 1, 4],
    'AKM蹲3倍': [0, 1, 7],
    'AKM蹲2倍': [0, 1, 9],
    'AKM蹲': [0, 1, 15],
    'AKM趴6倍6': [0, 1, 5],
    'AKM趴6倍3': [0, 1, 10],
    'AKM趴4倍': [0, 1, 6],
    'AKM趴3倍': [0, 1, 10],
    'AKM趴2倍': [0, 1, 13],
    'AKM趴': [0, 1, 22],
    'AKM站6倍6': [0, 1, 2],
    'AKM站6倍3': [0, 1, 5],
    'AKM站4倍': [0, 2, 3],
    'AKM站3倍': [0, 1, 5],
    'AKM站2倍': [0, 1, 7],
    'AKM站': [0, 1, 13],
  },
  'QBZ': {
    'QBZ蹲6倍6': [0, 1, 4],
    'QBZ蹲6倍3': [0, 1, 8],
    'QBZ蹲4倍': [0, 1, 5],
    'QBZ蹲3倍': [0, 1, 8],
    'QBZ蹲2倍': [0, 1, 13],
    'QBZ蹲': [0, 1, 22],
    'QBZ趴6倍6': [0, 1, 6],
    'QBZ趴6倍3': [0, 1, 11],
    'QBZ趴4倍': [0, 1, 8],
    'QBZ趴3倍': [0, 1, 11],
    'QBZ趴2倍': [0, 1, 17],
    'QBZ趴': [0, 1, 29],
    'QBZ站6倍6': [0, 1, 3],
    'QBZ站6倍3': [0, 1, 7],
    'QBZ站4倍': [0, 1, 4],
    'QBZ站3倍': [0, 1, 7],
    'QBZ站2倍': [0, 1, 10],
    'QBZ站': [0, 1, 17],
  },
  'AUG': {
    'AUG蹲6倍6': [0, 1, 5],
    'AUG蹲6倍3': [0, 1, 10],
    'AUG蹲4倍': [0, 1, 6],
    'AUG蹲3倍': [0, 1, 10],
    'AUG蹲2倍': [0, 1, 14],
    'AUG蹲': [0, 1, 22],
    'AUG趴6倍6': [0, 1, 6],
    'AUG趴6倍3': [0, 1, 13],
    'AUG趴4倍': [0, 1, 8],
    'AUG趴3倍': [0, 1, 13],
    'AUG趴2倍': [0, 1, 17],
    'AUG趴': [0, 1, 29],
    'AUG站6倍6': [0, 1, 4],
    'AUG站6倍3': [0, 1, 8],
    'AUG站4倍': [0, 1, 5],
    'AUG站3倍': [0, 1, 8],
    'AUG站2倍': [0, 1, 11],
    'AUG站': [0, 1, 19],
  },
  'ACVAL': {
    'ACVAL蹲6倍6': [0, 1, 5],
    'ACVAL蹲6倍3': [0, 1, 12],
    'ACVAL蹲4倍': [0, 1, 7],
    'ACVAL蹲3倍': [0, 1, 12],
    'ACVAL蹲2倍': [0, 1, 16],
    'ACVAL蹲': [0, 1, 26],
    'ACVAL趴6倍6': [0, 1, 4],
    'ACVAL趴6倍3': [0, 1, 16],
    'ACVAL趴4倍': [0, 1, 10],
    'ACVAL趴3倍': [0, 1, 16],
    'ACVAL趴2倍': [0, 1, 20],
    'ACVAL趴': [0, 1, 33],
    'ACVAL站6倍6': [0, 1, 4],
    'ACVAL站6倍3': [0, 1, 10],
    'ACVAL站4倍': [0, 1, 5],
    'ACVAL站3倍': [0, 1, 10],
    'ACVAL站2倍': [0, 1, 13],
    'ACVAL站': [0, 1, 24],
  },
  'G36C': {
    'G36C蹲6倍6': [0, 1, 4],
    'G36C蹲6倍3': [0, 1, 9],
    'G36C蹲4倍': [0, 1, 5],
    'G36C蹲3倍': [0, 1, 9],
    'G36C蹲2倍': [0, 1, 12],
    'G36C蹲': [0, 1, 21],
    'G36C趴6倍6': [0, 1, 6],
    'G36C趴6倍3': [0, 1, 12],
    'G36C趴4倍': [0, 1, 8],
    'G36C趴3倍': [0, 1, 12],
    'G36C趴2倍': [0, 1, 16],
    'G36C趴': [0, 1, 28],
    'G36C站6倍6': [0, 1, 3],
    'G36C站6倍3': [0, 1, 7],
    'G36C站4倍': [0, 1, 4],
    'G36C站3倍': [0, 1, 7],
    'G36C站2倍': [0, 1, 10],
    'G36C站': [0, 1, 18],
  },
  'SCARL': {
    'SCARL蹲6倍6': [0, 1, 5],
    'SCARL蹲6倍3': [0, 1, 10],
    'SCARL蹲4倍': [0, 1, 6],
    'SCARL蹲3倍': [0, 1, 10],
    'SCARL蹲2倍': [0, 1, 14],
    'SCARL蹲': [0, 1, 24],
    'SCARL趴6倍6': [0, 1, 7],
    'SCARL趴6倍3': [0, 1, 14],
    'SCARL趴4倍': [0, 1, 9],
    'SCARL趴3倍': [0, 1, 14],
    'SCARL趴2倍': [0, 1, 19],
    'SCARL趴': [0, 1, 30],
    'SCARL站6倍6': [0, 1, 3],
    'SCARL站6倍3': [0, 1, 8],
    'SCARL站4倍': [0, 1, 4],
    'SCARL站3倍': [0, 1, 8],
    'SCARL站2倍': [0, 1, 11],
    'SCARL站': [0, 1, 19],
  },
  'M762': {
    'M762蹲6倍6': [0, 1, 2],
    'M762蹲6倍3': [0, 1, 5],
    'M762蹲4倍': [0, 1, 3],
    'M762蹲3倍': [0, 1, 5],
    'M762蹲2倍': [0, 1, 7],
    'M762蹲': [0, 1, 12],
    'M762趴6倍6': [0, 1, 3],
    'M762趴6倍3': [0, 1, 6],
    'M762趴4倍': [0, 1, 4],
    'M762趴3倍': [0, 1, 6],
    'M762趴2倍': [0, 1, 9],
    'M762趴': [0, 1, 14],
    'M762站6倍6': [0, 1, 2],
    'M762站6倍3': [0, 1, 4],
    'M762站4倍': [0, 1, 2],
    'M762站3倍': [0, 1, 4],
    'M762站2倍': [0, 1, 5],
    'M762站': [0, 1, 10],
  },
  'GROZA': {
    'GROZA蹲6倍6': [0, 1, 4],
    'GROZA蹲6倍3': [0, 1, 9],
    'GROZA蹲4倍': [0, 1, 5],
    'GROZA蹲3倍': [0, 1, 9],
    'GROZA蹲2倍': [0, 1, 12],
    'GROZA蹲': [0, 1, 19],
    'GROZA趴6倍6': [0, 1, 6],
    'GROZA趴6倍3': [0, 1, 12],
    'GROZA趴4倍': [0, 1, 7],
    'GROZA趴3倍': [0, 1, 12],
    'GROZA趴2倍': [0, 1, 15],
    'GROZA趴': [0, 1, 25],
    'GROZA站6倍6': [0, 1, 3],
    'GROZA站6倍3': [0, 1, 7],
    'GROZA站4倍': [0, 1, 4],
    'GROZA站3倍': [0, 1, 7],
    'GROZA站2倍': [0, 1, 10],
    'GROZA站': [0, 1, 16],
  },
  'MIGUAN': {
    'MIGUAN蹲6倍6': [0, 1, 2],
    'MIGUAN蹲6倍3': [0, 1, 5],
    'MIGUAN蹲4倍': [0, 1, 3],
    'MIGUAN蹲3倍': [0, 1, 5],
    'MIGUAN蹲2倍': [0, 1, 8],
    'MIGUAN蹲': [0, 1, 14],
    'MIGUAN趴6倍6': [0, 1, 3],
    'MIGUAN趴6倍3': [0, 1, 7],
    'MIGUAN趴4倍': [0, 1, 4],
    'MIGUAN趴3倍': [0, 1, 7],
    'MIGUAN趴2倍': [0, 1, 10],
    'MIGUAN趴': [0, 1, 17],
    'MIGUAN站6倍6': [0, 5, 2],
    'MIGUAN站6倍3': [0, 5, 4],
    'MIGUAN站4倍': [0, 1, 2],
    'MIGUAN站3倍': [0, 1, 4],
    'MIGUAN站2倍': [0, 1, 6],
    'MIGUAN站': [0, 1, 11],
  },
  'MP5K': {
    'MP5K蹲6倍6': [0, 1, 5],
    'MP5K蹲6倍3': [0, 1, 8],
    'MP5K蹲4倍': [0, 1, 6],
    'MP5K蹲3倍': [0, 1, 8],
    'MP5K蹲2倍': [0, 1, 14],
    'MP5K蹲': [0, 1, 23],
    'MP5K趴6倍6': [0, 1, 6],
    'MP5K趴6倍3': [0, 1, 12],
    'MP5K趴4倍': [0, 1, 7],
    'MP5K趴3倍': [0, 1, 12],
    'MP5K趴2倍': [0, 1, 17],
    'MP5K趴': [0, 1, 26],
    'MP5K站6倍6': [0, 1, 4],
    'MP5K站6倍3': [0, 1, 7],
    'MP5K站4倍': [0, 1, 5],
    'MP5K站3倍': [0, 1, 7],
    'MP5K站2倍': [0, 1, 10],
    'MP5K站': [0, 1, 18],
  },
  'YENIU': {
    'YENIU蹲6倍6': [0, 1, 7],
    'YENIU蹲6倍3': [0, 1, 14],
    'YENIU蹲4倍': [0, 1, 9],
    'YENIU蹲3倍': [0, 1, 14],
    'YENIU蹲2倍': [0, 1, 19],
    'YENIU蹲': [0, 1, 30],
    'YENIU趴6倍6': [0, 1, 9],
    'YENIU趴6倍3': [0, 1, 17],
    'YENIU趴4倍': [0, 1, 11],
    'YENIU趴3倍': [0, 1, 17],
    'YENIU趴2倍': [0, 1, 24],
    'YENIU趴': [0, 1, 36],
    'YENIU站6倍6': [0, 1, 6],
    'YENIU站6倍3': [0, 1, 11],
    'YENIU站4倍': [0, 1, 7],
    'YENIU站3倍': [0, 1, 11],
    'YENIU站2倍': [0, 1, 15],
    'YENIU站': [0, 1, 25],
  },
  'P90': {
    'P90蹲6倍6': [0, 1, 7],
    'P90蹲6倍3': [0, 1, 14],
    'P90蹲4倍': [0, 1, 9],
    'P90蹲3倍': [0, 1, 14],
    'P90蹲2倍': [0, 1, 19],
    'P90蹲': [0, 1, 44],
    'P90趴6倍6': [0, 1, 9],
    'P90趴6倍3': [0, 1, 17],
    'P90趴4倍': [0, 1, 11],
    'P90趴3倍': [0, 1, 17],
    'P90趴2倍': [0, 1, 24],
    'P90趴': [0, 1, 51],
    'P90站6倍6': [0, 1, 6],
    'P90站6倍3': [0, 1, 11],
    'P90站4倍': [0, 1, 7],
    'P90站3倍': [0, 1, 11],
    'P90站2倍': [0, 1, 15],
    'P90站': [0, 1, 35],
  },
  'TANGMUXUN': {
    'TANGMUXUN蹲6倍6': [0, 1, 4],
    'TANGMUXUN蹲6倍3': [0, 1, 20],
    'TANGMUXUN蹲4倍': [0, 1, 15],
    'TANGMUXUN蹲3倍': [0, 1, 20],
    'TANGMUXUN蹲2倍': [0, 1, 25],
    'TANGMUXUN蹲': [0, 1, 21],
    'TANGMUXUN趴6倍6': [0, 1, 4],
    'TANGMUXUN趴6倍3': [0, 1, 20],
    'TANGMUXUN趴4倍': [0, 1, 15],
    'TANGMUXUN趴3倍': [0, 1, 20],
    'TANGMUXUN趴2倍': [0, 1, 25],
    'TANGMUXUN趴': [0, 1, 24],
    'TANGMUXUN站6倍6': [0, 1, 4],
    'TANGMUXUN站6倍3': [0, 1, 20],
    'TANGMUXUN站4倍': [0, 1, 15],
    'TANGMUXUN站3倍': [0, 1, 20],
    'TANGMUXUN站2倍': [0, 1, 25],
    'TANGMUXUN站': [0, 1, 16],
  },
  'VECTOR': {
    'VECTOR蹲6倍6': [0, 1, 5],
    'VECTOR蹲6倍3': [0, 1, 10],
    'VECTOR蹲4倍': [0, 1, 6],
    'VECTOR蹲3倍': [0, 1, 10],
    'VECTOR蹲2倍': [0, 1, 15],
    'VECTOR蹲': [0, 1, 24],
    'VECTOR趴6倍6': [0, 1, 6],
    'VECTOR趴6倍3': [0, 1, 12],
    'VECTOR趴4倍': [0, 1, 7],
    'VECTOR趴3倍': [0, 1, 12],
    'VECTOR趴2倍': [0, 1, 18],
    'VECTOR趴': [0, 1, 27],
    'VECTOR站6倍6': [0, 1, 4],
    'VECTOR站6倍3': [0, 1, 7],
    'VECTOR站4倍': [0, 1, 5],
    'VECTOR站3倍': [0, 1, 7],
    'VECTOR站2倍': [0, 1, 11],
    'VECTOR站': [0, 1, 18],
  },
  'UMP45': {
    'UMP45蹲6倍6': [0, 1, 5],
    'UMP45蹲6倍3': [0, 1, 10],
    'UMP45蹲4倍': [0, 1, 6],
    'UMP45蹲3倍': [0, 1, 10],
    'UMP45蹲2倍': [0, 1, 15],
    'UMP45蹲': [0, 1, 25],
    'UMP45趴6倍6': [0, 1, 6],
    'UMP45趴6倍3': [0, 1, 12],
    'UMP45趴4倍': [0, 1, 8],
    'UMP45趴3倍': [0, 1, 12],
    'UMP45趴2倍': [0, 1, 18],
    'UMP45趴': [0, 1, 28],
    'UMP45站6倍6': [0, 1, 4],
    'UMP45站6倍3': [0, 1, 8],
    'UMP45站4倍': [0, 1, 5],
    'UMP45站3倍': [0, 1, 8],
    'UMP45站2倍': [0, 1, 12],
    'UMP45站': [0, 1, 20],
  },
  'UZI': {
    'UZI蹲6倍6': [0, 1, 4],
    'UZI蹲6倍3': [0, 1, 20],
    'UZI蹲4倍': [0, 1, 15],
    'UZI蹲3倍': [0, 1, 20],
    'UZI蹲2倍': [0, 1, 25],
    'UZI蹲': [0, 1, 26],
    'UZI趴6倍6': [0, 1, 4],
    'UZI趴6倍3': [0, 1, 20],
    'UZI趴4倍': [0, 1, 15],
    'UZI趴3倍': [0, 1, 20],
    'UZI趴2倍': [0, 1, 25],
    'UZI趴': [0, 1, 36],
    'UZI站6倍6': [0, 1, 4],
    'UZI站6倍3': [0, 1, 20],
    'UZI站4倍': [0, 1, 15],
    'UZI站3倍': [0, 1, 20],
    'UZI站2倍': [0, 1, 25],
    'UZI站': [0, 1, 24],
  },
  'MG3': {
    'MG3蹲6倍6': [0, 1, 11],
    'MG3蹲6倍3': [0, 1, 17],
    'MG3蹲4倍': [0, 1, 12],
    'MG3蹲3倍': [0, 1, 17],
    'MG3蹲2倍': [0, 1, 25],
    'MG3蹲': [0, 1, 44],
    'MG3趴6倍6': [0, 1, 16],
    'MG3趴6倍3': [0, 1, 31],
    'MG3趴4倍': [0, 1, 22],
    'MG3趴3倍': [0, 1, 31],
    'MG3趴2倍': [0, 1, 46],
    'MG3趴': [0, 1, 85],
    'MG3站6倍6': [0, 1, 5],
    'MG3站6倍3': [0, 1, 9],
    'MG3站4倍': [0, 1, 6],
    'MG3站3倍': [0, 1, 9],
    'MG3站2倍': [0, 1, 13],
    'MG3站': [0, 1, 23],
  },
  'M249': {
    'M249蹲6倍6': [0, 1, 9],
    'M249蹲6倍3': [0, 1, 18],
    'M249蹲4倍': [0, 1, 11],
    'M249蹲3倍': [0, 1, 18],
    'M249蹲2倍': [0, 1, 25],
    'M249蹲': [0, 1, 44],
    'M249趴6倍6': [0, 1, 30],
    'M249趴6倍3': [0, 1, 48],
    'M249趴4倍': [0, 1, 35],
    'M249趴3倍': [0, 1, 48],
    'M249趴2倍': [0, 1, 80],
    'M249趴': [0, 1, 155],
    'M249站6倍6': [0, 1, 4],
    'M249站6倍3': [0, 1, 8],
    'M249站4倍': [0, 1, 5],
    'M249站3倍': [0, 1, 8],
    'M249站2倍': [0, 1, 13],
    'M249站': [0, 1, 21],
  },
  'DP28': {
    'DP28蹲6倍6': [0, 1, 8],
    'DP28蹲6倍3': [0, 1, 16],
    'DP28蹲4倍': [0, 1, 10],
    'DP28蹲3倍': [0, 1, 16],
    'DP28蹲2倍': [0, 1, 23],
    'DP28蹲': [0, 1, 37],
    'DP28趴6倍6': [0, 1, 12],
    'DP28趴6倍3': [0, 1, 24],
    'DP28趴4倍': [0, 1, 14],
    'DP28趴3倍': [0, 1, 24],
    'DP28趴2倍': [0, 1, 33],
    'DP28趴': [0, 1, 54],
    'DP28站6倍6': [0, 1, 6],
    'DP28站6倍3': [0, 1, 12],
    'DP28站4倍': [0, 1, 7],
    'DP28站3倍': [0, 1, 12],
    'DP28站2倍': [0, 1, 17],
    'DP28站': [0, 1, 28],
  },
}

// 比 nova9 , 第三个参数 除以 1.4
const MATE_PAD_11 = {
  'M4': {
    'M4蹲6倍6': [0, 1, 4],
    'M4蹲6倍3': [0, 1, 8],
    'M4蹲4倍': [0, 1, 7],
    'M4蹲3倍': [0, 1, 8],
    'M4蹲2倍': [0, 1, 10],
    'M4蹲': [0, 1, 18],
    'M4趴6倍6': [0, 1, 5],
    'M4趴6倍3': [0, 1, 10],
    'M4趴4倍': [0, 1, 9],
    'M4趴3倍': [0, 1, 10],
    'M4趴2倍': [0, 1, 14],
    'M4趴': [0, 1, 24],
    'M4站6倍6': [0, 1, 3],
    'M4站6倍3': [0, 1, 6],
    'M4站4倍': [0, 1, 5],
    'M4站3倍': [0, 1, 6],
    'M4站2倍': [0, 1, 8],
    'M4站': [0, 1, 14],
  },
  'AKM': {
    'AKM蹲6倍6': [0, 5, 4],
    'AKM蹲6倍3': [0, 5, 7],
    'AKM蹲4倍': [0, 1, 4],
    'AKM蹲3倍': [0, 1, 7],
    'AKM蹲2倍': [0, 1, 9],
    'AKM蹲': [0, 1, 15],
    'AKM趴6倍6': [0, 1, 5],
    'AKM趴6倍3': [0, 1, 10],
    'AKM趴4倍': [0, 1, 6],
    'AKM趴3倍': [0, 1, 10],
    'AKM趴2倍': [0, 1, 13],
    'AKM趴': [0, 1, 22],
    'AKM站6倍6': [0, 1, 2],
    'AKM站6倍3': [0, 1, 5],
    'AKM站4倍': [0, 2, 3],
    'AKM站3倍': [0, 1, 5],
    'AKM站2倍': [0, 1, 7],
    'AKM站': [0, 1, 13],
  },
  'QBZ': {
    'QBZ蹲6倍6': [0, 1, 4],
    'QBZ蹲6倍3': [0, 1, 8],
    'QBZ蹲4倍': [0, 1, 5],
    'QBZ蹲3倍': [0, 1, 8],
    'QBZ蹲2倍': [0, 1, 13],
    'QBZ蹲': [0, 1, 22],
    'QBZ趴6倍6': [0, 1, 6],
    'QBZ趴6倍3': [0, 1, 11],
    'QBZ趴4倍': [0, 1, 8],
    'QBZ趴3倍': [0, 1, 11],
    'QBZ趴2倍': [0, 1, 17],
    'QBZ趴': [0, 1, 29],
    'QBZ站6倍6': [0, 1, 3],
    'QBZ站6倍3': [0, 1, 7],
    'QBZ站4倍': [0, 1, 4],
    'QBZ站3倍': [0, 1, 7],
    'QBZ站2倍': [0, 1, 10],
    'QBZ站': [0, 1, 17],
  },
  'AUG': {
    'AUG蹲6倍6': [0, 1, 5],
    'AUG蹲6倍3': [0, 1, 10],
    'AUG蹲4倍': [0, 1, 6],
    'AUG蹲3倍': [0, 1, 10],
    'AUG蹲2倍': [0, 1, 14],
    'AUG蹲': [0, 1, 22],
    'AUG趴6倍6': [0, 1, 6],
    'AUG趴6倍3': [0, 1, 13],
    'AUG趴4倍': [0, 1, 8],
    'AUG趴3倍': [0, 1, 13],
    'AUG趴2倍': [0, 1, 17],
    'AUG趴': [0, 1, 29],
    'AUG站6倍6': [0, 1, 4],
    'AUG站6倍3': [0, 1, 8],
    'AUG站4倍': [0, 1, 5],
    'AUG站3倍': [0, 1, 8],
    'AUG站2倍': [0, 1, 11],
    'AUG站': [0, 1, 19],
  },
  'ACVAL': {
    'ACVAL蹲6倍6': [0, 1, 5],
    'ACVAL蹲6倍3': [0, 1, 12],
    'ACVAL蹲4倍': [0, 1, 7],
    'ACVAL蹲3倍': [0, 1, 12],
    'ACVAL蹲2倍': [0, 1, 16],
    'ACVAL蹲': [0, 1, 26],
    'ACVAL趴6倍6': [0, 1, 4],
    'ACVAL趴6倍3': [0, 1, 16],
    'ACVAL趴4倍': [0, 1, 10],
    'ACVAL趴3倍': [0, 1, 16],
    'ACVAL趴2倍': [0, 1, 20],
    'ACVAL趴': [0, 1, 33],
    'ACVAL站6倍6': [0, 1, 4],
    'ACVAL站6倍3': [0, 1, 10],
    'ACVAL站4倍': [0, 1, 5],
    'ACVAL站3倍': [0, 1, 10],
    'ACVAL站2倍': [0, 1, 13],
    'ACVAL站': [0, 1, 24],
  },
  'G36C': {
    'G36C蹲6倍6': [0, 1, 4],
    'G36C蹲6倍3': [0, 1, 9],
    'G36C蹲4倍': [0, 1, 5],
    'G36C蹲3倍': [0, 1, 9],
    'G36C蹲2倍': [0, 1, 12],
    'G36C蹲': [0, 1, 21],
    'G36C趴6倍6': [0, 1, 6],
    'G36C趴6倍3': [0, 1, 12],
    'G36C趴4倍': [0, 1, 8],
    'G36C趴3倍': [0, 1, 12],
    'G36C趴2倍': [0, 1, 16],
    'G36C趴': [0, 1, 28],
    'G36C站6倍6': [0, 1, 3],
    'G36C站6倍3': [0, 1, 7],
    'G36C站4倍': [0, 1, 4],
    'G36C站3倍': [0, 1, 7],
    'G36C站2倍': [0, 1, 10],
    'G36C站': [0, 1, 18],
  },
  'SCARL': {
    'SCARL蹲6倍6': [0, 1, 5],
    'SCARL蹲6倍3': [0, 1, 10],
    'SCARL蹲4倍': [0, 1, 6],
    'SCARL蹲3倍': [0, 1, 10],
    'SCARL蹲2倍': [0, 1, 14],
    'SCARL蹲': [0, 1, 24],
    'SCARL趴6倍6': [0, 1, 7],
    'SCARL趴6倍3': [0, 1, 14],
    'SCARL趴4倍': [0, 1, 9],
    'SCARL趴3倍': [0, 1, 14],
    'SCARL趴2倍': [0, 1, 19],
    'SCARL趴': [0, 1, 30],
    'SCARL站6倍6': [0, 1, 3],
    'SCARL站6倍3': [0, 1, 8],
    'SCARL站4倍': [0, 1, 4],
    'SCARL站3倍': [0, 1, 8],
    'SCARL站2倍': [0, 1, 11],
    'SCARL站': [0, 1, 19],
  },
  'M762': {
    'M762蹲6倍6': [0, 1, 2],
    'M762蹲6倍3': [0, 1, 5],
    'M762蹲4倍': [0, 1, 3],
    'M762蹲3倍': [0, 1, 5],
    'M762蹲2倍': [0, 1, 7],
    'M762蹲': [0, 1, 12],
    'M762趴6倍6': [0, 1, 3],
    'M762趴6倍3': [0, 1, 6],
    'M762趴4倍': [0, 1, 4],
    'M762趴3倍': [0, 1, 6],
    'M762趴2倍': [0, 1, 9],
    'M762趴': [0, 1, 14],
    'M762站6倍6': [0, 1, 2],
    'M762站6倍3': [0, 1, 4],
    'M762站4倍': [0, 1, 2],
    'M762站3倍': [0, 1, 4],
    'M762站2倍': [0, 1, 5],
    'M762站': [0, 1, 10],
  },
  'GROZA': {
    'GROZA蹲6倍6': [0, 1, 4],
    'GROZA蹲6倍3': [0, 1, 9],
    'GROZA蹲4倍': [0, 1, 5],
    'GROZA蹲3倍': [0, 1, 9],
    'GROZA蹲2倍': [0, 1, 12],
    'GROZA蹲': [0, 1, 19],
    'GROZA趴6倍6': [0, 1, 6],
    'GROZA趴6倍3': [0, 1, 12],
    'GROZA趴4倍': [0, 1, 7],
    'GROZA趴3倍': [0, 1, 12],
    'GROZA趴2倍': [0, 1, 15],
    'GROZA趴': [0, 1, 25],
    'GROZA站6倍6': [0, 1, 3],
    'GROZA站6倍3': [0, 1, 7],
    'GROZA站4倍': [0, 1, 4],
    'GROZA站3倍': [0, 1, 7],
    'GROZA站2倍': [0, 1, 10],
    'GROZA站': [0, 1, 16],
  },
  'MIGUAN': {
    'MIGUAN蹲6倍6': [0, 1, 2],
    'MIGUAN蹲6倍3': [0, 1, 5],
    'MIGUAN蹲4倍': [0, 1, 3],
    'MIGUAN蹲3倍': [0, 1, 5],
    'MIGUAN蹲2倍': [0, 1, 8],
    'MIGUAN蹲': [0, 1, 14],
    'MIGUAN趴6倍6': [0, 1, 3],
    'MIGUAN趴6倍3': [0, 1, 7],
    'MIGUAN趴4倍': [0, 1, 4],
    'MIGUAN趴3倍': [0, 1, 7],
    'MIGUAN趴2倍': [0, 1, 10],
    'MIGUAN趴': [0, 1, 17],
    'MIGUAN站6倍6': [0, 5, 2],
    'MIGUAN站6倍3': [0, 5, 4],
    'MIGUAN站4倍': [0, 1, 2],
    'MIGUAN站3倍': [0, 1, 4],
    'MIGUAN站2倍': [0, 1, 6],
    'MIGUAN站': [0, 1, 11],
  },
  'MP5K': {
    'MP5K蹲6倍6': [0, 1, 5],
    'MP5K蹲6倍3': [0, 1, 8],
    'MP5K蹲4倍': [0, 1, 6],
    'MP5K蹲3倍': [0, 1, 8],
    'MP5K蹲2倍': [0, 1, 14],
    'MP5K蹲': [0, 1, 23],
    'MP5K趴6倍6': [0, 1, 6],
    'MP5K趴6倍3': [0, 1, 12],
    'MP5K趴4倍': [0, 1, 7],
    'MP5K趴3倍': [0, 1, 12],
    'MP5K趴2倍': [0, 1, 17],
    'MP5K趴': [0, 1, 26],
    'MP5K站6倍6': [0, 1, 4],
    'MP5K站6倍3': [0, 1, 7],
    'MP5K站4倍': [0, 1, 5],
    'MP5K站3倍': [0, 1, 7],
    'MP5K站2倍': [0, 1, 10],
    'MP5K站': [0, 1, 18],
  },
  'YENIU': {
    'YENIU蹲6倍6': [0, 1, 7],
    'YENIU蹲6倍3': [0, 1, 14],
    'YENIU蹲4倍': [0, 1, 9],
    'YENIU蹲3倍': [0, 1, 14],
    'YENIU蹲2倍': [0, 1, 19],
    'YENIU蹲': [0, 1, 30],
    'YENIU趴6倍6': [0, 1, 9],
    'YENIU趴6倍3': [0, 1, 17],
    'YENIU趴4倍': [0, 1, 11],
    'YENIU趴3倍': [0, 1, 17],
    'YENIU趴2倍': [0, 1, 24],
    'YENIU趴': [0, 1, 36],
    'YENIU站6倍6': [0, 1, 6],
    'YENIU站6倍3': [0, 1, 11],
    'YENIU站4倍': [0, 1, 7],
    'YENIU站3倍': [0, 1, 11],
    'YENIU站2倍': [0, 1, 15],
    'YENIU站': [0, 1, 25],
  },
  'P90': {
    'P90蹲6倍6': [0, 1, 7],
    'P90蹲6倍3': [0, 1, 14],
    'P90蹲4倍': [0, 1, 9],
    'P90蹲3倍': [0, 1, 14],
    'P90蹲2倍': [0, 1, 19],
    'P90蹲': [0, 1, 44],
    'P90趴6倍6': [0, 1, 9],
    'P90趴6倍3': [0, 1, 17],
    'P90趴4倍': [0, 1, 11],
    'P90趴3倍': [0, 1, 17],
    'P90趴2倍': [0, 1, 24],
    'P90趴': [0, 1, 51],
    'P90站6倍6': [0, 1, 6],
    'P90站6倍3': [0, 1, 11],
    'P90站4倍': [0, 1, 7],
    'P90站3倍': [0, 1, 11],
    'P90站2倍': [0, 1, 15],
    'P90站': [0, 1, 35],
  },
  'TANGMUXUN': {
    'TANGMUXUN蹲6倍6': [0, 1, 4],
    'TANGMUXUN蹲6倍3': [0, 1, 20],
    'TANGMUXUN蹲4倍': [0, 1, 15],
    'TANGMUXUN蹲3倍': [0, 1, 20],
    'TANGMUXUN蹲2倍': [0, 1, 25],
    'TANGMUXUN蹲': [0, 1, 21],
    'TANGMUXUN趴6倍6': [0, 1, 4],
    'TANGMUXUN趴6倍3': [0, 1, 20],
    'TANGMUXUN趴4倍': [0, 1, 15],
    'TANGMUXUN趴3倍': [0, 1, 20],
    'TANGMUXUN趴2倍': [0, 1, 25],
    'TANGMUXUN趴': [0, 1, 24],
    'TANGMUXUN站6倍6': [0, 1, 4],
    'TANGMUXUN站6倍3': [0, 1, 20],
    'TANGMUXUN站4倍': [0, 1, 15],
    'TANGMUXUN站3倍': [0, 1, 20],
    'TANGMUXUN站2倍': [0, 1, 25],
    'TANGMUXUN站': [0, 1, 16],
  },
  'VECTOR': {
    'VECTOR蹲6倍6': [0, 1, 5],
    'VECTOR蹲6倍3': [0, 1, 10],
    'VECTOR蹲4倍': [0, 1, 6],
    'VECTOR蹲3倍': [0, 1, 10],
    'VECTOR蹲2倍': [0, 1, 15],
    'VECTOR蹲': [0, 1, 24],
    'VECTOR趴6倍6': [0, 1, 6],
    'VECTOR趴6倍3': [0, 1, 12],
    'VECTOR趴4倍': [0, 1, 7],
    'VECTOR趴3倍': [0, 1, 12],
    'VECTOR趴2倍': [0, 1, 18],
    'VECTOR趴': [0, 1, 27],
    'VECTOR站6倍6': [0, 1, 4],
    'VECTOR站6倍3': [0, 1, 7],
    'VECTOR站4倍': [0, 1, 5],
    'VECTOR站3倍': [0, 1, 7],
    'VECTOR站2倍': [0, 1, 11],
    'VECTOR站': [0, 1, 18],
  },
  'UMP45': {
    'UMP45蹲6倍6': [0, 1, 5],
    'UMP45蹲6倍3': [0, 1, 10],
    'UMP45蹲4倍': [0, 1, 6],
    'UMP45蹲3倍': [0, 1, 10],
    'UMP45蹲2倍': [0, 1, 15],
    'UMP45蹲': [0, 1, 25],
    'UMP45趴6倍6': [0, 1, 6],
    'UMP45趴6倍3': [0, 1, 12],
    'UMP45趴4倍': [0, 1, 8],
    'UMP45趴3倍': [0, 1, 12],
    'UMP45趴2倍': [0, 1, 18],
    'UMP45趴': [0, 1, 28],
    'UMP45站6倍6': [0, 1, 4],
    'UMP45站6倍3': [0, 1, 8],
    'UMP45站4倍': [0, 1, 5],
    'UMP45站3倍': [0, 1, 8],
    'UMP45站2倍': [0, 1, 12],
    'UMP45站': [0, 1, 20],
  },
  'UZI': {
    'UZI蹲6倍6': [0, 1, 4],
    'UZI蹲6倍3': [0, 1, 20],
    'UZI蹲4倍': [0, 1, 15],
    'UZI蹲3倍': [0, 1, 20],
    'UZI蹲2倍': [0, 1, 25],
    'UZI蹲': [0, 1, 26],
    'UZI趴6倍6': [0, 1, 4],
    'UZI趴6倍3': [0, 1, 20],
    'UZI趴4倍': [0, 1, 15],
    'UZI趴3倍': [0, 1, 20],
    'UZI趴2倍': [0, 1, 25],
    'UZI趴': [0, 1, 36],
    'UZI站6倍6': [0, 1, 4],
    'UZI站6倍3': [0, 1, 20],
    'UZI站4倍': [0, 1, 15],
    'UZI站3倍': [0, 1, 20],
    'UZI站2倍': [0, 1, 25],
    'UZI站': [0, 1, 24],
  },
  'MG3': {
    'MG3蹲6倍6': [0, 1, 11],
    'MG3蹲6倍3': [0, 1, 17],
    'MG3蹲4倍': [0, 1, 12],
    'MG3蹲3倍': [0, 1, 17],
    'MG3蹲2倍': [0, 1, 25],
    'MG3蹲': [0, 1, 44],
    'MG3趴6倍6': [0, 1, 16],
    'MG3趴6倍3': [0, 1, 31],
    'MG3趴4倍': [0, 1, 22],
    'MG3趴3倍': [0, 1, 31],
    'MG3趴2倍': [0, 1, 46],
    'MG3趴': [0, 1, 85],
    'MG3站6倍6': [0, 1, 5],
    'MG3站6倍3': [0, 1, 9],
    'MG3站4倍': [0, 1, 6],
    'MG3站3倍': [0, 1, 9],
    'MG3站2倍': [0, 1, 13],
    'MG3站': [0, 1, 23],
  },
  'M249': {
    'M249蹲6倍6': [0, 1, 9],
    'M249蹲6倍3': [0, 1, 18],
    'M249蹲4倍': [0, 1, 11],
    'M249蹲3倍': [0, 1, 18],
    'M249蹲2倍': [0, 1, 25],
    'M249蹲': [0, 1, 44],
    'M249趴6倍6': [0, 1, 30],
    'M249趴6倍3': [0, 1, 48],
    'M249趴4倍': [0, 1, 35],
    'M249趴3倍': [0, 1, 48],
    'M249趴2倍': [0, 1, 80],
    'M249趴': [0, 1, 155],
    'M249站6倍6': [0, 1, 4],
    'M249站6倍3': [0, 1, 8],
    'M249站4倍': [0, 1, 5],
    'M249站3倍': [0, 1, 8],
    'M249站2倍': [0, 1, 13],
    'M249站': [0, 1, 21],
  },
  'DP28': {
    'DP28蹲6倍6': [0, 1, 8],
    'DP28蹲6倍3': [0, 1, 16],
    'DP28蹲4倍': [0, 1, 10],
    'DP28蹲3倍': [0, 1, 16],
    'DP28蹲2倍': [0, 1, 23],
    'DP28蹲': [0, 1, 37],
    'DP28趴6倍6': [0, 1, 12],
    'DP28趴6倍3': [0, 1, 24],
    'DP28趴4倍': [0, 1, 14],
    'DP28趴3倍': [0, 1, 24],
    'DP28趴2倍': [0, 1, 33],
    'DP28趴': [0, 1, 54],
    'DP28站6倍6': [0, 1, 6],
    'DP28站6倍3': [0, 1, 12],
    'DP28站4倍': [0, 1, 7],
    'DP28站3倍': [0, 1, 12],
    'DP28站2倍': [0, 1, 17],
    'DP28站': [0, 1, 28],
  },
}

const gunPressArgs =/* replace start */ MATE_PAD_11 /* replace end */

/**
 * 获取压强配置
 *
 * @param gunName
 * @param posture
 * @param mirror
 * @return {{ x: number, y: number, delay: number}|null}
 */
function getGunPressArgs(gunName, posture, mirror) {
  const argsMap = gunPressArgs[gunName];

  if (!argsMap) {
    return null;
  }

  const key = gunName + posture + mirror;

  const args = argsMap[key];

  if (!args) {
    return null;
  }

  const [ x, y, delay ] = args;

  return { x, y, delay };
}

export default {
  getGunPressArgs,
  gunPressArgs,
}
