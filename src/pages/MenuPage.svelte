<script lang="ts">
  import FMenu from '../components/FMenu.svelte'
  import {imageStore} from '../store/image'
  import FSkeleton from '../components/FSkeleton.svelte'
  import ForkLogo from '../assets/icons/ForkLogo.svelte'
  import {_, locale} from 'svelte-i18n'

  const {translateMenu, getAiReview} = imageStore
</script>

<div class="w-full px-5 mt-4 mb-16">
  <img src={$imageStore.src} class="rounded-xl w-full h-[7.5rem] object-cover" alt="menu" />
  <div class="w-full mt-4">
    <div class="flex items-center">
      <ForkLogo />
      <span class="font-santokki text-brand-point text-lg leading-6">{$_('menu.fork')}</span>
      <span class="font-bold text-lg">&nbsp;{$_('menu.text')}</span>
    </div>
    <div class="flex flex-col w-full gap-3 mt-5">
      {#key $locale}
        {#await translateMenu()}
          <!-- eslint-disable no-unused-vars -->
          {#each Array(5) as _}
            <FSkeleton />
          {/each}
        {:then result}
          {#await getAiReview()}
            <FSkeleton />
          {:then review}
            <div class="bg-[#ff4a221a] rounded-lg p-3">
              <div class="flex items-center">
                <ForkLogo />
                <span class="font-santokki text-brand-point text-lg leading-6">{$_('menu.fork')}</span>
                <span class="font-bold text-lg">&nbsp;AI {$_('menu.guide')}</span>
              </div>
              <p class="text-black-tertiary text-xs">
                {Object.values(review).filter(Boolean).join(' ')}
              </p>
            </div>
          {/await}
          {#if result.title}
            <div class="bg-gray-200 rounded-lg p-3 flex flex-col">
              <span class="font-bold mb-1.5">{result.title}</span>
            </div>
          {/if}
          {#each result.menuList as item}
            <FMenu {item} />
          {/each}
        {/await}
      {/key}
    </div>
  </div>
</div>
