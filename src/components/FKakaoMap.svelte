<script lang="ts">
  import {onMount} from 'svelte'

  export let latitude: number
  export let longitude: number
  export let level: number = 3

  let mapContainer: HTMLElement
  let map: any
  let marker: any

  onMount(() => {
    const options = {
      center: new window.kakao.maps.LatLng(latitude, longitude),
      level: level,
    }
    map = new window.kakao.maps.Map(mapContainer, options)
    marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(latitude, longitude),
    })

    marker.setMap(map)
  })
</script>

<div bind:this={mapContainer} {...$$restProps} class={$$restProps.class}></div>
