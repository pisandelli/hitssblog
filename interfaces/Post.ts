/**
 * Interface for a blog post.
 *
 * @property {number} id - Unique identifier for the post
 * @property {string} title - Post title
 * @property {string} content - Post content
 * @property {string} excerpt - Short excerpt from the post
 * @property {string} datePosted - Date the post was published
 * @property {string} [dateModified] - Date the post was last modified
 * @property {string} author - Author of the post
 * @property {string} url - URL for the full post
 * @property {string} banner - URL for the post's banner image
 */

export default interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  datePosted: string
  dateModified?: string
  author: string
  url: string
  banner: string
}
