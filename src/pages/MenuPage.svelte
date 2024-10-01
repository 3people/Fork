<script lang="ts">
  import FMenu from '../components/FMenu.svelte'
  import {imageStore} from '../store/image'
  import FSkeleton from '../components/FSkeleton.svelte'

  const {translateMenu} = imageStore
</script>

<div class="w-full px-5 mt-4 mb-16">
  <img src={$imageStore.src} class="rounded-xl w-full h-[7.5rem] object-cover" alt="menu" />
  <div class="w-full mt-4">
    <h1 class="font-bold text-xl mt-6">메뉴</h1>
    <div class="flex flex-col w-full gap-3 mt-5">
      {#await translateMenu()}
        <!-- eslint-disable no-unused-vars -->
        {#each Array(5) as _}
          <FSkeleton />
        {/each}
      {:then result}
        {#each result.menuList as item}
          <FMenu {item} />
        {/each}
      {/await}
    </div>
  </div>
</div>
