/**
 * Generic function to fetch data
 *
 * @param {String} path - The Path to data
 * @version 1.0.0
 *
 */

export async function useCustomFetch (path: string) {
  const config = useRuntimeConfig()
  return await $fetch(`${config.public.API_BASE}/${path}`)
}
