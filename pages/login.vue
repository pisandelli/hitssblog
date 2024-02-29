<script lang='ts' setup>
/**
* The Login Page.
* @name 'LoginPage'
* @version 1.0.0
*/
import { useAuthStore } from '~/store/Auth'
const authStore = useAuthStore()

definePageMeta({
  layout: 'login'
})

const email = ref<string>('')
const password = ref<string>('')

/**
 * Logs the user in with the provided email and password.
 * @async
 * @function login
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 */
async function login() {
  await authStore.login(email.value, password.value)
}
</script>

<template lang="pug">
ClientOnly
  Card(no-float).form
    StackL
      .header
        p.greetings Bem vindo ao HitssBlog
        small.slogan Faça seu login e comece a escrever
      StackL(compact)
        FormInput#usuario(type='email' v-model='email') E-mail
        FormInput#senha(type='password' v-model='password') Senha
      Button(success @click='login') Login
</template>

<style lang="stylus" scoped>
.form
  position: fixed
  inset-block-start: 50%
  inset-inline-start: 50%
  transform: translate(-50%, -50%)
  border-top: 5px solid var(--color-primary)

.greetings
  font-size: var(--font-size-big)
  font-weight: var(--weight-medium)

.slogan
  font-size: var(--font-size-small)
</style>
