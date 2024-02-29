import { useStorage } from '@vueuse/core'
import type { AuthUser } from '~/interfaces/AuthUser'
import AuthService from '~/services/Auth'
const authService = new AuthService()

export const useAuthStore = defineStore('Auth', () => {
  // STATES
  // initialize state from local storage to enable user to stay logged in
  const user = ref<AuthUser | null>(null)
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    user.value = JSON.parse(storedUser)
  }

  // ACTIONS
  async function login (email: string, password: string) {
    try {
      const response = await authService.postAuthData({ email, password })
      user.value = response
      // save user to local storage
      useStorage('user', user.value)
      await navigateTo('/')
    } catch (error) {
      return error
    }
  }

  async function logout () {
    user.value = null
    localStorage.removeItem('user')
    await navigateTo('/login')
  }

  return {
    user,
    login,
    logout
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
