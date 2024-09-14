<script lang="ts">
  import {querystring} from 'svelte-spa-router'
  import {foods} from '../requests/mock/food'
  import {parseQueryString} from '../utils/url'
  import FBar from '../components/FBar.svelte'
  import FInfo from '../components/FInfo.svelte'
  import {restaurants} from '../requests/mock/restaurant'
  import FButton from '../components/FButton.svelte'

  const food = foods.find((food) => food.id === parseQueryString($querystring ?? '').id)

  let showAll = false
  $: displayedRestaurants = showAll ? restaurants : restaurants.slice(0, 5)

  const handleShowAll = () => {
    showAll = true
  }
</script>

<div class="w-full h-full flex flex-col">
  <img class="w-[22.5rem] h-[22.5rem] object-cover" src={food?.image} alt={food?.name} />
  <div class="flex flex-col mt-6 gap-2 px-5">
    <span class="text-brand-point text-xs font-bold">{food?.name}</span>
    <span class="font-bold text-xl">{food?.name}</span>
    <span class="text-lg text-black-tertiary">{food?.name}</span>
    <p class="text-sm text-black-secondary mb-[3.5rem]">{food?.description}</p>
  </div>
  <FBar />
  <div class="px-5 mt-7">
    <span class="font-bold text-lg">'{food?.name}' 맛집</span>
    <div class="mt-4 flex flex-col gap-3">
      {#each displayedRestaurants as item, index}
        <FInfo {item} />
      {/each}
    </div>
    <FButton class="mt-7" on:click={handleShowAll}>더보기</FButton>
  </div>
</div>
