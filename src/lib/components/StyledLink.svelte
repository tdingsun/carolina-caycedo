<script lang="ts">
    import type {MarkComponentProps} from '@portabletext/svelte'
    export let portableText: MarkComponentProps<{
        href?: string
    }>
    $: ({value} = portableText)
</script>
<a href={value.href} target="_blank" class="underline">
    <slot />
</a>