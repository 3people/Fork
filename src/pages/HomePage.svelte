<script lang="ts">
  import FCard from '../components/FCard.svelte'
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import {foods} from '../requests/mock/food'
  import {push} from 'svelte-spa-router'
  import FSearchInput from '../components/FSearchInput.svelte'
  import FInfo from '../components/FInfo.svelte'
  // import {fetchRestaurants} from '../requests/fetch/restaurant-list'
  import {_} from 'svelte-i18n'
  import {restaurantMock} from '../requests/mock/restaurant'

  emblaCarouselSvelte.globalOptions = {dragFree: true}

  const onClickCard = ({detail: foodInfo}: CustomEvent) => {
    if (foodInfo.id) {
      push(`/food?id=${foodInfo.id}`)
    }
  }

  const onEnter = ({detail: keyword}: CustomEvent) => {
    if (keyword) {
      push(`/search?keyword=${keyword}`)
    }
  }

  // const getRestaurants = async () => {
  //   // const result = await fetchRestaurants({})
  //   // return result
  // }

  const onClickInfo = ({detail: restaurantInfo}: CustomEvent) => {
    push(`/restaurant?id=${restaurantInfo.contentId}`)
  }
</script>

<div class="w-full px-5 py-4 flex flex-col justify-center">
  <FSearchInput on:enter={onEnter} />
  <div class="embla overflow-hidden mt-8" use:emblaCarouselSvelte>
    <div class="flex gap-3">
      {#each foods as item}
        <FCard {item} on:click={onClickCard} />
      {/each}
    </div>
  </div>
  <div class="mt-12">
    <span class="font-bold text-lg">{$_('home.popular')}</span>
    <div class="overflow-hidden" use:emblaCarouselSvelte>
      <div class="flex mt-4 gap-3 w-[11.25rem]">
        <!--{#await getRestaurants() then restaurants}-->
        <!--  {#each restaurants as item}-->
        <!--    <FInfo {item} flow="vertical" on:click={onClickInfo} />-->
        <!--  {/each}-->
        <!--{/await}-->
        {#each restaurantMock as item}
          <FInfo {item} flow="vertical" on:click={onClickInfo} />
        {/each}
      </div>
    </div>
  </div>
</div>
