<script lang='ts' setup>
/**
* Edit Post.
* @name 'EditPost'
* @version 1.0.0
*/
import { usePostsStore } from '~/store/Posts'
import { useAuthStore } from '~/store/Auth'
import type Post from '~/interfaces/Post'

const authStore = useAuthStore()
const postStore = usePostsStore()

// Is not possible to create a server API
// to edit the post because it is in a
// localStorage
const route = useRoute()
const ID = ref(route.params.id)
const today = new Date().toLocaleDateString('pt-BR')

const post = postStore.posts.find(post => post.id === +ID.value)
const titulo = ref(post?.title)
const excerpt = ref(post?.excerpt)
const banner = ref(post?.banner)
const content = ref(post?.content)
const author = authStore.user?.name
const dateModified = today

/**
 * Updates a post in the posts store by id with new edited values.
 * @param {number} id - The id of the post to update
 * @param {Post} editedPost - The edited post object with new values
*/
function updatePost() {
  const editedPost: Post = {
    id: +ID.value,
    title: titulo.value ?? '',
    excerpt: excerpt.value ?? '',
    banner: banner.value ?? '',
    content: content.value ?? '',
    author: author ?? '',
    url: post?.url ?? '',
    datePosted: post?.datePosted ?? '',
    dateModified
  }

  postStore.updatePost(+ID.value, editedPost)
}
</script>

<template lang="pug">
Page(:title="'Editar Post - id: ' + ID")
  section
    Card.panel(no-float)
      StackL
        FormInput#title(v-model='titulo') Titulo do post
        FormInput#excerpt(v-model='excerpt') Excerpt
        FormInput#banner(v-model='banner') URL do banner
        FormInput#content(v-model='content' type='textarea') Conteúdo

        ClusterL(between)
          Button(tag='a' href='/admin' primary icon='heroicons:arrow-left-16-solid') Lista de Posts
          Button(success @click='updatePost') Editar Post
</template>

<style lang="stylus" scoped>
.panel
  inline-size: 25rem
</style>
