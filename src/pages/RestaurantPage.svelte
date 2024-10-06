<script lang="ts">
  import {querystring} from 'svelte-spa-router'
  import {parseQueryString} from '../utils/url'
  import Location from '../assets/icons/Location.svelte'
  import Phone from '../assets/icons/Phone.svelte'
  import Watch from '../assets/icons/Watch.svelte'
  import Calendar from '../assets/icons/Calendar.svelte'
  import {fetchRestaurant} from '../requests/fetch/restaurant'
  import {fetchCategoryString} from '../requests/fetch/category-string'
  import FBar from '../components/FBar.svelte'
  import {locale} from 'svelte-i18n'
  import type {Language} from '../locale/types'
  import ForkLogo from '../assets/icons/ForkLogo.svelte'
  import Info from '../assets/icons/Info.svelte'
  import FSkeleton from '../components/FSkeleton.svelte'
  import FMenu from '../components/FMenu.svelte'
  import FImg from '../components/FImg.svelte'
  import {imgUrl2Text, translate} from '../requests/fetch/translate'
  import {imageStore} from '../store/image'
  import {getRelationById} from '../requests/fetch/id-menu-relation'
  import type {Relation} from '../requests/normalize/id-menu-relation'
  import FKakaoMap from '../components/FKakaoMap.svelte'
  import { createQuery } from '@tanstack/svelte-query'

  /**
   * TODO: 리팩토링이 빠를까 자살이 빠를까 생각해보기
   */
  let contentId = parseQueryString($querystring ?? '').id
  let relation: Relation

  $: getRelation(contentId, $locale as Language)
  $: imageList = (relation?.images ?? []).map(
    (image: string) =>
      `https://img1.kakaocdn.net/cthumb/local/R736x0.q50/?fname=${encodeURIComponent(image)}`,
  )

  $: restaurant = $query?.data ?? {}
  $: category = $categoryQuery?.data
  $: ({cat1, cat2, cat3} = restaurant ?? {})
  
  $: query = createQuery({
    queryKey: ['restaurant', contentId, $locale],
    queryFn: () => fetchRestaurant({contentId, locale: $locale as Language}),
  })
  $: categoryQuery = createQuery({
    queryKey: ['category', {cat1, cat2, cat3}],
    queryFn: () => fetchCategoryString({cat1, cat2, cat3}),
  })


  const getRelation = async (id: string, language: Language) => {
    getRelationById(id, language).then((data) => {
      relation = data as any
    })
  }

  const onClickCopy = () => {
    let textToCopy = restaurant.firstAddress ?? ''
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert('텍스트가 클립보드에 복사되었습니다.')
      })
      .catch((err) => {
        console.error('복사에 실패했습니다.\n잠시 후 다시 시도해주세요.', err)
      })
  }

  const getToday = () => {
    const today = new Date()
    return `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`
  }

  const {getAiReview} = imageStore

  const getMenuInfo = async (image: string) => {
    if (!image) {
      return Promise.reject(null)
    }
    const result = await imgUrl2Text({imageUrl: image})
    return await translate({result})
  }
</script>

{#if restaurant}
  <div class="w-full h-full flex flex-col">
    <FImg
      src={restaurant.firstImage ?? ''}
      class="w-full h-[22.5rem] object-cover"
      alt={restaurant.title}
    />
    <div class="flex flex-col mt-6 mb-14 px-5">
      <span class="text-brand-point font-bold text-xs mb-2">{category ?? ''}</span>
      <span class="font-bold text-xl mb-4">{restaurant.title ?? ''}</span>
      <div class="flex flex-col gap-2">
        {#if restaurant.firstAddress}
          <div class="flex items-start">
            <Location class="mr-2 flex-shrink-0" />
            <span class="text-black-secondary text-sm">{restaurant.firstAddress}</span>
            <button
              class="flex-shrink-0 text-brand-blue text-sm whitespace-nowrap ml-1"
              on:click={onClickCopy}
            >
              복사
            </button>
          </div>
        {/if}
        {#if restaurant.phoneNumber}
          <div class="flex items-start">
            <Phone class="mr-2 flex-shrink-0" />
            <span class="text-black-secondary text-sm">{@html restaurant.phoneNumber}</span>
          </div>
        {/if}
        {#if restaurant.openTime}
          <div class="flex items-start">
            <Watch class="mr-2 flex-shrink-0" />
            <div class="flex flex-col">
              <span class="text-black-secondary text-sm">{@html restaurant.openTime}</span>
            </div>
          </div>
        {/if}
        {#if restaurant.dayOff}
          <div class="flex gap-2 items-center">
            <Calendar />
            <span class="text-black-secondary text-sm">{restaurant.dayOff}</span>
          </div>
        {/if}
      </div>
    </div>
    <FBar />
    <div class="flex flex-col px-5 mt-7 w-full pb-2">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center">
          <ForkLogo />
          <span class="font-santokki text-brand-point text-lg leading-6">포크</span>
          <span class="font-bold text-lg">&nbsp;메뉴</span>
        </div>
        <span class="text-[0.5rem] text-black-tertiary">업데이트 {getToday()}</span>
      </div>
      <div class="mt-3 flex gap-1 w-full">
        <Info class="flex-shrink-0" />
        <span class="text-xs text-black-tertiary">
          알레르기 유발 성분은 조리법에 따라 상이할 수 있습니다. 정확한 정보는 반드시 가게에
          문의하시기 바랍니다.
        </span>
      </div>
      <div class="mt-3 flex gap-1">
        {#each imageList as src, index}
          <FImg
            class="w-[6.25rem] h-[6.25rem] rounded object-cover"
            {src}
            alt="menu {index} image"
          />
        {/each}
      </div>
      <div class="flex flex-col mt-6 gap-3">
        {#await getMenuInfo(imageList[0])}
          <!-- eslint-disable no-unused-vars -->
          {#each Array(5) as _}
            <FSkeleton />
          {/each}
          <!-- eslint-disable no-unused-vars -->
        {:then result}
          {#await getAiReview()}
            <FSkeleton />
          {:then review}
            <div class="bg-[#ff4a221a] rounded-lg p-3">
              <div class="flex items-center">
                <ForkLogo />
                <span class="font-santokki text-brand-point text-lg leading-6">포크</span>
                <span class="font-bold text-lg">&nbsp;AI 가이드</span>
              </div>
              <p class="text-black-tertiary text-xs">
                {Object.values(review).filter(Boolean).join(' ')}
              </p>
            </div>
          {/await}
          {#if result.title}
            <div class="bg-gray-200 rounded-lg p-3 flex flex-col">
              <span class="font-bold mb-1.5">{result.title}</span>
              <!--{#if result.subText}-->
              <!--  <span class="text-black-tertiary text-xs">{result.subText}</span>-->
              <!--{/if}-->
            </div>
          {/if}
          {#each result.menuList as item}
            <FMenu {item} />
          {/each}
          <!-- eslint-disable no-unused-vars -->
          <!--{:catch error}-->
          <!--  <div class="bg-[#ff4a221a] rounded-lg p-3">-->
          <!--    <span class="text-black-tertiary text-xs">메뉴 정보가 없습니다</span>-->
          <!--  </div>-->
        {/await}
      </div>
    </div>
    <FBar class="my-7" />
    <div class="flex flex-col pb-7">
      <span class="text-lg font-bold px-5">위치</span>
      {#if restaurant?.mapX && restaurant?.mapY}
        <div class="w-full h-[12.5rem] mt-3">
          <FKakaoMap class="w-full h-full" longitude={restaurant.mapX} latitude={restaurant.mapY} />
        </div>
      {/if}
    </div>
  </div>
{/if}
