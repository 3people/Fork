<script lang="ts">
  import {push, querystring} from 'svelte-spa-router'
  import {foods} from '../requests/mock/food'
  import {parseQueryString} from '../utils/url'
  import FBar from '../components/FBar.svelte'
  import FInfo from '../components/FInfo.svelte'
  import FButton from '../components/FButton.svelte'
  import {_, locale} from 'svelte-i18n'
  import {fetchKeywordSearch} from '../requests/fetch/search'
  import type {Language} from '../locale/types'
  import {foodMock} from '../requests/mock/food-mock'
  import FSkeleton from '../components/FSkeleton.svelte'
  import FImg from '../components/FImg.svelte'

  const queryFoodId = parseQueryString($querystring ?? '').id
  const food = foods.find((food) => food.id === queryFoodId)
  const foodMockInfo = foodMock.find((food) => String(food.id) === queryFoodId)

  let showAll = false

  const getSearchResult = async () => {
    const result = await fetchKeywordSearch({
      keyword: foodMock.filter((food) => queryFoodId === String(food.id))[0].name,
      locale: $locale as Language,
      row: '10',
    })
    return result ?? []
  }

  const handleShowAll = () => {
    showAll = !showAll
  }

  const onClickInfo = ({detail: info}: CustomEvent) => {
    push(`/restaurant?id=${info.contentId}`)
  }
</script>

<div class="w-full h-full flex flex-col">
  <FImg
    class="w-full h-[22.5rem] object-cover"
    src={food?.image ?? ''}
    alt={$_(`food.card.${food?.id}.name`)}
  />
  <div class="flex flex-col mt-6 gap-2 px-5">
    <span class="text-brand-point text-xs font-bold">
      {food?.category ?? foodMockInfo?.category}
    </span>
    <span class="font-bold text-xl">
      {food ? $_(`food.card.${food?.id}.name`) : foodMockInfo?.name}
    </span>
    <span class="text-base text-black-tertiary">
      {food ? food?.pronounce : foodMockInfo?.pronounce}
    </span>
    <p class="text-sm text-black-secondary mb-[3.5rem]">
      {food ? $_(`food.card.${food?.id}.description`) : foodMockInfo?.description}
    </p>
  </div>
  <FBar />
  <div class="px-5 mt-7 pb-12">
    <span class="font-bold text-lg">
      '{food ? $_(`food.card.${food?.id}.name`) : foodMockInfo?.name}' {$_(`food.popular`)}
    </span>
    <div class="mt-4 flex flex-col gap-3">
      {#await getSearchResult()}
        <!-- eslint-disable no-unused-vars -->
        {#each Array(5) as _}
          <FSkeleton />
        {/each}
      {:then restaurants}
        {#each showAll ? restaurants : restaurants.slice(0, 5) as item}
          <FInfo {item} on:click={onClickInfo} />
        {/each}
      {/await}
    </div>
    <FButton class="mt-7 mb-5" on:click={handleShowAll}>더보기</FButton>
  </div>
</div>
