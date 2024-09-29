<script lang="ts">
  import {querystring} from 'svelte-spa-router'
  import {output} from '../requests/mock/menu_mock'
  import FMenu from '../components/FMenu.svelte'

  $: src = $querystring?.slice(4, $querystring?.length)
</script>

<div class="mx-5">
  <div class="object-contain">
    <img {src} class="rounded-xl" alt="menu" />
  </div>
  <div class="mt-4">
    <div class="bg-gray-200 rounded-lg p-3">
      <span class="font-bold">{output.title}</span>
    </div>
    <h1 class="font-bold text-xl mt-6">메뉴</h1>
    {#each output.menuList as item}
      <FMenu {item} />
    {/each}
  </div>
</div>
