/**
 * User interface defining the properties of a user object.
 *
 * @property {number} id - The user's unique identifier.
 * @property {string} name - The user's name.
 * @property {string} email - The user's email address.
 * @property {string} password - The user's password.
*/

export interface User {
  id: number
  name: string
  email: string
  password: string
}
