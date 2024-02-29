<script lang='ts' setup>
/**
* Form Input component.
* @name 'Input'
* @version 1.0.0
*/
const model = defineModel<string>()
</script>

<template lang="pug">
StackL(tag='label' :for='$attrs.id')
  span: slot
  input.form-input(v-bind='$attrs' v-model='model')
</template>

<style lang="stylus" scoped>
label
  font-size: var(--font-size-small)
  font-weight: var(--weight-medium)
  flex: 1 0 auto
.form-input
  --stackl-gap: .3rem
  inline-size: 100%
  font-size: var(--font-size-small)
  border: 1px solid var(--color-grey-dark)
  border-radius: var(--border-radius)
  padding: .3rem .5rem
  color: var(--color-default)
  font-weight: var(--weight-regular)
</style>
