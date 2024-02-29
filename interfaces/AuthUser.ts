/**
 * User authentication details.
 *
 * id: User's unique identifier.
 * name: User's display name.
 * email: User's email address.
 * token: Authentication token for user.
 */

export interface AuthUser {
  id: number
  name: string
  email: string
  token: string
}
