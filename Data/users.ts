/**
 * Array of user objects with id, name, email and password properties.
 */

import type { User } from '~/interfaces/User'

export const users: User[] = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: '123'
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john@example.com',
    password: '000'
  },
  {
    id: 3,
    name: 'Bob Smith',
    email: 'bob@example.com',
    password: 'abc'
  }
]
