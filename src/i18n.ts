import {register, init} from 'svelte-i18n'

export const setup = async () => {
  register('ko', () => import('./locale/ko'))
  register('en', () => import('./locale/en'))

  return await Promise.allSettled([
    init({
      fallbackLocale: 'ko',
      initialLocale: 'ko',
    }),
  ])
}
