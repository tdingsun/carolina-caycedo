<script lang="ts">
    export let splashImgs
    import { urlFor } from '$lib/utils/image';
	import { setLightbox } from '$lib/stores';
	import { PortableText } from '@portabletext/svelte';
    import type {PortableTextComponents} from '@portabletext/svelte'
    import StyledParagraph from '$lib/components/StyledParagraph.svelte';
    import StyledHeader from '$lib/components/StyledHeader.svelte';
    import StyledLink from '$lib/components/StyledLink.svelte';
    const components: Partial<PortableTextComponents> = {
		block: {
			normal: StyledParagraph,
            'h1': StyledHeader,
            'h2': StyledHeader,
            'h3': StyledHeader,
            'h4': StyledHeader,
		},
        marks: {
            link: StyledLink
        }
	};

    const getImgUrl = (image: any) => {
        let url = urlFor(image.asset._ref).width(1200).format('webp').url();
        let urlParts = url.split('?');
        url = urlParts[0] + '/' + image.originalFilename + '?' + urlParts[1]
        return url;
    }

    const getTinyImgUrl = (image: any) => {
        let url = urlFor(image.asset._ref).width(100).format('webp').url();
        let urlParts = url.split('?');
        url = urlParts[0] + '/' + image.originalFilename + '?' + urlParts[1]
        return url;
    }

    const randomCoords = new Array(splashImgs.length);
    for(let i = 0; i < splashImgs.length; i++){
        randomCoords[i] = [Math.round(Math.random()*80 + 10), Math.round(Math.random()*80 + 10)]
    }
    
    let currHoverImgIdx: number|null = null;
    const setCurrHoverImgIdx = (idx: number) => {
        currHoverImgIdx = idx;
    }

    const rmCurrHoverImgIdx = () => {
        currHoverImgIdx = null;
    }
</script>
<div class="w-full h-screen flex justify-center items-center p-4 bg-gray-300">
    {#each splashImgs as imgObj, idx}
        <div style="left:{randomCoords[idx][0]}vw; top:{randomCoords[idx][1]}vh;" class="w-12 h-12 fixed">
            <img alt={imgObj.alt} on:mouseover={() => setCurrHoverImgIdx(idx)} on:focus={() => setCurrHoverImgIdx(idx)} on:mouseout={() => rmCurrHoverImgIdx()} on:blur={() => rmCurrHoverImgIdx()} on:click={(e) => setLightbox(e, splashImgs, 0, imgObj.img.asset._ref)} src={getTinyImgUrl(imgObj.img)} class=" hover:cursor-pointer max-w-full max-h-full"/>
        </div>
    {/each}

    <!-- <img src={getImgUrl(splashImgs[1])} class="max-w-full max-h-full"/> -->
</div>

{#if currHoverImgIdx !== null}
    <div class="fixed bottom-8 w-screen flex justify-center">
        <div class="bg-[cornsilk] shadow-[0_0_10px_10px_cornsilk]">
            <PortableText {components} value={splashImgs[currHoverImgIdx].caption}></PortableText>
        </div>
    </div>
{/if}
