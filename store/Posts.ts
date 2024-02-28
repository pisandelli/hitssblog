/**
 * Defines a Pinia store for managing posts data.
 *
 * The store has:
 * `posts` - State holding the array of Post objects.
 * `fetchAllPosts` - Async action to fetch posts from the API and update `posts`.
 *
 * Also handles HMR.
 */
import type Post from '~/interfaces/Post'
import PostsServices from '~/services/Posts'
const postsService = new PostsServices()

export const usePostsStore = defineStore('Posts', () => {
  // STATES
  const posts = ref<Post[]>([])

  // ACTIONS

  /**
   * Fetches all posts from the posts service.
   * Throws an error if the response is empty.
   * Updates the posts ref with the response data.
  */
  async function fetchAllPosts () {
    const response = await postsService.getPosts()
    if (!response) {
      throw createError({
        statusCode: 400,
        message: 'Could not fetch posts'
      })
    }
    posts.value = response
  }

  return {
    posts,
    fetchAllPosts
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot))
}
