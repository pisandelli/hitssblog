<script lang='ts' setup>
/**
* Admin Page.
* @name 'AdminPage'
* @version 1.0.0
*/
definePageMeta({
  middleware: 'auth'
})
</script>

<template lang="pug">
Page(title='Admin')
  h1 here lies the posts
</template>

<style lang="stylus" scoped>
</style>
