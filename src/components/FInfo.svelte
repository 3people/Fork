<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import {_, locale} from 'svelte-i18n'
  import {location} from 'svelte-spa-router'
  import FImg from './FImg.svelte'

  export let type: 'restaurant' | 'food' = 'restaurant'
  export let item: any
  export let flow: 'vertical' | 'horizontal' = 'horizontal'

  const dispatch = createEventDispatcher()

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
      <span class="text-brand-point font-bold text-[0.625rem] ">식당</span>
      {#if ['/search', '/food'].includes($location)}
        <span class="font-bold text-base truncate">{item.title}</span>
        <span class="text-xs text-black-tertiary truncate">{@html item.openTime}</span>
        <span class="text-xs text-black-secondary">{item.firstMenu}</span>
      {:else}
        <span class="font-bold text-base">{$_(`home.info.${item.contentId}.title`)}</span>
        <span class="text-xs text-black-tertiary truncate">
          {@html $_(`home.info.${item.contentId}.openTime`)}
        </span>
        <span class="text-xs text-black-secondary"
          >{$_(`home.info.${item.contentId}.firstMenu`)}</span
        >
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
