<script lang="ts">
  import {querystring} from 'svelte-spa-router'
  import {output} from '../requests/mock/menu'
  import DollarSign from '../assets/icons/DollarSign.svelte'

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
    {#each output.menuList as menu}
      <div class="bg-gray-100 rounded-lg p-3 flex flex-col">
        <span class="font-bold">{menu.name}</span>
        <div class="flex gap-1 items-center">
          <DollarSign />
          <span class="text-black-secondary font-bold">{menu.price}</span>
        </div>
        <span class="text-black-tertiary text-sm">{menu.description}</span>
        <div class="flex gap-1">
          {#each menu.allergyList as allergy}
            <div
              class="px-2 py-1 font-bold text-[10px] border-solid border-black-tertiary text-black-tertiary border-2 rounded-2xl"
            >
              {allergy}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
