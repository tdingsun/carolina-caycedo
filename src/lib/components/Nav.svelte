<script lang="ts">
    export let portfolioURL: any;
    export let videoPortfolioURL: any;
</script>

<div class="flex justify-between p-2 border-b">
    <a href="/">Carolina Caycedo</a>
    <a href={portfolioURL} target="_blank">Portfolio</a>
    <a href={videoPortfolioURL} target="_blank">Video Portfolio</a>
    <a href="/about">About</a>
</div>