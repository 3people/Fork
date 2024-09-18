<script lang="ts">
    import { createEventDispatcher } from "svelte"

    export let selected: boolean = false
    export let value: string = ''

    const dispatch = createEventDispatcher()
    const onClick = () => {
        dispatch('select', value)
    }
</script>
<button
    class="flex items-center px-[1rem] w-full h-[3.25rem] font-bold rounded-[0.5rem] border border-gray-200 mb-[0.75rem] last:mb-0 {selected ? 'selected' : ''}"
    on:click={onClick}
    >
    <slot/>
</button>


<style>
  .selected {
    border-color: #FF4A22;
  }
</style>