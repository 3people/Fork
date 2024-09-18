<script lang=ts>
    import { onMount } from "svelte"
    import Splash from "./_components/Splash.svelte"
    import { fade } from "svelte/transition"
    import LanguageRadio from "./_components/LanguageRadio.svelte"
    import {push} from 'svelte-spa-router'
    import {_, locale} from 'svelte-i18n'
    import FButton from "../../components/FButton.svelte"

    let showSplash: boolean = true

    const SPLASH_TIME = 3000
    const onClickStart = async () => {
        await push('/home')
    }

    onMount(() => {
        locale.set('ko')
        const timeout = setTimeout(()=>{
            showSplash = false
        }, SPLASH_TIME)
        return () => clearTimeout(timeout)
    })
</script>

{#if showSplash}
    <div in:fade out:fade>
        <Splash  />
    </div>
{/if}
<!-- todo: add logo header -->
<div class="flex flex-col w-full h-full justify-between">
    <div class="mt-[1.5rem]">
        <h1 class="font-bold text-[1.3125rem]">{$_('landing.title')}</h1>
        <p class="h-[4rem] line-clamp-3 text-[#0A0A0A]/70 text-[0.875rem]">{$_('landing.description')}</p>
        <LanguageRadio class="mt-[0.625rem]"/>
    </div>
    <FButton class="w-full mb-[1.25rem]" on:click={onClickStart}>{$_('landing.start')}</FButton>
</div>
