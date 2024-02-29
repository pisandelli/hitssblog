import type UserData from '~/interfaces/UserData'

export default class AuthService {
  // Post user data
  async postAuthData (user: UserData) {
    return await useCustomFetch('auth', user)
  }
}
