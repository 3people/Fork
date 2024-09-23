<script>
  import Router from 'svelte-spa-router'
  import {routes} from './router'
  import {setup} from './i18n'
  import FHeader from './components/FHeader.svelte'
</script>

<!-- eslint-disable no-unused-vars -->
{#await setup() then setup}
  <main class="w-full h-full flex justify-center">
    <div class="w-[22.5rem] h-full mt-12 overflow-auto scrollbar-hide">
      <FHeader />
      <Router {routes} />
    </div>
  </main>
{/await}
