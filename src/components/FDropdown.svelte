<script lang="ts">
  import {_, locale} from 'svelte-i18n'
  import ko from '../assets/images/flag-ko.png'
  import en from '../assets/images/flag-en.png'
  import zh from '../assets/images/flag-zh.png'
  import ja from '../assets/images/flag-ja.png'
  import type {Language} from '../locale/types'
  import ChevronDown from '../assets/icons/ChevronDown.svelte'

  interface LanguageInfo {
    code: Language
    name: string
    src: string
  }

  const languageMap: LanguageInfo[] = [
    {code: 'ko', name: '한국어', src: ko},
    {code: 'en', name: 'English', src: en},
    {code: 'zh', name: '繁體中文', src: zh},
    {code: 'ja', name: '日本語', src: ja},
  ]

  let isOpen = false
  let currentLanguage: Language = 'ko'

  $: src = languageMap.find((lang) => lang.code === currentLanguage)?.src

  locale.subscribe((lang) => {
    if (lang) {
      currentLanguage = lang as Language
    }
  })

  const onToggle = () => {
    isOpen = !isOpen
  }

  const onClickLanguage = (code: Language) => {
    locale.set(code)
    onToggle()
  }
</script>

<div {...$$restProps} class={`w-[7.25rem] relative z-10 flex ${$$restProps.class}`}>
  <button
    class="flex items-center rounded-2xl bg-white px-2 py-1.5 w-full border-solid border-[1px] border-[#EFEFEF]"
    on:click={onToggle}
  >
    <div class="flex items-center mr-auto gap-1">
      <img class="w-5 h-5" {src} alt={currentLanguage} />
      <span class="text-black-secondary font-bold text-sm">{$_('header.language')}</span>
    </div>
    <ChevronDown />
  </button>
  {#if isOpen}
    <div
      class="absolute flex flex-col bg-white w-full mt-2 border-solid border-[1px] border-[#EFEFEF] rounded-lg"
    >
      {#each languageMap as lang}
        <button
          class="flex items-center px-2 py-[7.5px] gap-1"
          on:click={() => onClickLanguage(lang.code)}
        >
          <img class="w-5 h-5" src={lang.src} alt={currentLanguage} />
          <span class="text-black-secondary font-bold text-sm">{lang.name}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>
