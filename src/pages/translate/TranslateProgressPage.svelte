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
    <div class="h-[33rem] flex items-center justify-center object-contain">
      <img src={$imageStore.src} alt="menu" />
    </div>
    <FButton on:click={fetchImage}>확인</FButton>
  </div>
</div>
