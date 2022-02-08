const sensorType: any = {
  vibration: {
    zh: '震动',
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
const createSensorType = (types: string[]): any => {
   const ret = {}
   types.forEach(key => {
    ret[key] = sensorType[key]
   })
   return ret
}
const dictionary = {
  version: '1.0.0',
  equipmentType: {
    type1: {
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
    },
    type2: {
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
        zh: '往复式压缩机',
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
        zh: '离心式通风机',
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
      }
    },
    type3: {
      '001001001': {
        zh: '单级或两级悬臂泵',
        en: 'Cantilever'
      },
      '001001002': {
        zh: '双吸离心泵',
        en: ' Double suction centrifugal pump'
      },
      '001001003': {
        zh: '多级离心泵',
        en: ' Multi-stage centrifugal Pump'
      },
      '001001004': {
        zh: '立式离心泵',
        en: ' Vertical centrifugal pump'
      },
      '001001005': {
        zh: '立式双吸泵',
        en: ' Vertical dual suction pump'
      },
      '001001006': {
        zh: '长轴深井泵',
        en: 'Deep-well pump'
      },
      '001002001': {
        zh: '活塞泵',
        en: ' Piston pumps'
      },
      '002001001': {
        zh: '低压异步电动机',
        en: 'Asynchronous motor'
      },
      '002001002': {
        zh: '高压异步电动机',
        en: 'Asynchronous motor'
      },
      '002001003': {
        zh: '永磁同步电动机',
        en: 'Synchronized motor'
      },
      '002001004': {
        zh: '直流电动机',
        en: ' DC motor'
      },
      '002002001': {
        zh: '异步发电机',
        en: ''
      },
      '002002002': {
        zh: '同步发电机',
        en: ''
      },
      '002002003': {
        zh: '直流发电机',
        en: ''
      },
      '002002004': {
        zh: '汽轮发电机',
        en: ''
      },
      '002002005': {
        zh: '水轮发电机',
        en: ''
      },
      '002002006': {
        zh: '柴油发电机',
        en: ''
      }
    }
  },
  aiType: {
    '001': {
      zh: '启停分析',
      en: 'operating'
    },
    '002': {
      zh: '异常预警',
      en: 'anomaly'
    },
    '003': {
      zh: '工况分析',
      en: 'condition'
    },
    '004': {
      zh: '转速预测',
      en: 'edgeOperating'
    },
    '005': {
      zh: '零件寿命预测',
      en: 'edgeAnomaly'
    },
    '006': {
      zh: '系统故障定位',
      en: 'runningState'
    }
  },
  sensorType: {
    '001001': createSensorType(['vibration', 'temperature', 'flow', 'pressure', 'speed', 'voice']),
    '002001': createSensorType(['vibration', 'temperature', 'electricCurrent', 'voltage', 'magnetism', 'speed', 'voice'])
  }
}

export default dictionary
