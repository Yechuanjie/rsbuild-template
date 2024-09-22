import { defineStore } from 'pinia'

const userStore = defineStore('userStore', {
  state: (): AppStore => {
    return {
      userInfo: null
    }
  },
  actions: {
    async login() {
      // 模拟登录接口
      return new Promise<void>((resolve, rejcet) => {
        setTimeout(() => {
          this.userInfo = {
            id: 6494985
          }
          resolve()
        }, 500)
      })
    },
    logout() {
      this.userInfo = null
    }
  }
})

export default userStore

export interface AppStore {
  userInfo: UserInfo | null
}

export interface UserInfo {
  id: number
}
