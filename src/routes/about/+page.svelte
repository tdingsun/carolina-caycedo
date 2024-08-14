<script lang="ts">
    import type {PortableTextComponents} from '@portabletext/svelte'
    import { PortableText } from '@portabletext/svelte';
    import StyledParagraph from '$lib/components/StyledParagraph.svelte';
    import StyledHeader from '$lib/components/StyledHeader.svelte';
    import StyledLink from '$lib/components/StyledLink.svelte';
    import type { PageData } from './$types';
    import { urlFor } from '$lib/utils/image';
    export let data: PageData;
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

</script>


<div class="px-6 pt-2  gap-6 flex flex-col">
    <div class="flex flex-col md:flex-row border-y-2 border-dashed border-[darkslategrey] py-6 divide-y-2 md:divide-y-0 md:divide-x-2 divide-[darkslategrey] divide-dashed">
        <div class="max-w-xl pr-6 md:text-xl font-medium tracking-[0.1px]">
            <PortableText {components} value={data.aboutPage.aboutPageBlurb}></PortableText>
            <div class="pt-6 border-t-2 border-dashed border-[darkslategrey]">
                {#if data.aboutPage.contactLinks && data.aboutPage.contactLinks.length}
                <div class="flex divide-x-2 divide-dashed divide-[darkslategrey]">
                    {#each data.aboutPage.contactLinks as link}
                        <a href={link.url} class="underline hover:no-underline first:pl-0 px-6">{link.label}</a>
                    {/each}
                </div>
                {/if}
            </div>
        </div>
        <div class="flex-grow hidden lg:block px-24 py-20">
            <div class="rounded-full bg-[cornsilk] w-full h-full shadow-[0_0_4rem_4rem_cornsilk]"></div>
        </div>
        <img src={getImgUrl(data.aboutPage.coverImage)} class="w-96 object-contain object-top pl-6"/>
    </div>
   
</div>

