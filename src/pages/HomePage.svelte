<script lang="ts">
  import Logo from '../assets/icons/Logo.svelte'
  import ShotGuideCorrect from '../assets/images/ShotGuideCorrect.svelte'
  import ShotGuideWrong from '../assets/images/ShotGuideWrong.svelte'
  import ChevronLeft from '../assets/icons/ChevronLeft.svelte'
  import SButton from '../components/SButton.svelte'
  import {push} from 'svelte-spa-router'
  import {_, locale} from 'svelte-i18n'

  let src: any | undefined = undefined
  $: isModalOpen = !!src

  const onChangeInput = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = function (event: any) {
        src = event.target.result
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }

  const onClick = async () => {
    await push(`/menu?src=${src}`)
  }

  const setLocale = () => {
    locale.set('en')
  }
</script>

<div class="px-5 py-[0.875rem] flex flex-col justify-center">
  <div class="flex items-center justify-between">
    <Logo />
    <button on:click={setLocale}>{$_('home.dropdown')}</button>
  </div>
  <div class="flex flex-col mt-4">
    <h1 class="font-bold text-xl">메뉴판 번역</h1>
    <span class="text-black-secondary text-sm mt-2">번역할 메뉴판 이미지를 준비해주세요.</span>
  </div>
  <div class="mt-5 bg-gray-100 rounded-lg p-3 flex flex-col">
    <div class="rounded bg-gray-200 w-fit px-2 py-1.5">
      <span class="font-bold text-black-tertiary">이미지 촬영 가이드</span>
    </div>
    <div class="flex flex-col w-full items-center mt-4">
      <ShotGuideCorrect />
      <span class="text-black-secondary mt-5 mb-7">메뉴판이 화면에 꽉 차도록 촬영해주세요.</span>
      <ShotGuideWrong />
      <span class="text-black-secondary mt-5">빛이 반사되지 않도록 주의하세요.</span>
    </div>
  </div>
  <!--  TODO: file input과 버튼 어떻게 할지 생각해보기-->
  <label class="rounded-lg bg-brand-point text-white font-bold px-20 py-4 mt-14">
    메뉴판 이미지 선택하기
    <input
      on:change={onChangeInput}
      class="invisible hidden"
      id="file-input"
      type="file"
      accept="image/*"
    />
  </label>
</div>
{#if isModalOpen}
  <!--{#if true}-->
  <!--  TODO: 모달로 빼기-->
  <div class="w-full h-full flex justify-center absolute top-0 left-0 bg-white">
    <div class="w-[22.5rem] flex flex-col">
      <div class="pl-5 flex py-3.5 gap-2">
        <ChevronLeft />
        <div class="font-bold h-10">이미지 선택</div>
      </div>
      <div class="w-[22.5rem] flex flex-col">
        <div class="h-[33rem] flex items-center justify-center object-contain">
          <img {src} alt="menu" />
        </div>
        <SButton on:click={onClick}>확인</SButton>
      </div>
    </div>
  </div>
{/if}
