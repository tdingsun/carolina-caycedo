<script lang="ts">
    import type { LayoutData } from './$types';
    export let data: LayoutData;
    console.log(data);
	import Nav from "$lib/Nav.svelte";
    import "../app.css";
</script>

<Nav></Nav>
<slot />