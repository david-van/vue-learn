import request from '@/utils/request.ts'
import type { LoginFormData, LoginResult } from '@/api/user/types.ts'

enum URL {
  LOGIN_URL = '/user/login',
  USER_INFO_URL = '/user/info',
}

export const reqLogin = (params: LoginFormData) => {
  return request.post<LoginResult>(URL.LOGIN_URL, params).then((resp) => {
    return resp.data
  })
}
