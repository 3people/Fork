<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import {_, locale} from 'svelte-i18n'
  import {foodData, type FoodItem} from '../requests/mock/food-data'
  import type {Language} from '../locale/types'
  import { descriptionKey, nameKey } from '../pages/food/key-map'

  export let title: string = ''
  export let id: string = ''
  export let image: string = ''

  $: name = food?.[nameKey[$locale as Language]]
  $: description = food?.[descriptionKey[$locale as Language]]

  const dispatch = createEventDispatcher()
  const food = foodData.find((data) => String(data.id) === id)

  const onClickCard = () => {
    dispatch('click', id)
  }
</script>

<button
  class="rounded-lg min-w-[17.5rem] w-[17.5rem] h-[27rem] text-white bg-cover bg-no-repeat bg-center"
  style={`background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image});background-size:cover`}
  on:click={onClickCard}
>
  <div class="p-4 flex flex-col w-full h-full justify-between text-left">
    <span class="font-bold text-xl">{@html title}</span>
    <div class="mt-auto">
      <span class="font-bold text-lgv">{name}</span>
      <p class="mt-2 text-sm">{description}</p>
    </div>
  </div>
</button>