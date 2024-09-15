<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import type {Food} from '../requests/mock/food'

  const dispatch = createEventDispatcher()
  export let item: Food

  const onClickCard = () => {
    dispatch('click', item)
  }
</script>

<button
  class="rounded-lg w-[17.5rem] h-[27rem] text-white bg-cover bg-no-repeat bg-center flex-[0_0_100%]"
  style={`background-image: url(${item.image})`}
  on:click={onClickCard}
>
  <div class="p-4 flex flex-col w-full h-full justify-between text-left">
    <span class="font-bold text-xl">{@html item.title}</span>
    <div class="mt-auto">
      <span class="font-bold text-lgv">{item.name}</span>
      <p class="mt-2 text-sm">{item.description}</p>
    </div>
  </div>
</button>
