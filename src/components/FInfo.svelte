<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import {_, locale} from 'svelte-i18n'
  import {location} from 'svelte-spa-router'

  export let type: string = '식당'
  export let item: any
  export let flow: 'vertical' | 'horizontal' = 'horizontal'

  const dispatch = createEventDispatcher()

  const onClick = () => {
    dispatch('click', {
      contentId: $location !== '/search' ? item.relation[$locale ?? 'ko'] : item.contentId,
    })
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
    {#if $location === '/search'}
      <span class="font-bold text-base">{item.title}</span>
      <span class="text-xs text-black-tertiary">{@html item.openTime}</span>
      <span class="text-xs text-black-secondary">{item.firstMenu}</span>
    {:else}
      <span class="font-bold text-base">{$_(`home.info.${item.contentId}.title`)}</span>
      <span class="text-xs text-black-tertiary">
        {@html $_(`home.info.${item.contentId}.openTime`)}
      </span>
      <span class="text-xs text-black-secondary">{$_(`home.info.${item.contentId}.firstMenu`)}</span
      >
    {/if}
  </div>
</button>
