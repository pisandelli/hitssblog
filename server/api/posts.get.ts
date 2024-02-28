/**
 * Gets all posts.
 *
 * Retrieves and returns all posts from the Posts data source.
*/
import { Posts } from '~/Data/posts'

// For the sake of the example it is not an async function
export default defineEventHandler((event) => {
  return Posts
})
