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
  class={clsx(
    $$props.class,
    'w-full py-4 rounded-lg bg-brand-point text-white text-base font-bold flex justify-center items-center',
  )}
  on:click={(event) => onClick(event)}
>
  <slot />
</button>
