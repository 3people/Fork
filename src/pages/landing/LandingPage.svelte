<script lang=ts>
    import { onMount } from "svelte"
    import Splash from "./_components/Splash.svelte"
    import { fade } from "svelte/transition"
    import SButton from "../../components/SButton.svelte"
    import LanguageRadio from "./_components/LanguageRadio.svelte"
    import {push} from 'svelte-spa-router'
    import {_, locale} from 'svelte-i18n'

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
<div>
    <h1 class="font-bold text-[1.3125rem]">환영합니다</h1>
    <p class="text-[#0A0A0A]/70">어떤 언어로 한식 여행 정보를 번역해드릴까요?</p>
    <LanguageRadio/>
    <SButton class="w-full" on:click={onClickStart}>시작하기</SButton>
</div>