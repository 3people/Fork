<script lang=ts>
    import { onMount } from "svelte"
    import Splash from "./_components/Splash.svelte"
    import { fade } from "svelte/transition"

    let showSplash: boolean = true

    const SPLASH_TIME = 3000

    onMount(() => {
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