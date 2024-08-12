<script lang="ts">
    import type { PageData } from './$types';
    import { urlFor } from '$lib/utils/image';
    export let data: PageData;

    const getImgUrl = (image: any) => {
        let url = urlFor(image.asset._ref).width(1200).format('webp').url();
        let urlParts = url.split('?');
        url = urlParts[0] + '/' + image.originalFilename + '?' + urlParts[1]
        return url;
    }

</script>

<div class="w-full h-screen flex justify-center items-center p-4 bg-gray-300">
    <img src={getImgUrl(data.splashPage.splashImgs[1])} class="max-w-full max-h-full"/>
</div>
