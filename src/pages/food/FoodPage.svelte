<script lang="ts">
  import {push, querystring} from 'svelte-spa-router'
  import {parseQueryString} from '../../utils/url'
  import FBar from '../../components/FBar.svelte'
  import FRestaurant from '../../components/FRestaurant.svelte'
  import FButton from '../../components/FButton.svelte'
  import {_, locale} from 'svelte-i18n'
  import {fetchKeywordSearch} from '../../requests/fetch/search'
  import type {Language} from '../../locale/types'
  import {foodData} from '../../requests/mock/food-data'
  import FSkeleton from '../../components/FSkeleton.svelte'
  import FImg from '../../components/FImg.svelte'
  import {getHomeFoodMock} from '../../requests/mock/home-mock'
  import {descriptionKey, nameKey} from './key-map'
  import {fetchFoodImageSearch} from '../../requests/fetch/search-food-image'

  let showAll = false
  let searchedImage: string | undefined

  $: name = food?.[nameKey[$locale as Language]]
  $: description = food?.[descriptionKey[$locale as Language]]
  $: pronounceKorean = food?.name

  // 이미지 mock
  $: mockData = getHomeFoodMock($locale as Language)
  $: mockImage = mockData.find((data) => String(data.id) === queryFoodId)?.image
  $: searchImage(pronounceKorean ?? '')
  $: image = mockImage || searchedImage || ''

  const queryFoodId = parseQueryString($querystring ?? '').id
  const food = foodData.find((data) => String(data.id) === queryFoodId)

  const getSearchResult = async (queryFoodId: string, locale?: string | null) => {
    if(!locale){
      return []
    }
    const result = await fetchKeywordSearch({
      keyword: foodData.filter((food) => queryFoodId === String(food.id))[0].name,
      locale: locale as Language,
      row: '10',
    })
    return result ?? []
  }

  const searchImage = async (name: string) => {
    searchedImage = await fetchFoodImageSearch({
      keyword: name,
    })
  }

  const handleShowAll = () => {
    showAll = !showAll
  }

  const onClickInfo = (event: CustomEvent) => {
    push(`/restaurant?id=${event?.detail}`)
  }
</script>

<div class="w-full h-full flex flex-col">
  <FImg
    class="w-full h-[22.5rem] object-cover"
    src={image}
    alt={String(name)}
  />
  <div class="flex flex-col mt-6 gap-2 px-5">
    <span class="text-brand-point text-xs font-bold">
      {food?.category}
    </span>
    <span class="font-bold text-xl">
      {name}
    </span>
    <span class="text-base text-black-tertiary">
      [{pronounceKorean}] {food?.pronounce}
    </span>
    <p class="text-sm text-black-secondary mb-[3.5rem]">
      {description}
    </p>
  </div>
  <FBar />
  <div class="px-5 mt-7 pb-12">
    <span class="font-bold text-lg">
      '{name}' {$_(`food.popular`)}
    </span>
    <div class="mt-4 flex flex-col gap-3">
      {#await getSearchResult(queryFoodId, $locale)}
        <!-- eslint-disable no-unused-vars -->
        {#each Array(5) as _}
          <FSkeleton />
        {/each}
      {:then restaurants}
        {#each showAll ? restaurants : restaurants.slice(0, 5) as item}
          <FRestaurant contentId={item.contentId} on:click={onClickInfo} />
        {/each}
      {/await}
    </div>
    <FButton class="mt-7 mb-5" on:click={handleShowAll}>더보기</FButton>
  </div>
</div>
