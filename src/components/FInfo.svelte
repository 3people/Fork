<script lang="ts">
  import type {
    RestaurantCommonInfo,
    RestaurantDetailInfo,
  } from '../requests/normalize/restaurant-info'
  import {createEventDispatcher} from 'svelte'

  export let type: string = '식당'
  export let item: RestaurantDetailInfo & RestaurantCommonInfo
  export let flow: 'vertical' | 'horizontal' = 'horizontal'

  const dispatch = createEventDispatcher()

  const onClick = () => {
    dispatch('click', {contentId: item.contentId})
  }
</script>

<button
  class="flex gap-4 flex-[0_0_100%] {flow === 'vertical' ? 'flex-col' : ''}"
  on:click={onClick}
>
  <img
    class="{flow === 'vertical'
      ? 'w-[11.25rem] h-[11.25rem]'
      : 'w-[5.625rem] h-[5.625rem]'} object-cover rounded-lg"
    src={item.firstImage}
    alt={item.title}
  />
  <div class="flex flex-col gap-1 text-left">
    <span class="text-brand-point font-bold text-[0.625rem]">{type}</span>
    <span class="font-bold text-base">{item.title}</span>
    <span class="text-xs text-black-tertiary">{@html item.openTime}</span>
    <span class="text-xs text-black-secondary">{item.firstMenu}</span>
  </div>
</button>
