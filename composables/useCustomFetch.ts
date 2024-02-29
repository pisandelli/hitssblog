/**
 * Makes a fetch request to the API endpoint with the given path.
 * Allows passing a body for POST requests.
 *
 * @param path - The API endpoint path
 * @param body - Optional body for POST requests
 * @returns The fetch response
 */

import type UserData from '~/interfaces/UserData'

export async function useCustomFetch (path: string, body?: UserData) {
  const config = useRuntimeConfig()
  if (!body) { return await $fetch(`${config.public.API_BASE}/${path}`) }
  return await $fetch(`${config.public.API_BASE}/${path}`, {
    method: 'post',
    body
  })
}
