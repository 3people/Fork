<script>
  import ForkLogo from '../assets/icons/ForkLogo.svelte'
  import FDropdown from './FDropdown.svelte'
  import {location} from 'svelte-spa-router'
</script>

<header class="px-4 py-2 flex justify-between w-[22.5rem] h-12 fixed top-0 z-10 bg-white">
  <div class="flex gap-0.5 items-center">
    <ForkLogo />
    <span class="font-santokki text-brand-point leading-6">포크</span>
  </div>
  {#if $location !== '/'}
    <FDropdown />
  {/if}
</header>
