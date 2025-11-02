import { acceptHMRUpdate, defineStore } from 'pinia'
import type { LoginFormData } from '@/api/user/types.ts'
import { reqLogin } from '@/api/user'

const useUserStore = defineStore('User', {
  state: () => {
    return {
      token: localStorage.getItem('token'),
    }
  },
  getters: {},
  actions: {
    async userLogin(data: LoginFormData) {
      try {
        const result = await reqLogin(data)
        console.log('result is %O', result)
        this.token = result.token
        localStorage.setItem('token', this.token)
      } catch (error) {
        console.log('error is %O', error)
        // 登录失败时清除 token
        this.token = ''
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
