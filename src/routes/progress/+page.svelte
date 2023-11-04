<script lang="ts">
    import Cog from '$lib/cog.svelte'
    import Cube from '$lib/cube.svelte'
    import Lock from '$lib/lock.svelte'
    
    // section
    // |- Section x/x
    // |- Title
    let section = ["Section 1 (of 4)", "Basics of Entrepreneurship"];
    let subsections = [
        {title: "Ideation", suggestions:"", completed: true},
        {title: "Market Research", suggestions:"", completed: true},
        {title: "Team Research", suggestions:"", completed: true},
        {title: "Networking", suggestions:"", completed: true},
        {title: "Prototyping", suggestions:"", completed: false},
        {title: "", suggestions:"", completed: false},
        {title: "Sunk-Cost Fallacy", suggestions:"", completed: false}];
    let colors = ["fill-[#52ADE1]", "fill-[#DC5E65]", "fill-yellow-400"];
    // TODO: hover colors
    // TODO: click colors

    // script to generate path
    // script to load popup?
</script>

<nav class="sticky top-0 right-0 left-0 flex items-center justify-between flex-wrap pt-2 pr-2 pl-2 bg-white">
    <!-- logo -->
    <img class="w-16" src="/logo.png" alt="memly logo">

    <!-- progress -->
    <div class="w-2/3 p-4">
        <div class="w-full bg-gray-200 rounded-full h-6 dark:bg-gray-700">
            <div class="bg-[#52ADE1] h-6 rounded-full" style="width: 45%"></div>
        </div>
    </div>

    <!-- settings -->
    <div class="p-2">
        <Cog />
    </div>

    <!-- section info -->
    <div class="w-full rounded-md bg-[#DC5E65] p-3 mx-5 mt-2 text-white border-b-8 border-[#b64d52]">
        <div class="w-full flex">
            <div class="basis-1/4 w-1/4 bg-[#b64d52] rounded-full h-3 dark:bg-gray-700 mx-0.5">
                <div class="bg-white h-3 rounded-full" style="width: 65%"></div>
            </div>
            <div class="basis-1/4 w-1/4 bg-[#b64d52] rounded-full h-3 dark:bg-gray-700 mx-0.5"></div>
            <div class="basis-1/4 w-1/4 bg-[#b64d52] rounded-full h-3 dark:bg-gray-700 mx-0.5"></div>
            <div class="basis-1/4 w-1/4 bg-[#b64d52] rounded-full h-3 dark:bg-gray-700 mx-0.5"></div>
        </div>
        <p class="opacity-60 mt-2">{section[0]}</p>
        <p>{section[1]}</p>
    </div>
</nav>

<!-- for each subsection generate path -->
<div class="flex flex-col items-center">
    {#each subsections as subsection, index}
        <div class="odd:pl-24 even:pr-24 box-border">
            <div class="rounded-full flex justify-center items-center w-20 aspect-square mt-16">
                {#if subsection.completed}
                    <div class="w-20">
                        <Cube color={colors[index % 3]}/>
                    </div>
                {:else}
                    <div class="w-20 -scale-x-100">
                        <Cube color="fill-gray-600"/>
                    </div>
                {/if}
            </div>
        </div>
    {/each}
</div>

<div class="mt-8 flex flex-col items-center justify-center w-full">
    <!-- locked section 2 -->
    <!-- TODO: scale, add text about completing section to unlock -->
    <Lock />
</div>

<!-- TODO: path graphic -->

