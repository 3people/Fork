<script>
  import Router from 'svelte-spa-router'
  import {routes} from './router'
</script>

<main class="w-full h-full flex justify-center">
  <div class="w-[22.5rem]">
    <Router {routes} />
  </div>
</main>
