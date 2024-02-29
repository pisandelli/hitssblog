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
