<script lang='ts' setup>
/**
* A simple card to show a post entry.
* @name 'WPostCard'
* @version 1.0.0
*/
import type Post from '~/interfaces/Post'

defineProps<{
  postData: Post
}>()
</script>

<template lang="pug">
Card(nogap).post-card
  BoxL(tag='header' nogap)
    NuxtImg(:src='postData.banner' width='100%' height='100%' alt='title')
    ClusterL.info(between)
      small <strong>Por</strong> {{ postData.author }}
      small {{ postData.datePosted }}
  BoxL
    StackL
      StackL.body(compact)
        p.title {{ postData.title }}
        p.excerpt {{ postData.excerpt }}

      CenterL(tag='footer' intrinsic)
        Button(tag='a' href='#' size='small' color='primary') Ler mais
</template>

<style lang="stylus" scoped>
.post-card
  inline-size: 19.75rem
  min-block-size: 25rem

.info
  padding: .5rem var(--gap)
  font-size: var(--font-size-tiny)

.title
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  overflow: hidden
  font-weight: var(--weight-medium)

.excerpt
  display: -webkit-box
  -webkit-line-clamp: 2
  -webkit-box-orient: vertical
  overflow: hidden
  font-size: var(--font-size-small)
</style>
