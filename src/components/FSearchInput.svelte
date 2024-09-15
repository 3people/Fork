<script lang="ts">
  import {clsx} from 'clsx'
  import MagnifyingGlass from '../assets/icons/MagnifyingGlass.svelte'
  import {createEventDispatcher} from 'svelte'

  const dispatch = createEventDispatcher()

  let value = ''
  let focused = false

  const onFocus = () => {
    focused = true
  }

  const onBlur = () => {
    focused = false
  }

  const onEnter = (event: KeyboardEvent) => {
    const key = event.key
    if (key === 'Enter') {
      dispatch('enter', value)
    }
  }
</script>

<div
  {...$$props}
  class={clsx(
    $$props.class,
    `flex gap-2 items-center w-full px-4 py-[0.875rem] rounded-xl border-solid border-2 ${focused ? 'border-brand-point' : 'border-gray-200'}`,
  )}
>
  <MagnifyingGlass />
  <input
    bind:value
    on:focus={onFocus}
    on:blur={onBlur}
    on:keydown={onEnter}
    class={`w-full text-base ${focused ? 'text-black' : 'text-black-quaternary'}`}
    type="text"
    id="input"
    placeholder="한국 음식, 식당을 검색해보세요"
  />
</div>
