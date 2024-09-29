<script lang="ts">
  import DollarSign from '../assets/icons/DollarSign.svelte'

  interface item {
    name: string
    price: number
    description: string
    allergyList: string[]
  }
  export let item: item
</script>

<div class="bg-gray-100 rounded-lg p-3 flex flex-col">
  <span class="font-bold">{item.name}</span>
  <div class="flex gap-1 items-center">
    <DollarSign />
    <span class="text-black-secondary font-bold">{item.price}</span>
  </div>
  <span class="text-black-tertiary text-sm">{item.description}</span>
  <div class="flex gap-1">
    {#each item.allergyList as allergy}
      <div
        class="px-2 py-1 font-bold text-[10px] border-solid border-black-tertiary text-black-tertiary border-2 rounded-2xl"
      >
        {allergy}
      </div>
    {/each}
  </div>
</div>
