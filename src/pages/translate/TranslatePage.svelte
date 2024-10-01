<script lang="ts">
  import ShotGuideCorrect from '../../assets/images/ShotGuideCorrect.svelte'
  import ShotGuideWrong from '../../assets/images/ShotGuideWrong.svelte'
  import {push} from 'svelte-spa-router'
  import {imageStore} from '../../store/image'
  import {_} from 'svelte-i18n'

  const {setImageSrc, setImageFile} = imageStore

  const onChangeInput = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0])
      const reader = new FileReader()
      reader.onload = function (event: any) {
        setImageSrc(event.target.result)
      }
      reader.readAsDataURL(event.target.files[0])
    }

    push(`/translate-progress`)
  }
</script>

<div class="w-full h-full px-5 py-[0.875rem] flex flex-col">
  <div class="flex flex-col mt-4">
    <h1 class="font-bold text-xl">{$_('translate.title.text')}</h1>
    <span class="text-black-secondary text-sm mt-2">{$_('translate.title.description')}</span>
  </div>
  <div class="mt-5 bg-gray-100 rounded-lg p-3 flex flex-col">
    <div class="rounded bg-gray-200 w-fit px-2 py-1.5">
      <span class="font-bold text-black-tertiary">{$_('translate.guide.text')}</span>
    </div>
    <div class="flex flex-col w-full items-center mt-4 text-center">
      <ShotGuideCorrect />
      <span class="text-black-secondary mt-5 mb-7">{$_('translate.guide.correct')}</span>
      <ShotGuideWrong />
      <span class="text-black-secondary mt-5">{$_('translate.guide.wrong')}</span>
    </div>
  </div>
  <!--  TODO: file input과 버튼 어떻게 할지 생각해보기-->
  <label
    class="rounded-lg bg-brand-point text-center text-white font-bold px-20 py-4 mt-auto mb-16"
  >
    {$_('translate.button')}
    <input
      on:change={onChangeInput}
      class="invisible hidden"
      id="file-input"
      type="file"
      accept="image/*"
    />
  </label>
</div>
