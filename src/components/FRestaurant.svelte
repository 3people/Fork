<script lang="ts">
  import FImg from './FImg.svelte'
  import {createEventDispatcher} from 'svelte'
  import {locale} from 'svelte-i18n'
  import {fetchCategoryString} from '../requests/fetch/category-string'
  import {fetchRestaurant} from '../requests/fetch/restaurant'
  import {type Language} from '../locale/types'
  import { createQuery } from '@tanstack/svelte-query'

  export let contentId: string = ''
  export let flow: 'vertical' | 'horizontal' = 'horizontal'

  const dispatch = createEventDispatcher()
  
  $: data = $restaurantQuery?.data
  $: category = $categoryQuery?.data
  $: ({cat1, cat2, cat3} = data ?? {})

  $: restaurantQuery = createQuery({
    queryKey: ['restaurant', contentId, $locale],
    queryFn: () => fetchRestaurant({contentId, locale: $locale as Language}),
  })

  $: categoryQuery = createQuery({
    queryKey: ['category', {cat1, cat2, cat3}],
    queryFn: () => fetchCategoryString({cat1, cat2, cat3}),
  })

  const onClick = () => {
    dispatch('click', contentId)
  }
</script>
  
<button
  class="flex gap-4 flex-[0_0_100%] overflow-hidden {flow === 'vertical' ? 'flex-col' : ''}"
  on:click={onClick}
>
  <FImg
    class="{flow === 'vertical'
      ? 'w-[11.25rem] h-[11.25rem]'
      : 'min-w-[5.625rem] w-[5.625rem] h-[5.625rem]'} object-cover rounded-lg"
    src={data?.firstImage ?? ''}
    alt={data?.title ?? ''}
  />
  <div class="flex flex-col gap-1 w-full text-left overflow-hidden">
    <span class="text-brand-point font-bold text-[0.625rem]">{category ?? ''}</span>
    <span class="font-bold text-base">{data?.title ?? ''}</span>
    <span class="text-xs text-black-tertiary truncate">
      {@html data?.openTime ?? ''}
    </span>
    <span class="text-xs text-black-secondary">{data?.firstMenu ?? ''}</span>
  </div>
</button>
