<script lang="ts">
  import Logo from '../assets/icons/Logo.svelte'
  import ShotGuideCorrect from '../assets/images/ShotGuideCorrect.svelte'
  import ShotGuideWrong from '../assets/images/ShotGuideWrong.svelte'

  let src: any

  const onChangeInput = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader()
      reader.onload = function (event: any) {
        src = event.target.result
      }
      reader.readAsDataURL(event.target.files[0])
    }
  }
</script>

<div class="w-[22.5rem] px-5 py-[0.875rem] flex flex-col justify-center">
  <div class="flex items-center justify-between">
    <Logo />
    <div>드롭다운</div>
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
  <button class="rounded-lg bg-brand-point text-white font-bold px-20 py-4 mt-14"
    >메뉴판 이미지 선택하기</button
  >
  <input on:change={onChangeInput} type="file" accept="image/*" />
  {#if src}
    <img {src} alt="menu" />
  {/if}
</div>
