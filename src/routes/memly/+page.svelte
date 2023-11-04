<script lang="ts">
    import Level from "$lib/wrapper/level/level.svelte";
    import WrapW from "$lib/wrapper/wrap_m/wrap_w.svelte";
    import Learn from "$lib/wrapper/learn_time/learn.svelte";
    import SkillsSum from "$lib/wrapper/skills_sum/skills_sum.svelte";
    
    import Upload from "$lib/wrapper/upload.svelte";
	import { onDestroy, onMount } from "svelte";
	import Navigation from "$lib/components/navigation.svelte";
    let v = 4;

    function updateV() {
        if (v === 1) {
            v = 2;
        } else if (v === 2) {
            v = 3;
        } else if (v === 3) {
            v = 4;
        } else if (v === 4) {
            v = 1;
        }
    }
    let i: undefined | number = undefined;

    // onMount(() => {
    //     i = setInterval(updateV, 3000);
    // });

    // onDestroy(() => {
    //     clearInterval(i);
    // })
    
    // updateV();
    v=2
</script>

<div class="h-5/6">
    {#if v ===1 }
        <WrapW />
    {/if}
    {#if v ===2 }
        <Level />
    {/if}
    {#if v ===3 }
        <Learn />
    {/if}
    {#if v ===4 }
        <SkillsSum />
    {/if}
</div>

<div class="w-full flex justify-center items-center">
    <button class="w-5 h-5"><Upload /></button>
    <button class="pl-2">Share Your Journey</button>
</div>
<Navigation />




