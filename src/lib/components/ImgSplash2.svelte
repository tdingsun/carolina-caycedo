<script lang="ts">
    export let splashImgs
    import { urlFor } from '$lib/utils/image';
	import { setLightbox } from '$lib/stores';
	import { PortableText } from '@portabletext/svelte';
    import type {PortableTextComponents} from '@portabletext/svelte'
    import StyledParagraph from '$lib/components/StyledParagraph.svelte';
    import StyledHeader from '$lib/components/StyledHeader.svelte';
    import StyledLink from '$lib/components/StyledLink.svelte';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import StyledMainText from './StyledMainText.svelte';
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

    let moonCoords: any;

    onMount(() => {
        const getMovingMoonCoords = (t: number, direction: number) => {
            moonCoords = new Array(splashImgs.length);
            let centerX = window.innerWidth * 0.5 - 24;
            let centerY = window.innerHeight * 0.5 - 24;
            let r = Math.min(centerX, centerY) - 48;


            for(let i = 0; i < splashImgs.length; i++){
                if((direction * Math.cos(2 * Math.PI / (splashImgs.length) * (i+1)) >= 0)){
                    let x = r * Math.cos(2 * Math.PI / (splashImgs.length) * (i + 1)) + centerX;
                    let y = r * Math.sin(2 * Math.PI / (splashImgs.length) * (i + 1)) + centerY;
                    moonCoords[i] = [x, y];
                } else {
                    let x = centerX - direction * t*(r * Math.cos(2 * Math.PI / (splashImgs.length) * (i + 1)));
                    let y = r * Math.sin(2 * Math.PI / (splashImgs.length) * (i + 1)) + centerY;
                    moonCoords[i] = [x, y];
                }
            }
        }

        let convertConst = Math.PI/180
        let direction = 1; 
        setInterval(() => {
            const d = new Date(); 
            let seconds = d.getSeconds();
            let radians = seconds * convertConst * 3;
            let waneFactor = Math.cos(radians);
            getMovingMoonCoords(waneFactor, direction);
            if(seconds === 59){
                if(direction === -1){
                    moonCoords = new Array(splashImgs.length).fill([window.innerWidth,window.innerHeight]);
                }
                direction = -1 * direction;

            }
        }, 1000)

       
    })

    let currHoverImgIdx: number|null = null;
    const setCurrHoverImgIdx = (idx: number) => {
        currHoverImgIdx = idx;
    }

    const rmCurrHoverImgIdx = () => {
        currHoverImgIdx = null;
    }
</script>
{#if browser && moonCoords}
<div class="w-full h-screen flex justify-center items-center p-4 bg-gray-300">
        {#each splashImgs as imgObj, idx}
        <div style="left:{moonCoords[idx][0]}px; top:{moonCoords[idx][1]}px;" class="w-12 h-12 fixed">
            <img alt={imgObj.alt} on:mouseover={() => setCurrHoverImgIdx(idx)} on:focus={() => setCurrHoverImgIdx(idx)} on:mouseout={() => rmCurrHoverImgIdx()} on:blur={() => rmCurrHoverImgIdx()} on:click={(e) => setLightbox(e, splashImgs, 0, imgObj.img.asset._ref)} src={getTinyImgUrl(imgObj.img)} class=" hover:cursor-pointer max-w-full max-h-full"/>
        </div>
        {/each}
    <!-- <img src={getImgUrl(splashImgs[1])} class="max-w-full max-h-full"/> -->
</div>
{/if}

{#if currHoverImgIdx !== null}
    <div class="fixed bottom-8 w-screen flex justify-center">
        <StyledMainText>
            <PortableText {components} value={splashImgs[currHoverImgIdx].caption}></PortableText>
        </StyledMainText>
    </div>
{/if}
