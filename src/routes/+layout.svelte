<script lang="ts">
    import type { LayoutData } from './$types';
    export let data: LayoutData;
	import Nav from "$lib/components/Nav.svelte";
    import "../app.css";
    let portfolioURL = data.portfolioFiles.portfolioPDF.url + '/' + data.portfolioFiles.portfolioPDF.originalFilename;
    let videoPortfolioURL = data.portfolioFiles.videoPortfolioPDF.url + '/' + data.portfolioFiles.videoPortfolioPDF.originalFilename;
</script>

<Nav {portfolioURL} {videoPortfolioURL}></Nav>
<slot />