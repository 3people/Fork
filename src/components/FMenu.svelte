<script lang="ts">
  import DollarSign from '../assets/icons/DollarSign.svelte'
  import ChevronDown from '../assets/icons/ChevronDown.svelte'
  import Option from '../assets/icons/Option.svelte'
  import Allergy from '../assets/icons/Allergy.svelte'
  import {_} from 'svelte-i18n'

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

  $: console.log(item)

  let isExpanded = false

  const onExpand = () => {
    isExpanded = !isExpanded
  }
</script>

<div class="w-full bg-gray-100 rounded-lg p-3 flex flex-col gap-[0.475rem]">
  <div class="flex justify-between">
    <span class="font-bold">{item.name}</span>
    {#if item.optionList?.length || item.allergyInfo?.length}
      <button
        class={`flex justify-center items-center ${isExpanded ? 'rotate-180' : ''}`}
        on:click={onExpand}
      >
        <ChevronDown />
      </button>
    {/if}
  </div>
  {#if item.price}
    <div class="flex gap-1 items-center">
      <DollarSign />
      <span class="text-black-secondary font-bold">{item.price ?? ''}</span>
    </div>
  {/if}
  {#if item.description}
    <span class="text-black-tertiary text-sm">{item.description}</span>
  {/if}
  {#if !isExpanded}
    <div class="flex gap-1">
      {#each item.allergyInfo ?? [] as allergy}
        <div
          class="px-2 py-1 font-bold text-[9px] border-solid border-black-secondary text-black-secondary border-2 rounded-xl"
        >
          {allergy}
        </div>
      {/each}
    </div>
  {:else}
    {#if item.optionList?.length}
      <div class="flex flex-col mt-6">
        <div class="flex gap-1 items-center mb-1.5">
          <Option />
          <span class="text-black-secondary font-bold">{$_('menu.option')}</span>
        </div>
        <div class="flex flex-col gap-1.5">
          {#each item.optionList as option}
            <div class="text-black-tertiary text-sm">{option.name} {option.price}</div>
          {/each}
        </div>
      </div>
    {/if}
    {#if item.allergyInfo?.length}
      <div class="flex flex-col mt-6">
        <div class="flex gap-1 items-center mb-1.5">
          <Allergy />
          <span class="text-black-secondary font-bold">{$_('menu.allergy')}</span>
        </div>
        <div class="flex gap-1">
          {#each item.allergyInfo as allergy}
            <div
              class="px-2 py-1 font-bold text-[9px] border-solid border-black-secondary text-black-secondary border-2 rounded-xl"
            >
              {allergy}
            </div>
          {/each}
        </div>
      </div>
    {/if}
  {/if}
</div>
