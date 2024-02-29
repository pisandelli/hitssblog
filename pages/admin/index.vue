<script lang='ts' setup>
/**
* Admin Page.
* @name 'AdminPage'
* @version 1.0.0
*/

import type Post from '~/interfaces/Post'
import { usePostsStore } from '~/store/Posts'

const postStore = usePostsStore()
const posts = ref<Post[] | null>(null)

/**
 * Fetches all posts from the store on component mount
 * and assigns them to the posts ref sorted by id.
 */
onMounted(async () => {
  await postStore.fetchAllPosts()

  // Sorts the posts by id in descending order.
  posts.value = postStore.posts.sort((a, b) => b.id - a.id)
})

definePageMeta({
  middleware: 'auth'
})
</script>

<template lang="pug">
Page(title='Admin')
  StackL(tag='section')
    ClusterL(between tag='header')
      h2 Listas de Posts
      Button(tag='a' success outline href='/admin/new') Nova postagem

    StackL(tag='section')
      template(v-for='post in posts' :key='post.id')
        WPostEntry(:post='post')

</template>

<style lang="stylus" scoped>
</style>
