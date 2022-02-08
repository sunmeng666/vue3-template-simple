import { LoginParameters } from '@/types/login'
import { transformParams } from '@/utils'
import request from '@/utils/request'
/** @module 账户管理 */
export function login(data: LoginParameters): Promise<any> {
  return request({
    url: '/account/login',
    data,
    method: 'POST'
  })
}

export function logout(): Promise<any> {
  return new Promise((resolve) => {
    resolve({
      code: '0000',
      msg: '成功',
      data: null
    })
  })
}

export function demoUpload (data: any): Promise<any> {
  return request({
    url: '/equipment/detail',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data
  })
}

export function demoGet(params) {
  params = transformParams(params)
  return `${import.meta.env.VITE_BASE_URL}/file/get?${params}`
}
