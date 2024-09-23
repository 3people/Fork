<script lang="ts">
  import {querystring} from 'svelte-spa-router'
  import {foods} from '../requests/mock/food'
  import {parseQueryString} from '../utils/url'
  import FBar from '../components/FBar.svelte'
  import FInfo from '../components/FInfo.svelte'
  import {restaurantMock} from '../requests/mock/restaurant'
  // import FButton from '../components/FButton.svelte'
  import {_} from 'svelte-i18n'

  const food = foods.find((food) => food.id === parseQueryString($querystring ?? '').id)

  // let showAll = false
  // $: displayedRestaurants = showAll ? restaurants : restaurants.slice(0, 5)

  // const handleShowAll = () => {
  //   showAll = true
  // }
</script>

<div class="w-full h-full flex flex-col">
  <img
    class="w-[22.5rem] h-[22.5rem] object-cover"
    src={food?.image}
    alt={$_(`food.card.${food?.id}.name`)}
  />
  <div class="flex flex-col mt-6 gap-2 px-5">
    <span class="text-brand-point text-xs font-bold">{food?.category}</span>
    <span class="font-bold text-xl">{$_(`food.card.${food?.id}.name`)}</span>
    <span class="text-base text-black-tertiary">{food?.pronounce}</span>
    <p class="text-sm text-black-secondary mb-[3.5rem]">
      {$_(`food.card.${food?.id}.description`)}
    </p>
  </div>
  <FBar />
  <div class="px-5 mt-7">
    <span class="font-bold text-lg">'{$_(`food.card.${food?.id}.name`)}' {$_(`food.popular`)}</span>
    <div class="mt-4 flex flex-col gap-3">
      {#each restaurantMock as item}
        <FInfo {item} />
      {/each}
    </div>
    <!--    <FButton class="mt-7" on:click={handleShowAll}>더보기</FButton>-->
  </div>
</div>
