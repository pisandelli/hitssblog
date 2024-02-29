<script lang='ts' setup>
/**
* Post Entry for admin.
* @name 'PostEntry'
* @version 1.0.0
*/
import type Post from '~/interfaces/Post'

const emit = defineEmits(['drop'])

defineProps<{
  post: Post
}>()
</script>

<template lang="pug">
Card(no-float).post-entry
  StackL
    StackL(compact)
      div
        p.title {{ post.title }}
        ClusterL
          small {{ post.author }}
          small {{ post.datePosted }}
      p.excerpt {{ post.excerpt }}
    footer
      ClusterL
        Button(outline @click="navigateTo('/admin/edit/' + post.id)") Editar
        Button(danger @click="emit('drop', post.id)") Excluir
</template>

<style lang="stylus" scoped>
.title
  font-weight: var(--weight-medium)

small
  font-size: var(--font-size-tiny)

.excerpt
  font-size: var(--font-size-small)
</style>
