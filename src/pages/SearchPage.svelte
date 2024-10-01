<script lang="ts">
  import {push, replace, querystring} from 'svelte-spa-router'
  import {parseQueryString} from '../utils/url'
  import FSearchInput from '../components/FSearchInput.svelte'
  import ForkLogo from '../assets/icons/ForkLogo.svelte'
  import {fetchKeywordSearch} from '../requests/fetch/search'
  import FInfo from '../components/FInfo.svelte'
  import type {Language} from '../locale/types'
  import {foodData} from '../requests/mock/food-data'
  import FSkeleton from '../components/FSkeleton.svelte'
  import {_, locale} from 'svelte-i18n'
  import {getHomeFoodMock} from '../requests/mock/home-mock'
  import {descriptionKey, nameKey} from './food/key-map'

  $: keyword = parseQueryString($querystring ?? '')?.keyword
  $: foodInfo = foodData.find((food) => food.name === keyword)

  $: mockData = getHomeFoodMock($locale as Language)
  $: image = mockData.find((data) => String(data.name) === keyword)?.image ?? ''
  $: name = foodInfo?.[nameKey[$locale as Language]]
  $: description = foodInfo?.[descriptionKey[$locale as Language]]

  const getSearchResult = async (keyword: string, language?: Language | null | string) => {
    const result = await fetchKeywordSearch({keyword, locale: language as Language, row: '20'})
    return result ?? []
  }

  const onEnter = ({detail: value}: CustomEvent) => {
    replace(`/search?keyword=${value}`)
  }

  const onClickInfo = ({detail: info}: CustomEvent) => {
    return info.type === 'restaurant'
      ? push(`/restaurant?id=${info.contentId}`)
      : push(`/food?id=${info.id}`)
  }
</script>

<div class="w-full px-4 mt-4 mb-16">
  <FSearchInput value={keyword} on:enter={onEnter} />
  <div class="mt-7">
    <span class="font-bold text-lg block mt-4 mb-4">'{keyword}' {$_(`search.foodInfo`)}</span>
  </div>
  {#if name}
    <FInfo
      type="food"
      item={{
        title: name,
        firstImage: image,
        description: description,
        category: foodInfo?.category,
        id: foodInfo?.id,
      }}
      on:click={onClickInfo}
    />
  {/if}
  <div class="flex flex-col mt-14">
    <span class="font-bold text-lg mb-4">'{keyword}' {$_(`search.restaurant`)}</span>
    {#await getSearchResult(keyword, $locale)}
      <div class="flex flex-col gap-3">
        {#each Array(3) as _}
          <FSkeleton />
        {/each}
      </div>
    {:then searchResult}
      {#if searchResult.length > 0}
        <div class="flex flex-col gap-3">
          {#each searchResult as item}
            <FInfo {item} on:click={onClickInfo} />
          {/each}
        </div>
      {:else}
        <div class="flex flex-col mt-[8.25rem] w-full h-full items-center gap-2">
          <ForkLogo class="w-12 h-12" />
          <span>검색 결과가 없습니다.</span>
        </div>
      {/if}
    {/await}
  </div>
</div>
