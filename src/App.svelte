<script>
  import Router from 'svelte-spa-router'
  import {routes} from './router'
  import {setup} from './i18n'
</script>

<!-- eslint-disable no-unused-vars -->
{#await setup() then setup}
  <main class="w-full h-full flex justify-center">
    <div class="w-[22.5rem] h-full">
      <Router {routes} />
    </div>
  </main>
{/await}
