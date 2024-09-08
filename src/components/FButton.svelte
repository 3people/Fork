<script lang="ts">
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()
  const onClick = (event: any) => {
    dispatch('click', event.detail)
  }
</script>

<button
  {...$$props}
  class="{`rounded-lg bg-brand-point text-white font-bold px-20 py-4 mt-14 mx-5 ${$$props.class ? ` ${$$props.class}` : ''}`}}"
  on:click={(event) => onClick(event)}
>
  <slot />
</button>
