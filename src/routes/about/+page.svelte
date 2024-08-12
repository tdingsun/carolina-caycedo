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


<div class="p-2">
    <div class="flex gap-2">
        <PortableText {components} value={data.aboutPage.aboutPageBlurb}></PortableText>
        <img src={getImgUrl(data.aboutPage.coverImage)} class="w-96 object-contain object-top"/>
    </div>
    <div>
        {#if data.aboutPage.contactLinks && data.aboutPage.contactLinks.length}
        <div class="flex gap-4">
            {#each data.aboutPage.contactLinks as link}
                <a href={link.url} class="underline hover:no-underline">{link.label}</a>
            {/each}
        </div>
        {/if}
    </div>
</div>

