<script lang="ts">
  import FCard from '../components/FCard.svelte'
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import {foods} from '../requests/mock/food'
  import {push} from 'svelte-spa-router'
  import FSearchInput from '../components/FSearchInput.svelte'
  import FInfo from '../components/FInfo.svelte'
  import {restaurants} from '../requests/mock/restaurant'

  emblaCarouselSvelte.globalOptions = {dragFree: true}

  const onClickCard = ({detail: foodInfo}: CustomEvent) => {
    if (foodInfo.id) {
      push(`/detail?id=${foodInfo.id}`)
    }
  }

  const onEnter = ({detail: keyword}: CustomEvent) => {
    if (keyword) {
      push(`/search?keyword=${keyword}`)
    }
  }
</script>

<div class="w-full h-full px-5 py-[0.875rem] flex flex-col justify-center">
  <div class="embla overflow-hidden" use:emblaCarouselSvelte>
    <div class="flex gap-3">
      {#each foods as item}
        <FCard {item} on:click={onClickCard} />
      {/each}
    </div>
  </div>
  <FSearchInput class="mt-10" on:enter={onEnter} />
  <div class="mt-10">
    <span class="font-bold text-lg">지금 인기있는 맛집</span>
    <div class="overflow-hidden" use:emblaCarouselSvelte>
      <div class="flex mt-4 gap-3">
        {#each restaurants as item}
          <FInfo {item} flow="vertical" />
        {/each}
      </div>
    </div>
  </div>
</div>
