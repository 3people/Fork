<script lang="ts">
  import DollarSign from '../assets/icons/DollarSign.svelte'
  import ChevronDown from '../assets/icons/ChevronDown.svelte'
  import Option from '../assets/icons/Option.svelte'
  import Allergy from '../assets/icons/Allergy.svelte'
  import {_, locale} from 'svelte-i18n'
  import {foodData} from '../requests/mock/food-data'
  import MenuInfo from '../assets/icons/MenuInfo.svelte'
  import {push} from 'svelte-spa-router'

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

  let isExpanded = false
  let foodInfo = foodData.find((food) => food.name === item.name)

  const getAdditionalInfo = () => {
    switch ($locale) {
      case 'ko':
        return foodInfo?.description
      case 'en':
        return foodInfo?.description_en
      case 'zh':
        return foodInfo?.description_zh
      case 'ja':
        return foodInfo?.description_ja
      default:
        return foodInfo?.description
    }
  }

  const onExpand = () => {
    isExpanded = !isExpanded
  }

  const onViewMore = () => {
    push(`/food?id=${foodInfo?.id}`)
  }
</script>

<div class="w-full bg-gray-100 rounded-lg p-3 flex flex-col gap-[0.475rem]">
  <div class="flex justify-between">
    <span class="font-bold">{item.name}</span>
    {#if item.optionList?.length || item.allergyInfo?.length || foodInfo}
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
    {#if foodInfo}
      <div class="flex flex-col mt-6">
        <div class="flex gap-1 items-center mb-1.5">
          <MenuInfo />
          <span class="text-black-secondary font-bold">{$_('menu.additionalInfo')}</span>
        </div>
        <div class="flex flex-col text-black-tertiary text-sm">
          {getAdditionalInfo()}
        </div>
        <button
          class="mt-3 text-center py-2 w-[8.375rem] border-solid border-[0.5px] border-[#CACACA] rounded bg-white text-black-quaternary font-bold text-xs"
          on:click={onViewMore}
        >
          {$_('menu.viewDetails')}
        </button>
      </div>
    {/if}
  {/if}
</div>
