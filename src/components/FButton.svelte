<script lang="ts">
  import {createEventDispatcher} from 'svelte'
  import {clsx} from 'clsx'

  const dispatch = createEventDispatcher()
  const onClick = (event: any) => {
    dispatch('click', event.detail)
  }
</script>

<button
  {...$$props}
  class={clsx($$props.class, 'w-full rounded-lg bg-brand-point text-white font-bold px-20 py-4')}
  on:click={(event) => onClick(event)}
>
  <slot />
</button>
