<script lang='ts' setup>
/**
* A simple card to show a post entry.
* @name 'WPostCard'
* @version 1.0.0
*/
// import type { PostCard } from '~/types/PostCard'

// defineProps<{
//   post?: PostCard
// }>()
</script>

<template lang="pug">
Card(nogap).post-card
  BoxL(tag='header' nogap)
    img(src='https://placehold.it/16x6' width='100%' height='100%' alt='title')
    ClusterL.info(between)
      small: <strong>Por</strong> Pedro Pisandelli
      small <strong>Postado em</strong> 20.05.2024
  BoxL
    StackL
      .body
        p.title titulo
        p.excerpt excerpt

      CenterL(tag='footer' intrinsic)
        Button(tag='a' href='#' size='small' color='primary') Ler mais
</template>

<style lang="stylus" scoped>
.info
  padding: .5rem var(--gap)
  font-size: var(--font-size-tiny)
</style>
