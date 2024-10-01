<script lang="ts">
  import {push, querystring} from 'svelte-spa-router'
  import {parseQueryString} from '../utils/url'
  import FSearchInput from '../components/FSearchInput.svelte'
  import ForkLogo from '../assets/icons/ForkLogo.svelte'
  import {fetchKeywordSearch} from '../requests/fetch/search'
  import FInfo from '../components/FInfo.svelte'
  import {locale} from 'svelte-i18n'
  import type {Language} from '../locale/types'
  import {foodMock} from '../requests/mock/food-mock'
  import {onDestroy} from 'svelte'

  let searchResult: any = []
  let searchTimeout: ReturnType<typeof setTimeout> | null = null

  $: keyword = parseQueryString($querystring ?? '')?.keyword

  $: foodInfo = foodMock.find((food) => food.name === keyword)

  const getSearchResult = async () => {
    const result = await fetchKeywordSearch({keyword, locale: $locale as Language, row: '5'})
    searchResult = result
  }

  const debouncedSearch = (keyword: string) => {
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }
    searchTimeout = setTimeout(() => {
      if (keyword) {
        getSearchResult()
      }
    }, 2000)
  }

  $: if (keyword !== undefined) {
    debouncedSearch(keyword)
  }

  onDestroy(() => {
    if (searchTimeout) {
      clearTimeout(searchTimeout)
    }
  })

  const onInput = async ({detail: value}: CustomEvent) => {
    keyword = value
  }

  const onClickInfo = ({detail: info}: CustomEvent) => {
    return info.type === 'restaurant'
      ? push(`/restaurant?id=${info.contentId}`)
      : push(`/food?id=${info.id}`)
  }
</script>

<div class="w-full px-4 mt-4 mb-16">
  <FSearchInput value={keyword} on:input={onInput} />
  <div class="mt-7">
    <span class="font-bold text-lg block mt-4 mb-4">'{keyword}' 음식 정보</span>
  </div>
  {#if searchResult.length > 0}
    {#if foodInfo?.name}
      <FInfo
        type="food"
        item={{
          title: foodInfo?.name,
          firstImage: '',
          description: foodInfo?.description,
          category: foodInfo?.category,
          id: foodInfo?.id,
        }}
        on:click={onClickInfo}
      />
    {/if}
    <div class="flex flex-col mt-14">
      <span class="font-bold text-lg mb-4">'{keyword}' 식당</span>
      <div class="flex flex-col gap-3">
        {#each searchResult as item}
          <FInfo {item} on:click={onClickInfo} />
        {/each}
      </div>
    </div>
  {:else}
    <div class="flex flex-col mt-[8.25rem] w-full h-full items-center gap-2">
      <ForkLogo class="w-12 h-12" />
      <span>검색 결과가 없습니다.</span>
    </div>
  {/if}
</div>
