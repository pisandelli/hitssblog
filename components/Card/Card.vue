<script lang='ts' setup>
/**
* Simple Card component.
* @name 'Card'
* @version 1.0.0
*/
</script>

<template lang="pug">
BoxL.card
  slot
</template>

<style lang="stylus" scoped>
.card
  cursor: pointer
  border-radius: var(--border-radius)
  _transition(box-shadow var(--animation-speed))
  _box-shadow()
  &:hover
    _box-shadow($a = 12)
</style>
