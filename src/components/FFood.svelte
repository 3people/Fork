<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import FImg from './FImg.svelte'
  import {_, locale} from 'svelte-i18n'
  import {descriptionKey, nameKey} from '../pages/food/key-map'
  import type {Language} from '../locale/types'
  import {getHomeFoodMock} from '../requests/mock/home-mock'
  import {fetchFoodImageSearch} from '../requests/fetch/search-food-image'

  interface Food {
    id: string
    category: string
    description: string
  }

  export let food: Food | any

  let searchedImage: string | undefined

  $: koreanName = food.name
  $: name = food[nameKey[$locale as Language]]
  $: description = food[descriptionKey[$locale as Language]]

  $: mockImage = mockData.find((data) => String(data.name) === koreanName)?.image ?? ''
  $: image = mockImage || searchedImage || ''
  $: searchImage(koreanName ?? '')
  $: mockData = getHomeFoodMock($locale as Language)

  const searchImage = async (name: string) => {
    searchedImage = await fetchFoodImageSearch({
      keyword: name,
    })
  }

  const dispatch = createEventDispatcher()

  const onClick = () => {
    dispatch('click', food.id)
  }
</script>

<button
  class="flex gap-4 flex-[0_0_100%] overflow-hidden"
  on:click={onClick}
>
  <FImg
    class="min-w-[5.625rem] w-[5.625rem] h-[5.625rem] object-cover rounded-lg"
    src={image}
    alt={name}
  />
  <div class="flex flex-col gap-1 text-left overflow-hidden">
    <span class="text-brand-point font-bold text-[0.625rem]">{food.category}</span>
    <span class="font-bold text-base truncate">{name}</span>
    <span class="text-xs text-black-secondary line-clamp-3">{description}</span>
  </div>
</button>
