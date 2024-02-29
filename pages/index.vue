<script lang='ts' setup>
/**
* Index Page.
* @name 'PageIndex'
* @version 1.0.0
*/
import type Post from '~/interfaces/Post'
import { usePostsStore } from '~/store/Posts'
const postStore = usePostsStore()
const posts = ref<Post[] | null>(null)

// Fetch all Posts
onMounted(async () => {
  await postStore.fetchAllPosts()
  posts.value = postStore.posts
})

definePageMeta({
  middleware: 'auth'
})
</script>

<template lang="pug">
Page(title='Todas as Postagens')
  ClusterL(tag='section' center)
    template(v-for='post in posts' :key='post.id')
      WPostCard(:postData="post")
</template>
