//用户登录接口携带参数的ts类型

import type { RespData } from '@/api/common/types.ts'

export interface LoginFormData {
  username: string
  password: string
}
export interface LoginResult {
  token: string
}
export interface UserInfoResult {
  routes: string[]
  buttons: string[]
  roles: string[]
  name: string
  avatar: string
}

export type LoginRespData = RespData<LoginResult>
export type UserInfoRespData = RespData<UserInfoResult>
