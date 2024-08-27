<script lang="ts">
	import type { PageData } from './$types';
	import {
		lightbox,
		lightboxOpen,
		closeLightbox,
		setNextLightboxImage,
		setPrevLightboxImage
	} from '$lib/stores';

	import ImgSplash2 from '$lib/components/ImgSplash2.svelte';
	import VidSplash from '$lib/components/VidSplash.svelte';
	export let data: PageData;
</script>

<VidSplash splashVids={data.splashPage.splashVids}></VidSplash>
<ImgSplash2 splashImgs={data.splashPage.splashImgs}></ImgSplash2>

<div
	on:click={() => closeLightbox()}
	role="presentation"
	class="{$lightboxOpen
		? 'opacity-1 pointer-events-auto'
		: 'pointer-events-none opacity-0'} fixed left-0 top-0 z-[100] h-screen w-screen py-4 cursor-pointer backdrop-blur transition-opacity flex justify-between"
>
	<div class="flex items-center p-4">
		<button
			on:click={(e) => setPrevLightboxImage(e)}
			class="p-1 text-fg text-4xl hover:text-pinnedfg -rotate-90 rounded-full bg-[cornsilk] fill-[darkslategrey] shadow-[0_0_2px_2px_cornsilk] hover:bg-[darkslategrey] hover:fill-[cornsilk] hover:shadow-[0_0_2px_2px_darkslategrey]"
		>
			<svg
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
				class="text-inherit fill-inherit"
				><path
					d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
				/></svg
			>
		</button>
	</div>

	<div bind:this={$lightbox} class="w-full h-full bg-contain bg-center bg-no-repeat"></div>

	<div class="flex items-center p-4">
		<button
			on:click={(e) => setNextLightboxImage(e)}
			class="p-1 text-fg text-4xl hover:text-pinnedfg rotate-90 rounded-full bg-[cornsilk] fill-[darkslategrey] shadow-[0_0_2px_2px_cornsilk] hover:bg-[darkslategrey] hover:fill-[cornsilk] hover:shadow-[0_0_2px_2px_darkslategrey]"
		>
			<svg
				width="24"
				height="24"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
				class="text-inherit fill-inherit"
				><path
					d="M11 2.206l-6.235 7.528-.765-.645 7.521-9 7.479 9-.764.646-6.236-7.53v21.884h-1v-21.883z"
				/></svg
			>
		</button>
	</div>
	<!-- <div class="fixed bottom-0 w-full flex justify-center pb-8">
			<div class="[text-shadow:_0px_0px_2px_cornsilk] font-medium text-2xl text-transparent">
				Description

			</div>

		</div> -->
</div>
