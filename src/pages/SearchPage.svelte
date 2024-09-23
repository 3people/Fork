<script lang="ts">
  import {push, querystring} from 'svelte-spa-router'
  import {parseQueryString} from '../utils/url'
  import FSearchInput from '../components/FSearchInput.svelte'
  import ForkLogo from '../assets/icons/ForkLogo.svelte'
  import {fetchKeywordSearch} from '../requests/fetch/search'
  import FInfo from '../components/FInfo.svelte'
  import {locale} from 'svelte-i18n'
  import type {Language} from '../locale/types'

  let searchResult: any = []
  $: keyword = parseQueryString($querystring ?? '')?.keyword

  const getSearchResult = async () => {
    const result = await fetchKeywordSearch({keyword, locale: $locale as Language})
    searchResult = result
  }

  $: if (keyword) {
    getSearchResult()
  }

  const onInput = async ({detail: value}: CustomEvent) => {
    keyword = value
  }

  const onClickInfo = ({detail: restaurantInfo}: CustomEvent) => {
    push(`/restaurant?id=${restaurantInfo.contentId}`)
  }
</script>

<div class="mt-4">
  <FSearchInput value={keyword} on:input={onInput} />
  {#if searchResult.length > 0}
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
