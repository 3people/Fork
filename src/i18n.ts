import {register, init} from 'svelte-i18n'

export const setup = async () => {
  register('ko', () => import('./locale/ko'))
  register('en', () => import('./locale/en'))
  register('zh', () => import('./locale/zh'))
  register('ja', () => import('./locale/ja'))

  return await Promise.allSettled([
    init({
      fallbackLocale: 'ko',
      initialLocale: 'ko',
    }),
  ])
}
