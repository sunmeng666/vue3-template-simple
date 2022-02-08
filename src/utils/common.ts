import * as permissions from '@/config/permissions'
import { transformParams } from '@/utils/index'
import moment from 'moment'
import type { App } from 'vue'
import { message, Modal } from 'ant-design-vue'
import dictionary from '@/config/dictionary'
import settings from '@/config/settings'
import { AppContext } from '@vue/runtime-dom'

/** @name 数组转树 */
declare type ArrayToTreeOptions = {
  idField: string,
  parentIdField: string
}
declare type ArrayToTree = (list: any[], options?: ArrayToTreeOptions) => any[]
const $arrayToTree: ArrayToTree = (list: any[], options: ArrayToTreeOptions = { idField: 'id', parentIdField: 'ownerOrganizationId' }) => {
  const handleFn = (list: any[], parentId: any) => {
    return list
      .filter((item) => item[options.parentIdField] === parentId)
      .map((item) => {
        const currentNode = {
          ...item,
          children: handleFn(list, item[options.idField])
        }
        if (!currentNode.children.length) {
          delete currentNode.children
        }
        return currentNode
      })
  }
  return handleFn(list, null)
}

const useCommon = {
  $moment: moment,
  $modal: Modal,
  $config: {
    empty: settings.empty
  },
  $arrayToTree,
  $findRoute(list: any, id: any, parentIdField = 'ownerOrganizationId', output = 'id') {
    const routeArr: any[] = []
    const handleFn = (list: any[], id: any): any => {
      list.forEach((item: any) => {
        if (item.id === id && id != null) {
          routeArr.unshift(item[output])
          handleFn(list, item[parentIdField])
        }
      })
    }
    handleFn(list, id)
    return routeArr
  },
  $getDictionary(type: string, options = {}) {
    const { excludeCode = [] }: any = options
    const typeGroup = type.split('.')
    let obj = dictionary
    typeGroup.forEach((type) => {
      if (obj[type]) {
        obj = obj[type]
      }
    })
    let keyList = Object.keys(obj)
    if (excludeCode.length) {
      keyList = Object.keys(obj).filter(ele => !excludeCode.includes(ele))
    }

    return keyList.map(item => {
      return {
        value: item,
        label: obj[item] && obj[item].zh
      }
    })
  },
  $getDictionaryText(type: any, code, name = '其他') {
    if (code === 'others' && name) {
      return name
    }
    const typeGroup = type.split('.')
    let text = ''
    let obj = dictionary
    typeGroup.forEach((item) => {
      if (obj[item]) {
        obj = obj[item]
      }
    })
    try {
      text = obj[code].zh
    } catch (e) {
    }
    return text || code
  },
  $downloadTemplate(fileName: string, route = '/static/excel', ext = 'xlsx') {
    const a = document.createElement('a')
    a.setAttribute('href', `${route}/${fileName}.${ext}`)
    a.click()
  },
  $timestamp(date: string) {
    if (!date) {
      return ''
    }
    return Date.parse(date)
  },
  $timestampStart(date: Date | string) {
    if (!date) {
      return ''
    }
    return Date.parse(moment(date).format('YYYY/MM/DD 00:00:00'))
  },
  $timestampEnd(date: Date | string) {
    if (!date) {
      return ''
    }
    return Date.parse(moment(date).format('YYYY/MM/DD 23:59:59'))
  },
  $date(date: Date | string) {
    if (!date) {
      return ''
    }
    return moment(date).format('YYYY-MM-DD')
  },
  $datetime(date: Date | string) {
    if (!date) {
      return ''
    }
    return moment(date).format('YYYY-MM-DD HH:mm:ss')
  },
  // $getDictionary () {
  //   console.log(dictionary)
  // },
  $copyText: (text) => {
    const textString = text.toString()
    let input: HTMLElement | any = document.querySelector('#copy-input')

    // input自带的select()方法在苹果端无法进行选择，自己实现
    if (!input) {
      input = document.createElement('input')
      input.id = 'copy-input'
      input.setAttribute('readOnly', 'disabled') // 防止ios聚焦触发键盘事件
      input.style.position = 'absolute'
      input.style.left = '-1000px'
      input.style.zIndex = '-1000'
      document.body.appendChild(input)
    }

    input.value = textString

    const selectText = function(textbox, startIndex, stopIndex) {
      if (textbox.createTextRange) {
        const range = textbox.createTextRange()
        range.collapse(true)
        range.moveStart('character', startIndex) // 起始光标
        range.moveEnd('character', stopIndex - startIndex)// 结束光标
        range.select() // 不兼容苹果
      } else {
        textbox.setSelectionRange(startIndex, stopIndex)
        textbox.focus()
        message.info('复制成功')
      }
    }

    selectText(input, 0, textString.length)

    // TODO IOS UIWebView禁用复制命令
    if (document.execCommand('copy')) {
      document.execCommand('copy')
    } else {
      message.info('您当前的系统版本暂不支持剪贴功能')
      console.log('不兼容')
    }

    input.blur()
  },
  $access(permissionName: string) {
    const permissionId = permissions[permissionName].id
    const userPermissions = JSON.parse(window.localStorage.getItem('ROLE_PERMISSIONS_LIST') || '[]')
    return userPermissions.includes(permissionId)
  },
  $getPicture(params: any) {
    params = transformParams(params)
    console.log(params)
    return `${import.meta.env.VITE_PICTURE_URL}?${params}`
  }
}

export function setupCommon(app: App<Element>) {
  Object.keys(useCommon).forEach((key: string) => {
    app.config.globalProperties[key] = useCommon[key]
  })
  app.config.globalProperties.$testFn = (a: any): void => {
    console.log(a)
  }
}
