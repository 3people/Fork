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
        locale.set('kr')
        const timeout = setTimeout(()=>{
            showSplash = false
            console.log('timeout')
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
        <h1 class="font-bold text-[1.3125rem]">환영합니다!</h1>
        <p class="text-[#0A0A0A]/70">어떤 언어로 한식 여행 정보를 번역해드릴까요?</p>
        <LanguageRadio class="mt-[3.5rem]"/>
    </div>
    <FButton class="w-full mb-[1.25rem]" on:click={onClickStart}>{$_('landing.start')}</FButton>
</div>
