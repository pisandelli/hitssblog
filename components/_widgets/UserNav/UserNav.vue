<script lang='ts' setup>
/**
* Options for logged User.
* @name 'UserNav'
* @version 1.0.0
*/

import { useAuthStore } from '~/store/Auth'
const authStore = useAuthStore()
const userName = ref(authStore.user?.name)
</script>

<template lang="pug">
ClusterL(tag='nav')
  p Olá {{ userName }}
  Button(tag='a' neutral outline href='/admin') Admin
  Icon(name='heroicons:arrow-right-start-on-rectangle-16-solid' size='1.5rem' @click='authStore.logout()')
</template>

<style lang="stylus" scoped>
.icon
  cursor: pointer
  &:hover
    color: var(--color-danger)
</style>