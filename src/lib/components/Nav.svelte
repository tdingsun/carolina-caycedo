<script lang="ts">
    export let portfolioURL: any;
    export let videoPortfolioURL: any;
    import { page } from "$app/stores";
	import StyledNavLink from "./StyledNavLink.svelte";
</script>

<div class="flex justify-between p-2 border-b border-black {$page.url.pathname === '/about' ? 'sticky top-0' : 'fixed'} top-0 w-full">
    <StyledNavLink>
        <a href="/">Carolina Caycedo</a>
    </StyledNavLink>
    <StyledNavLink>
        <a href={portfolioURL} target="_blank">Portfolio</a>
    </StyledNavLink>
    <StyledNavLink>
        <a href={videoPortfolioURL} target="_blank">Video Portfolio</a>
    </StyledNavLink>
    <StyledNavLink>
        <a href="/about">About</a>
    </StyledNavLink>
</div>