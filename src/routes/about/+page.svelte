<script lang="ts">
	import type { PortableTextComponents } from '@portabletext/svelte';
	import { PortableText } from '@portabletext/svelte';
	import StyledParagraph from '$lib/components/StyledParagraph.svelte';
	import StyledHeader from '$lib/components/StyledHeader.svelte';
	import StyledLink from '$lib/components/StyledLink.svelte';
	import type { PageData } from './$types';
	import StyledNavLink from '$lib/components/StyledNavLink.svelte';
	import StyledMainText from '$lib/components/StyledMainText.svelte';
	import { getImgUrl, aboutPageDarkText } from '$lib/stores';
	import { browser } from '$app/environment';
	import StyledSmallParagraph from '$lib/components/StyledSmallParagraph.svelte';
	export let data: PageData;
	$aboutPageDarkText = data.aboutPage.useDarkText;

	const components: Partial<PortableTextComponents> = {
		block: {
            small: StyledSmallParagraph,
			normal: StyledParagraph,
			h1: StyledHeader,
			h2: StyledHeader,
			h3: StyledHeader,
			h4: StyledHeader
		},
		marks: {
			link: StyledLink
		}
	};
</script>

{#if browser}
    <div class="fixed bottom-0 w-full h-full overflow-hidden">
        {#if data.aboutPage.useImage}
            <img src={getImgUrl(data.aboutPage.coverImage)} class="object-cover w-dvw h-dvh fixed  overflow-hidden" />
        {:else}
            <video
                autoplay={true}
                muted={true}
                loop={true}
                playsinline={true}
                class="object-cover min-w-full min-h-full w-auto h-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
                <source src={data.aboutPage.coverVideo.url} />
            </video>
        {/if}
    </div>
{/if}

<div class="max-w-2xl lg:max-w-5xl p-4 sm:p-8 tracking-wide w-full relative pointer-events-none overscroll-contain">
	<StyledMainText
		class="text-xl md:text-2xl sm:pb-16 {$aboutPageDarkText ? '![text-shadow:_0px_0px_1px_#1C2F2F]' : '![text-shadow:_0px_0px_1px_cornsilk]'} sm:!leading-[1.3] overscroll-contain"
	>
		<PortableText {components} value={data.aboutPage.aboutPageBlurb}></PortableText>
	</StyledMainText>
	{#if data.aboutPage.contactLinks && data.aboutPage.contactLinks.length}
		<div class="sm:hidden flex flex-col gap-4 justify-between items-start p-2 pt-16 w-full">
			{#each data.aboutPage.contactLinks as link}
				<StyledNavLink>
					<a href={link.url} class="text-xl">{link.label}</a>
				</StyledNavLink>
			{/each}
		</div>
	{/if}
</div>

{#if data.aboutPage.contactLinks && data.aboutPage.contactLinks.length}
	<div class="hidden sm:flex justify-between p-8 fixed bottom-0 w-full">
		{#each data.aboutPage.contactLinks as link}
			<StyledNavLink>
				<a href={link.url} target="_blank" class=" first:pl-0 px-6 text-2xl">{link.label}</a>
			</StyledNavLink>
		{/each}
	</div>
{/if}
