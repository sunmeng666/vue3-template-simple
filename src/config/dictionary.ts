const equipmentType1 = {
  '001': {
    zh: '泵机',
    en: 'Pump'
  },
  '002': {
    zh: '电机',
    en: 'Motor'
  },
  '003': {
    zh: '压缩机',
    en: 'Compressor'
  },
  '004': {
    zh: '通风机',
    en: 'Ventilator'
  },
  '005': {
    zh: '汽轮机',
    en: 'Turbine'
  }
}
const equipmentType2 = {
  '001001': {
    zh: '离心式泵机',
    en: ' Rotating pump'
  },
  '001002': {
    zh: '往复式泵机',
    en: ' Reciprocating pumps'
  },
  '001003': {
    zh: '轴流泵',
    en: ' Vertical mixing/axial pumps'
  },
  '001004': {
    zh: '螺杆泵',
    en: ' Screw pump'
  },
  '001005': {
    zh: '齿轮泵/划片泵',
    en: ' pump/scratch Pump'
  },
  '002001': {
    zh: '异步交流电机',
    en: ' Motors'
  },
  '002002': {
    zh: '发电机',
    en: ' Generator'
  },
  '002003': {
    zh: '电动机',
    en: ''
  },
  '003001': {
    zh: '离心式风机',
    en: ' Reciprocating'
  },
  '003002': {
    zh: '回转压缩机',
    en: 'Rotating'
  },
  '003003': {
    zh: '透平压缩机',
    en: ' Turbine'
  },
  '003004': {
    zh: '罗茨风机',
    en: ' Roots Blower'
  },
  '004001': {
    zh: '滚动轴承',
    en: ' Centrifugal'
  },
  '004002': {
    zh: '轴流式通风机',
    en: 'Axial-flow'
  },
  '004003': {
    zh: '混流式通风机',
    en: 'Mixed-flow'
  },
  '004004': {
    zh: '多级通风机',
    en: 'Multi-stage'
  },
  '004005': {
    zh: '横流式通风机',
    en: 'Cross-flow'
  },
  '004006': {
    zh: '环形通风机',
    en: 'Ring-shaped'
  },
  '004007': {
    zh: '筒形离心式通风机',
    en: ' tubular centrifugal'
  },
  '004008': {
    zh: '分路通风机',
    en: ' bifurcated'
  },
  '005001': {
    zh: '液压系统',
    en: ' bifurcated'
  }
}
// const aiType = {
//   '001': {
//     zh: '启停分析',
//     en: 'operating'
//   },
//   '002': {
//     zh: '异常预警',
//     en: 'anomaly'
//   },
//   '003': {
//     zh: '工况分析',
//     en: 'condition'
//   },
//   '004': {
//     zh: '转速预测',
//     en: 'edgeOperating'
//   },
//   '005': {
//     zh: '零件寿命预测',
//     en: 'edgeAnomaly'
//   },
//   '006': {
//     zh: '系统故障定位',
//     en: 'runningState'
//   }
// }
const sensorType: any = {
  vibration: {
    zh: '振动',
    en: 'vibration'
  },
  temperature: {
    zh: '温度',
    en: 'temperature'
  },
  flow: {
    zh: '流量',
    en: 'flow'
  },
  pressure: {
    zh: '压力',
    en: 'pressure'
  },
  speed: {
    zh: '转速',
    en: 'speed'
  },
  voice: {
    zh: '声音',
    en: 'voice'
  },
  electricCurrent: {
    zh: '电流',
    en: 'electricCurrent'
  },
  voltage: {
    zh: '电压',
    en: 'voltage'
  },
  magnetism: {
    zh: '磁',
    en: 'magnetism'
  },
  liquidLevel: {
    zh: '液位',
    en: 'liquidLevel'
  },
  leakage: {
    zh: '泄漏量',
    en: 'leakage'
  },
  pollutionDegree: {
    zh: '污染度',
    en: 'pollutionDegree'
  }

}

const aiType: any = {
  EA: {
    zh: '设备算法',
    en: ''
  },
  PA: {
    zh: '生产算法',
    en: ''
  },
  VA: {
    zh: '视觉算法',
    en: ''
  }
}

const eaType: any = {
  aiType: {
    '01': {
      zh: '异常诊断算法',
      en: ' '
    },
    '02': {
      zh: '诊断图谱工具',
      en: ' '
    }
  },
  aiSubType: {
    '0201': {
      zh: '诊断图谱',
      en: ' '
    },
    '0202': {
      zh: '分析工具',
      en: ' '
    }
  },
  equipmentType: {
    '001001': {
      zh: '离心式泵机',
      en: ' Rotating pump'
    },
    '002001': {
      zh: '异步电机',
      en: ' Motors'
    },
    '003001': {
      zh: '离心式风机',
      en: ' Rotating fan'
    },
    '004002': {
      zh: '平行齿轮箱',
      en: ' Gear case'
    }
  }
}
const paType: any = {
  aiType: {
    '01': {
      zh: '产线监测',
      en: ' '
    },
    '02': {
      zh: '产品质检',
      en: ' '
    }
  },
  aiSubType: {
    '0101': {
      zh: '异常检测',
      en: ' '
    },
    '0102': {
      zh: '根因分析',
      en: ''
    }
  },
  equipmentType: {
    '001001': {
      zh: '离心式泵机',
      en: ' Rotating pump'
    },
    '002001': {
      zh: '异步电机',
      en: ' Motors'
    },
    '004002': {
      zh: '平行齿轮箱',
      en: ' Gear case'
    },
    '003001': {
      zh: '离心式风机',
      en: ' Rotating fan'
    }
  }
}
const vaType: any = {
  aiType: {
    '01': {
      zh: '人脸识别',
      en: ' '
    },
    '02': {
      zh: '行为识别',
      en: ' '
    },
    '03': {
      zh: '目标检测',
      en: ' '
    }
  },
  tradeType: {
    '01': {
      zh: '智慧工地',
      en: ' '
    },
    '02': {
      zh: '火力发电',
      en: ' '
    },
    '03': {
      zh: '电网',
      en: ' '
    },
    '04': {
      zh: '加油站',
      en: ' '
    }
  }
}

const galleryType: any = {
  '01': {
    zh: '人脸识别',
    en: ''
  },
  '02': {
    zh: '电子围栏',
    en: ''
  }
}
const cameraStatus: any = {
  0: {
    zh: '离线',
    en: ''
  },
  1: {
    zh: '在线',
    en: ''
  }
}

const dictionary = {
  version: '1.0.0',
  aiType: createJson(aiType),
  eaType: createJson(eaType),
  paType: createJson(paType),
  vaType: createJson(vaType),
  galleryType: createJson(galleryType),
  cameraStatus: createJson(cameraStatus)
}

function createJson(source: any, types?: string[]): any {
  const ret = {}
  if (!types) {
    return source
  }
  types.forEach(key => {
    ret[key] = source[key]
  })
  return ret
}

export default dictionary
