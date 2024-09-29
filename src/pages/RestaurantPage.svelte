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
  import ForkLogo from '../assets/icons/ForkLogo.svelte'
  import Info from '../assets/icons/Info.svelte'
  import {data} from '../requests/mock/menu'
  import FSkeleton from '../components/FSkeleton.svelte'
  import FMenu from '../components/FMenu.svelte'
  import FImg from '../components/FImg.svelte'

  let id = parseQueryString($querystring ?? '').id
  let detailInfo: RestaurantDetailInfo
  let commonInfo: RestaurantCommonInfo
  let imageList = data.find((item: any) => item.ko_contentid === id)?.menu_images ?? []

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

  const getToday = () => {
    const today = new Date()
    return `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`
  }

  const asyncTest = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    return 'Hello from async!'
  }
</script>

<!--{#if true}-->
{#if commonInfo && detailInfo}
  <div class="w-full h-full flex flex-col">
    <FImg
      src={commonInfo.firstImage ?? ''}
      class="w-full h-[22.5rem] object-cover"
      alt={commonInfo.title}
    />
    <div class="flex flex-col mt-6 mb-14 px-5">
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
    <div class="flex flex-col px-5 mt-7 w-full pb-12">
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
        {#await asyncTest()}
          {#each Array(5) as _}
            <FSkeleton />
          {/each}
          <!-- eslint-disable no-unused-vars -->
        {:then result}
          <div class="bg-[#ff4a221a] rounded-lg p-3">
            <div class="flex items-center">
              <ForkLogo />
              <span class="font-santokki text-brand-point text-lg leading-6">포크</span>
              <span class="font-bold text-lg">&nbsp;AI 가이드</span>
            </div>
            <span class="text-black-tertiary text-xs">test</span>
          </div>
          <FMenu
            item={{
              name: 'test',
              price: 10000,
              description: 'test',
              allergyList: ['test', 'test'],
            }}
          />
        {/await}
      </div>
    </div>
  </div>
{/if}
