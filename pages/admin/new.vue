<script lang='ts' setup>
/**
* Adds a new blog post.
* This component provides a form to create a new blog post.
* It likely makes API calls to persist the new post.
* @name 'NewPost'
* @version 1.0.0
*/

import { useAuthStore } from '~/store/Auth'
import { usePostsStore } from '~/store/Posts'

const authStore = useAuthStore()
const postStore = usePostsStore()

/**
 * Gets the highest post ID from the posts array.
 */
const highestID = ref(Math.max(...postStore.posts.map(post => post.id)))

/**
 * Increments the highestID value by 1 and updates highestID.
 * Returns the incremented ID value.
 */
const incrementID = computed(() => {
  const newID = highestID.value + 1
  highestID.value = newID
  return newID
})

/**
 * Declare reactive variables for the post title, excerpt, banner,
 * content, and author.
 *
 * The author is set to the current logged in user's name if available,
 * otherwise default to 'Anonymous'.
 */
const titulo = ref('')
const excerpt = ref('')
const banner = ref('')
const content = ref('')
const author = authStore.user?.name ?? 'Anônimo'

/**
 * Saves a new post to the posts store.
 * Constructs a new post object from the provided refs,
 * saves it to the store, and resets the refs.
*/
function savePost() {
  const newPost = {
    id: incrementID.value,
    title: titulo.value,
    excerpt: excerpt.value,
    banner: banner.value,
    content: content.value,
    author,
    url: '#',
    datePosted: new Date().toLocaleDateString()
  }
  postStore.saveNewPost(newPost)
  titulo.value = ''
  excerpt.value = ''
  banner.value = ''
  content.value = ''
}
</script>

<template lang="pug">
Page(title='Nova postagem')
  section
    Card.panel(no-float)
      StackL
        FormInput#title(v-model='titulo') Titulo do post
        FormInput#excerpt(v-model='excerpt') Excerpt
        FormInput#banner(v-model='banner') URL do banner
        FormInput#content(v-model='content' type='textarea') Conteúdo

        ClusterL(between)
          Button(tag='a' href='/admin' primary icon='heroicons:arrow-left-16-solid') Lista de Posts
          Button(success @click='savePost') Salvar

</template>

<style lang="stylus" scoped>
.panel
  inline-size: 25rem
</style>
