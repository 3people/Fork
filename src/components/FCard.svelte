<script lang="ts" context="module">
  export interface CardItem {
    title?: string
    name?: string
    description?: string
    image?: string
  }
</script>

<script lang="ts">
  export let item: CardItem
</script>

<div
  class="rounded-lg w-[17.5rem] h-[27rem] text-white bg-cover bg-no-repeat bg-center flex-[0_0_100%]"
  style={`background-image: url(${item.image})`}
>
  <div class="p-4 flex flex-col w-full h-full justify-between">
    <span class="font-bold text-xl">{@html item.title}</span>
    <div class="mt-auto">
      <span class="font-bold text-lgv">{item.name}</span>
      <p class="mt-2 text-sm">{item.description}</p>
    </div>
  </div>
</div>
