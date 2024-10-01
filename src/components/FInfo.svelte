<script lang="ts">
  import {createEventDispatcher, onMount} from 'svelte'
  import {locale} from 'svelte-i18n'
  import {location} from 'svelte-spa-router'
  import FImg from './FImg.svelte'
  import {
    fetchRestaurantCommonInfo,
    fetchRestaurantDetailInfo,
  } from '../requests/fetch/restaurant-info'
  import type {Language} from '../locale/types'
  import type {
    RestaurantCommonInfo,
    RestaurantDetailInfo,
  } from '../requests/normalize/restaurant-info'

  export let type: 'restaurant' | 'food' = 'restaurant'
  export let item: any
  export let flow: 'vertical' | 'horizontal' = 'horizontal'

  const dispatch = createEventDispatcher()

  let restaurantInfoByLocale: {
    [key: string]: RestaurantCommonInfo & RestaurantDetailInfo
  }

  $: restaurantInfoByLocale = {
    ko: {},
    en: {},
    ja: {},
    zh: {},
  }

  const fetchRestaurantByLocale = async () => {
    const promises = Object.entries(item.relation).map(async ([locale, contentId]) => {
      const commonInfo = await fetchRestaurantCommonInfo({contentId, locale: locale as Language})
      const detailInfo = await fetchRestaurantDetailInfo({contentId, locale: locale as Language})
      return {locale, data: {...commonInfo, ...detailInfo}}
    })

    const results = await Promise.allSettled(promises)

    results.forEach((result) => {
      if (result.status === 'fulfilled' && result.value.data) {
        restaurantInfoByLocale[result.value.locale as Language] = result.value.data
      }
    })
  }

  onMount(async () => {
    if ($location === '/home') {
      await fetchRestaurantByLocale()
    }
  })

  const onClick = () => {
    if (type === 'restaurant') {
      dispatch('click', {
        contentId: ['/search', '/food'].includes($location)
          ? item.contentId
          : item.relation[$locale ?? 'ko'],
        type: 'restaurant',
      })
    } else {
      dispatch('click', {
        id: item.id,
        type: 'food',
      })
    }
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
    src={item.firstImage}
    alt={item.title}
  />
  {#if type === 'restaurant'}
    <div class="flex flex-col gap-1 w-full text-left overflow-hidden">
      <span class="text-brand-point font-bold text-[0.625rem]">식당</span>
      {#if ['/search', '/food'].includes($location)}
        <span class="font-bold text-base truncate">{item.title}</span>
        <span class="text-xs text-black-tertiary truncate">{@html item.openTime}</span>
        <span class="text-xs text-black-secondary">{item.firstMenu}</span>
      {:else}
        <!--        TODO: skeleton UI-->
        {@const restaurantInfo = restaurantInfoByLocale[$locale ?? 'ko']}
        <span class="font-bold text-base">{restaurantInfo.title ?? ''}</span>
        <span class="text-xs text-black-tertiary truncate">
          {@html restaurantInfo.openTime ?? ''}
        </span>
        <span class="text-xs text-black-secondary">{restaurantInfo.firstMenu ?? ''}</span>
      {/if}
    </div>
  {:else}
    <div class="flex flex-col gap-1 text-left">
      <span class="text-brand-point font-bold text-[0.625rem]">{item.category}</span>
      {#if ['/search', '/food'].includes($location)}
        <span class="font-bold text-base">{item.title}</span>
        <span class="text-xs text-black-secondary line-clamp-3">{item.description}</span>
      {/if}
    </div>
  {/if}
</button>
