<script lang="ts">
    import type {MarkComponentProps} from '@portabletext/svelte'
    export let portableText: MarkComponentProps<{
        href?: string
    }>
    $: ({value} = portableText)
</script>
<a href={value.href} target="_blank" class="underline hover:[text-shadow:_0px_0px_2px_cornsilk]">
    <slot />
</a>