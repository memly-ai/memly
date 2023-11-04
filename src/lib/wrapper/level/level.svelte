<script lang="ts">
    import Circles from "./circles.svelte";
</script>

<div class="pl-5">
    <h1 class="text-5xl" style="font-size: 30px; padding-top: 240px; padding-bottom: 40px;">Of the 53 skills...</h1>
    <div class="flex flex-row justify-flex-start">
        <div class="flex flex-col items-center w-full">
            <Circles x = {70}/>
            <h1 class="text-5xl text-base p-1.5">Beginner</h1>
        </div>
        <div class="flex flex-col items-center w-full">
            <Circles x = {70}/>
            <h1 class="text-5xl text-base p-1.5">Intermediate</h1>
        </div>
        <div class="flex flex-col items-center w-full">
            <Circles x = {70}/>
            <h1 class="text-5xl text-base p-1.5">Advance</h1>
        </div>
    </div>
</div>