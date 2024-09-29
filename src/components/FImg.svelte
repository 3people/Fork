<script lang="ts">
  import DefaultImage from '../assets/images/default-image.png'
  export let src: string
  export let alt: string = 'image'
</script>

<img {...$$restProps} class={$$restProps.class} src={src !== '' ? src : DefaultImage} {alt} />
