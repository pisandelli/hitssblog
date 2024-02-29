<script lang='ts' setup>
/**
* Default layout Header-Content-Footer.
* @name 'DefaultLayout'
* @version 1.0.0
*/
</script>

<template lang="pug">
BasicLayout.layout
  header
    Topbar
  CenterL(tag='main')
    slot
  footer
</template>
<style lang='stylus' scoped>
.layout
  --centerl-max-width: 63rem
  gap: var(--gap) 0
</style>
