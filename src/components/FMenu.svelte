<script lang="ts">
  import DollarSign from '../assets/icons/DollarSign.svelte'

  interface item {
    name?: string
    description?: string
    price?: string
    optionList?: [
      {
        name: string
        price: number
      },
    ]
    allergyInfo?: string[]
    foodItem?: string[]
  }
  export let item: item
</script>

<div class="w-full bg-gray-100 rounded-lg p-3 flex flex-col gap-[0.475rem]">
  <span class="font-bold">{item.name}</span>
  {#if item.price}
    <div class="flex gap-1 items-center">
      <DollarSign />
      <span class="text-black-secondary font-bold">{item.price ?? ''}원</span>
    </div>
  {/if}
  {#if item.description}
    <span class="text-black-tertiary text-sm">{item.description}</span>
  {/if}
  <div class="flex gap-1">
    {#each item.allergyInfo ?? [] as allergy}
      <div
        class="px-2 py-1 font-bold text-[9px] border-solid border-black-secondary text-black-secondary border-2 rounded-xl"
      >
        {allergy}
      </div>
    {/each}
  </div>
</div>
