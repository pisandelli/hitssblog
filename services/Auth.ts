/**
 * Posts user authentication data to the server.
 *
 * @param user - The user data object to authenticate.
 * @returns A promise that resolves with the server response.
 */

import type UserData from '~/interfaces/UserData'

export default class AuthService {
  // Post user data
  async postAuthData(user: UserData) {
    return await useCustomFetch('auth', user)
  }
}
