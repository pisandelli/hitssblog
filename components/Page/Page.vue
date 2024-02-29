<script lang="ts" setup>
/**
* Template for pages.
* @name 'Page'
* @version 1.0.0
*/
defineProps<{
  title: String
}>()
</script>

<template lang="pug">
StackL(tag='article')
  header
    h2.title {{ title }}

  article
    slot
</template>

<style lang="stylus" scoped>
.title
  font-size: var(--font-size-bigger)
  font-weight: var(--weight-medium)
  color: var(--color-primary)
</style>
