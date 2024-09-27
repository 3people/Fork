<script>
  import ForkLogo from '../assets/icons/ForkLogo.svelte'
  import FDropdown from './FDropdown.svelte'
  import {location, pop} from 'svelte-spa-router'
  import {_} from 'svelte-i18n'
  import {clsx} from 'clsx'
  import ChevronLeft from '../assets/icons/ChevronLeft.svelte'

  $: displayDropdown = !['/', '/restaurant'].includes($location)
  $: displayBackButton = !['/home', '/landing'].includes($location)

  const onClickBackButton = () => {
    pop()
  }
</script>

<header
  {...$$restProps}
  class={clsx(
    'px-4 flex items-center justify-between w-full h-12 fixed top-0 z-10 bg-white',
    $$restProps.class,
  )}
>
  {#if displayBackButton}
    <button class="cursor-pointer" on:click={onClickBackButton}>
      <ChevronLeft />
    </button>
  {:else}
    <div class="flex gap-0.5 items-center">
      <ForkLogo />
      <span class="font-santokki text-brand-point leading-6">{$_('header.title')}</span>
    </div>
  {/if}
  {#if displayDropdown}
    <FDropdown />
  {/if}
</header>
