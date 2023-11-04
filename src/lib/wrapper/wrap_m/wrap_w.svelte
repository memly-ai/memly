<script lang="ts">
    import Thropy from "./thropy.svelte";
    import Cap from "./cap.svelte";
    import Hourglass from "./hourglass.svelte";
</script>

<div class="pl-5">
    <h1 class="text-5xl" style="font-size: 30px; padding-top: 240px; padding-bottom: 40px;">In 2023, you...</h1>
    <div class="flex flex-col justify-flex-start">
        <div class="flex items-center">
            <div class="w-5 h-5"><Thropy /></div>
            <h1 class="text-5xl text-base p-1.5">Learned 53 new skills</h1>
        </div>
        <div class="flex items-center">
            <div class="w-5 h-5"><Cap /></div>
            <h1 class="text-5xl text-base p-1.5">Mastered 13 skills</h1>
        </div>
        <div class="flex items-center">
            <div class="w-5 h-5"><Hourglass /></div>
            <h1 class="text-5xl text-base p-1.5">Learned for 5,680 min</h1>
        </div>
    </div>
</div>
