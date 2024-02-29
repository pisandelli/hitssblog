/**
 * Gets all posts.
 *
 * Async method that returns a promise resolving to
 * an array of post data. It calls a custom fetch method to
 * retrieve the posts from the server.
 */

export default class PostsServices {
  async getPosts() {
    return await useCustomFetch('posts')
  }
}
