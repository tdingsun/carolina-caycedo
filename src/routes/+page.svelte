<script lang="ts">
    import type { PageData } from './$types';
    import ImgSplash from '$lib/components/ImgSplash.svelte';
	import VidSplash from '$lib/components/VidSplash.svelte';
    export let data: PageData;



</script>

<!-- <ImgSplash splashImgs={data.splashPage.splashImgs}></ImgSplash> -->
<VidSplash splashVids={data.splashPage.splashVids}></VidSplash>