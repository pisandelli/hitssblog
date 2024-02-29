/**
 * Defines a Nuxt middleware that checks if the user is authenticated.
 *
 * Checks if there is a user in localStorage, and compares the token
 * to the token in the auth store. If no match, redirects to login.
*/
import { useAuthStore } from '~/store/Auth'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()

  const userLocal = process.client ? localStorage.getItem('user') : null

  if (userLocal) {
    const user = JSON.parse(userLocal)
    if (user.token !== authStore.user?.token) {
      return navigateTo('/login')
    }
  } else {
    return navigateTo('/login')
  }
})
