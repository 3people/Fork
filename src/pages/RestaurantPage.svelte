<script lang="ts">
  import {querystring} from 'svelte-spa-router'
  import {parseQueryString} from '../utils/url'
  import Location from '../assets/icons/Location.svelte'
  import Phone from '../assets/icons/Phone.svelte'
  import Watch from '../assets/icons/Watch.svelte'
  import Calendar from '../assets/icons/Calendar.svelte'
  import {onMount} from 'svelte'
  import {
    fetchRestaurantCommonInfo,
    fetchRestaurantDetailInfo,
  } from '../requests/fetch/restaurant-info'
  import type {
    RestaurantCommonInfo,
    RestaurantDetailInfo,
  } from '../requests/normalize/restaurant-info'
  import FBar from '../components/FBar.svelte'
  import {locale} from 'svelte-i18n'
  import type {Language} from '../locale/types'

  let id = parseQueryString($querystring ?? '').id
  let detailInfo: RestaurantDetailInfo
  let commonInfo: RestaurantCommonInfo

  onMount(async () => {
    const params = {
      contentId: id,
      locale: $locale as Language,
      contentTypeId: $locale === 'ko' ? '39' : '82',
    }
    const result = await fetchRestaurantDetailInfo(params)
    const result2 = await fetchRestaurantCommonInfo(params)
    detailInfo = result
    commonInfo = result2
  })

  const onClickCopy = () => {
    let textToCopy = commonInfo.firstAddress ?? ''
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert('텍스트가 클립보드에 복사되었습니다')
      })
      .catch((err) => {
        console.error('복사 실패', err)
      })
  }
</script>

{#if commonInfo && detailInfo}
  <div class="w-full flex flex-col">
    <img
      src={commonInfo.firstImage}
      class="w-full h-[22.5rem] object-cover"
      alt={commonInfo.title}
    />
    <div class="flex flex-col mt-6 px-5 mb-14">
      <!--      TODO: 분류-->
      <!--      <span class="text-brand-point font-bold text-xs mb-2">{commonInfo.title}</span>-->
      <span class="font-bold text-xl mb-4">{commonInfo.title}</span>
      <div class="flex flex-col gap-2">
        <div class="flex items-start">
          <Location />
          <span class="basis-60 ml-2 text-black-secondary text-sm">{commonInfo.firstAddress}</span>
          <button
            class="flex-shrink-0 text-brand-blue text-sm whitespace-nowrap ml-1"
            on:click={onClickCopy}
          >
            복사
          </button>
        </div>
        <div class="flex items-center">
          <Phone />
          <span class="ml-2 text-black-secondary text-sm">{commonInfo.phoneNumber}</span>
        </div>
        <div class="flex items-start">
          <Watch class="mr-2 flex-shrink-0" />
          <div class="flex flex-col">
            <span class="text-black-secondary text-sm">{@html detailInfo.openTime}</span>
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <Calendar />
          <span class="text-black-secondary text-sm">{detailInfo.dayOff}</span>
        </div>
      </div>
    </div>
    <FBar />
  </div>
{/if}
