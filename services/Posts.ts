export default class PostsServices {
  // Get all posts
  async getPosts () {
    return await useCustomFetch('posts')
  }

  // // Get course by ID
  // async getCourseById (courseId: number) {
  //   return await useCustomFetch(`course/${courseId}`)
  // }
}
