<script lang="ts">
  import FButton from '../../components/FButton.svelte'
  import {imageStore} from '../../store/image'
  import {push} from 'svelte-spa-router'

  const fetchImage = () => {
    if ($imageStore.src && $imageStore.imageFile) {
      push('/menu')
    }
  }
</script>

<div class="w-full h-full mt-12 flex justify-center absolute top-0 left-0 bg-white px-5">
  <div class="w-full flex flex-col">
    <img class="w-full h-[33rem] object-contain" src={$imageStore.src} alt="menu" />
    <FButton class="mt-4" on:click={fetchImage}>확인</FButton>
  </div>
</div>
