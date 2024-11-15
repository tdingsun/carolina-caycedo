<script lang="ts">
    import type {MarkComponentProps} from '@portabletext/svelte'
    import { page } from "$app/stores";
    import { splashPageDarkText, aboutPageDarkText } from "$lib/stores";
    export let portableText: MarkComponentProps<{
        href?: string
    }>
    $: ({value} = portableText)
</script>
<a href={value.href} target="_blank" class="underline {(($page.url.pathname === '/about' && $aboutPageDarkText) || ($page.url.pathname !== '/about' && $splashPageDarkText))  ? 'hover:[text-shadow:_0px_0px_2px_#203737]' : 'hover:[text-shadow:_0px_0px_2px_cornsilk]' }">
    <slot />
</a>