<script lang="ts">
    import { createEventDispatcher } from "svelte"
    import LanguageRadioButton from "./LanguageRadioButton.svelte"
    import {_, locale} from 'svelte-i18n'

    let currentValue: string | null | undefined = 'kr'

    locale?.subscribe((value) => {
      currentValue = value
    })

    const onSelect = (event: CustomEvent) => {
      locale.set(event?.detail)
    }
</script>

<div>
    <LanguageRadioButton
        selected={currentValue === 'kr'}
        value="kr"
        on:select={onSelect}
    >
      한국어
    </LanguageRadioButton>
    <LanguageRadioButton
        selected={currentValue === 'en'}
        value="en"
        on:select={onSelect}
    >
      English
    </LanguageRadioButton>
    <LanguageRadioButton
        selected={currentValue === 'cn'}
        value="cn"
        on:select={onSelect}
    >
        繁體中文
    </LanguageRadioButton>
    <LanguageRadioButton
        selected={currentValue === 'jp'}
        value="jp"
        on:select={onSelect}
    >
        日本語
    </LanguageRadioButton>
</div>