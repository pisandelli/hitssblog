/**
 * Auth store module for user authentication.
 *
 * Exports useAuthStore composable function which returns an auth store with
 * user state and login/logout actions. Handles persisting user in localStorage.
 */
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
  /**
   * Logs the user in with the provided email and password.
   *
   * @param email - The email address of the user
   * @param password - The password of the user
   *
   * @returns A promise that resolves with the user object on success,
   * or rejects with an error on failure
   */
  async function login(email: string, password: string) {
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

  /**
   * Logs the user out by setting the user state to null,
   * removing the user from local storage,
   * and navigating to the login route.
   */
  async function logout() {
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
