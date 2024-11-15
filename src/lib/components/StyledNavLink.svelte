<script lang="ts">
	import { onMount } from "svelte";
	import StyledMainText from "./StyledMainText.svelte";
    import { page } from "$app/stores";
    import { splashPageDarkText, aboutPageDarkText } from "$lib/stores";
    let className = '';
    export {className as class}

    let leftOffset = 0;
    let topOffset = 0;
    onMount(() => {
        const moveEl = () => {
            if(Math.random() < 0.5 && leftOffset < 25){
                leftOffset += 5;

            } else {
                if(leftOffset > -25){
                    leftOffset -= 5;
                }
            }
            if(Math.random() < 0.5 && topOffset < 25){
                topOffset += 2;
            } else {
                if(topOffset > -25){
                    topOffset -= 2;
                }
            }
        }
        setInterval(() => {
            moveEl();
        }, 5000)
    })
    
</script>
<div 
 style="left:{leftOffset}px; top:{topOffset}px;"
class=" transition-[left,_top] duration-[5s] relative   hover:!top-0 hover:!left-0 flex justify-center items-center {className}">
    <StyledMainText class="{(($page.url.pathname === '/about' && $aboutPageDarkText) || ($page.url.pathname !== '/about' && $splashPageDarkText))  ? 'hover:[text-shadow:_0px_0px_1px_#203737]' : 'hover:[text-shadow:_0px_0px_1px_cornsilk]' } ">
        <slot></slot>
    </StyledMainText>

</div>