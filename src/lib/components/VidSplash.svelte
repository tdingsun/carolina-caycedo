<script lang="ts">
    export let splashVids;
    import { urlFor } from '$lib/utils/image';
	import { onMount } from 'svelte';

    const getImgUrl = (image: any) => {
        let url = urlFor(image.asset._ref).width(1200).format('webp').url();
        let urlParts = url.split('?');
        url = urlParts[0] + '/' + image.originalFilename + '?' + urlParts[1]
        return url;
    }
    let vidIndex = Math.floor(Math.random() * splashVids.length);
</script>

<div class="absolute bottom-0 w-full h-full overflow-hidden">
    <video autoplay={true} muted={true} loop={true} playsinline={true} class="object-cover min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <source src={splashVids[vidIndex].url} />
    </video>
</div>
