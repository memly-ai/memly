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
        if (v < 4) {
            v++;
        } else {
            v = 1;
        }
    }
    let i: undefined | number = undefined;

    onMount(() => {
        i = setInterval(updateV, 5000);
    });

    onDestroy(() => {
        clearInterval(i);
    })
    
    updateV();
</script>

<div class="h-5/6">
    {#if v ===1 }
        <WrapW />
    {/if}
    {#if v ===2 }
        <SkillsSum />
    {/if}
    {#if v ===3 }
        <Level />
    {/if}
    {#if v ===4 }
        <Learn />
    {/if}
</div>

<div class="w-full flex justify-center items-center">
    <button class="w-5 h-5"><Upload /></button>
    <button class="pl-2">Share Your Journey</button>
</div>
<Navigation />




