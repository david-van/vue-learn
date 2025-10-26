import axios, { type AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import type { RespData } from '@/api/common/types.ts'
//创建axios实例
const request = axios.create({
  baseURL: '/api',
  timeout: 5000,
})
//请求拦截器
request.interceptors.request.use((config) => {
  return config
})

function msgConvert(status: number) {
  let msg = ''
  switch (status) {
    case 401:
      msg = 'token过期'
      break
    case 403:
      msg = '无权访问'
      break
    case 404:
      msg = '请求地址错误'
      break
    case 500:
      msg = '服务器出现问题'
      break
    default:
      msg = '无网络'
  }
  return msg
}

//响应拦截器
request.interceptors.response.use(
  <T>(response: AxiosResponse<RespData<T>>) => {
    const resp = response.data
    if (resp.code !== 200) {
      ElMessage.error(resp.message || '请求失败')
      return Promise.reject(resp)
    }
    // ✅ 返回真正的数据部分，调用方拿到的就是 data，而不是整个包裹对象
    return resp as T
  },
  (error) => {
    //处理网络错误
    let msg = ''
    const status = error.response.status
    msg = msgConvert(status)
    ElMessage({
      type: 'error',
      message: msg,
    })
    return Promise.reject(error)
  },
)
export default request
