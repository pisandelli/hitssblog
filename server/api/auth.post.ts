/**
 * Authenticates a user by email and password.
 *
 * Checks if a user with the provided email and password exists in the users data.
 * If so, returns a token and user info. If not, returns a 401 error.
 */

import { ref } from 'vue'
import { users } from '~/Data/users'
import type { User } from '~/interfaces/User'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body
  const validUser = ref<Pick<User, 'id' | 'name' | 'email'> | null>(null)
  const userExists = users.find((user) => {
    if (user.email === email && user.password === password) {
      validUser.value = {
        id: user.id,
        name: user.name,
        email
      }
      return true
    }
    return false
  })

  if (!userExists) {
    throw createError({
      statusCode: 401,
      message: 'Credenciais Inválidas'
    })
  }

  return {
    ...validUser.value,
    token: btoa(`12a&45@78.0${email}${Date.now()}`)
  }
})
