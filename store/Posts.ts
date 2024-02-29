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
  async function fetchAllPosts() {
    if (!posts.value.length) {
      const response = await postsService.getPosts()
      if (!response) {
        throw createError({
          statusCode: 400,
          message: 'Could not fetch posts'
        })
      }
      posts.value = response
    }
  }

  /**
   * Adds a new post to the posts array in state.
   */
  function saveNewPost(post: Post) {
    posts.value.push(post)
  }

  /**
   * Removes a post with the given ID from the posts array in state.
   * Finds the index of the post with the matching ID and splices it out of the array.
   */
  function dropPost(id: number) {
    const index = posts.value.findIndex(post => post.id === id)
    if (index !== -1) {
      posts.value.splice(index, 1)
    }
  }

  /**
   * Updates a post in the posts array.
   * Finds the post with the matching ID and updates it with the new post data.
  */
  function updatePost(id: number, post: Post) {
    const index = posts.value.findIndex(post => post.id === id)
    if (index !== -1) {
      console.log('bump', posts.value[index])
      posts.value[index] = post
    }
  }

  return {
    posts,
    fetchAllPosts,
    saveNewPost,
    dropPost,
    updatePost
  }
}, { persist: { storage: persistedState.sessionStorage } })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePostsStore, import.meta.hot))
}
