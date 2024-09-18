<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import LanguageRadioButton from "./LanguageRadioButton.svelte"
    import {_, locale} from 'svelte-i18n'
    import en from '../../../assets/images/flag-en.png'
    import ja from '../../../assets/images/flag-ja.png'
    import ko from '../../../assets/images/flag-ko.png'
    import zh from '../../../assets/images/flag-zh.png'

    let currentValue: string | null | undefined = 'ko'

    locale?.subscribe((value) => {
      currentValue = value
    })

    const onSelect = (event: CustomEvent) => {
      locale.set(event?.detail)
    }
</script>

<div class={$$restProps.class}>
    <LanguageRadioButton
        selected={currentValue === 'ko'}
        value="ko"
        on:select={onSelect}
    >
        <img src={ko} alt="ko" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />
        한국어
    </LanguageRadioButton>
    <LanguageRadioButton
        selected={currentValue === 'en'}
        value="en"
        on:select={onSelect}
    >
      <img src={en} alt="en" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />
      English
    </LanguageRadioButton>
    <LanguageRadioButton
        selected={currentValue === 'zh'}
        value="zh"
        on:select={onSelect}
    >
        <img src={zh} alt="zh" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />
        繁體中文
    </LanguageRadioButton>
    <LanguageRadioButton
        selected={currentValue === 'ja'}
        value="ja"
        on:select={onSelect}
    >
        <img src={ja} alt="ja" class="w-[1.5rem] h-[1.5rem] mr-[0.5rem]" />
        日本語
    </LanguageRadioButton>
</div>