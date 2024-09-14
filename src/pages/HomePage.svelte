<script lang="ts">
  import FCard from '../components/FCard.svelte'
  import emblaCarouselSvelte from 'embla-carousel-svelte'
  import {foods} from '../requests/mock/food'
</script>

<div class="w-full h-full px-5 py-[0.875rem] flex flex-col justify-center">
  <div class="overflow-hidden" use:emblaCarouselSvelte>
    <div class="flex gap-3">
      {#each foods as item}
        <FCard {item} />
      {/each}
    </div>
  </div>
</div>
