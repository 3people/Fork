<script lang="ts">
  import {clsx} from 'clsx'
  import MagnifyingGlass from '../assets/icons/MagnifyingGlass.svelte'
  import {createEventDispatcher} from 'svelte'
  import {_} from 'svelte-i18n'

  const dispatch = createEventDispatcher()

  export let value: string = ''
  $: if (value) {
    focused = true
  }

  let inputValue = value
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
      dispatch('enter', inputValue)
    }
  }

  const onInput = (event: any) => {
    inputValue = (event.target as HTMLInputElement).value
    dispatch('input', inputValue)
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
    bind:value={inputValue}
    on:focus={onFocus}
    on:blur={onBlur}
    on:keydown={onEnter}
    on:input={onInput}
    class={`w-full text-base ${focused ? 'text-black' : 'text-black-quaternary'}`}
    type="text"
    id="input"
    placeholder={$_('search.placeholder')}
  />
</div>
