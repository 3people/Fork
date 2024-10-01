<script>
  import Router from 'svelte-spa-router'
  import {routes} from './router'
  import {setup} from './i18n'
  import FHeader from './components/FHeader.svelte'
</script>

<!-- eslint-disable no-unused-vars -->
{#await setup() then setup}
  <main class="w-full h-full flex justify-center overflow-hidden">
    <div class="max-w-[48rem] w-full h-full pt-12 overflow-auto">
      <FHeader />
      <Router {routes} />
    </div>
  </main>
{/await}
