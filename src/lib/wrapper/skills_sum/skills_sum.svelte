<script lang="ts">
    import Bar from "./skills.svelte"
</script>

<div class="pl-5">
    <h1 class="text-5xl" style="font-size: 30px; padding-top: 240px; padding-bottom: 40px;">You mastered 13 skills!</h1>
    <h1 class="text-5xl" style="font-size: 15px; padding-bottom: 10px;">Your top 5 skills</h1>
    <div class="flex flex-col justify-flex-start">
        <div class="flex flex-col items-center">
            <h1 class="text-5xl text-base p-1.5">Riding a bike</h1>
            <Bar x = {100}/>
        </div>
        <div class="flex flex-col items-center">
            <h1 class="text-5xl text-base p-1.5">Cooking</h1>
            <Bar x = {95}/>
        </div>
        <div class="flex flex-col items-center">
            <h1 class="text-5xl text-base p-1.5">Calculus</h1>
            <Bar x = {80}/>
        </div>
        <div class="flex flex-col items-center">
            <h1 class="text-5xl text-base p-1.5">Playing the Guitar</h1>
            <Bar x = {55}/>
        </div>

    </div>
</div>
