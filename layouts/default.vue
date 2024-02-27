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
  main
    slot
  footer
    p FOOTER
</template>
<style lang='stylus' scoped>
.layout
  gap: var(--gap) 0
</style>
