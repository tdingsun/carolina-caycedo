<script lang="ts">
    export let portfolioURL: any;
    export let videoPortfolioURL: any;
    import { page } from "$app/stores";
	import StyledNavLink from "./StyledNavLink.svelte";
</script>

<div class="flex justify-between p-2 {$page.url.pathname === '/about' ? 'sticky top-0' : 'fixed z-10 h-10'} top-0 w-full">
    <div>
        <StyledNavLink>
            <a href="/">Carolina Caycedo</a>
        </StyledNavLink>
    </div>
    <div class="flex flex-col gap-2">
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

    
</div>