<script lang='ts' setup>
/**
* Topbar component
* @name 'Topbar'
* @version 1.0.0
*/
</script>

<template lang="pug">
.topbar
  ClusterL(between)
    span Logo
    span user

</template>

<style lang="stylus" scoped>
.topbar
  padding: calc(var(--gap) / 2) var(--gap)
  background-color: var(--color-primary)
  color: var(--color-neutral)
</style>
