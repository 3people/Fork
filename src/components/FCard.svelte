<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import type {Food} from '../requests/mock/food'
  import {_} from 'svelte-i18n'

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
    <span class="font-bold text-xl">{@html $_(`food.card.${item.id}.top`)}</span>
    <div class="mt-auto">
      <span class="font-bold text-lgv">{$_(`food.card.${item.id}.name`)}</span>
      <p class="mt-2 text-sm">{$_(`food.card.${item.id}.description`)}</p>
    </div>
  </div>
</button>
