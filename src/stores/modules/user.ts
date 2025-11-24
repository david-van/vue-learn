import { acceptHMRUpdate, defineStore } from 'pinia'
import type { LoginFormData } from '@/api/user/types.ts'
import { reqLogin } from '@/api/user'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token.ts'
import { constantRoute } from '@/router/routes.ts'
import type { UserState } from '@/stores/modules/types/type.ts'

const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoute: constantRoute,
    }
  },
  getters: {},
  actions: {
    async userLogin(data: LoginFormData) {
      try {
        const result = await reqLogin(data)
        console.log('result is %O', result)
        this.token = result.token
        SET_TOKEN(this.token)
      } catch (error) {
        console.log('error is %O', error)
        // 登录失败时清除 token
        REMOVE_TOKEN()
        // 重新抛出错误，让调用方可以处理
        throw error
      }
    },
  },
})
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
export default useUserStore
