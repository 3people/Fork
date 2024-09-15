<script lang="ts">
  import {querystring} from 'svelte-spa-router'
  import {parseQueryString} from '../utils/url'

  $: keyword = parseQueryString($querystring ?? '')?.keyword
</script>

<div>keyword: {keyword}</div>
