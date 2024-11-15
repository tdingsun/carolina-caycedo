<script lang="ts">
    let className = '';
    export {className as class}
    import { page } from "$app/stores";
    import { splashPageDarkText, aboutPageDarkText } from "$lib/stores";
</script>

<div class="{(($page.url.pathname === '/about' && $aboutPageDarkText) || ($page.url.pathname !== '/about' && $splashPageDarkText))  ? '[text-shadow:_0px_0px_2px_#1C2F2F]' : '[text-shadow:_0px_0px_2px_cornsilk]' } font-medium text-2xl lg:text-3xl text-transparent tracking-wider {className}">
    <slot></slot>
</div>