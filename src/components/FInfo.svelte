<script lang="ts">
  export let type: string = '식당'
  export let item
</script>

<div class="flex gap-4">
  <div class="bg-red-200">
    <img class="w-[5.625rem] h-[5.625rem] object-cover" src={item.image} alt={item.name} />
  </div>
  <div class="flex flex-col gap-1">
    <span class="text-brand-point font-bold text-[0.625rem]">{type}</span>
    <span class="font-bold text-base">{item.name}</span>
    <span class="text-xs text-black-secondary">{item.address}</span>
    <span class="text-xs text-black-tertiary">{item.hours}</span>
    <span class="text-xs text-black-secondary">{item.description}</span>
  </div>
</div>
