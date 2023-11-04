<script lang="ts">
    import Cog from '$lib/cog.svelte'
    
    // section
    // |- Section x/x
    // |- Title
    let section = ["Section 1 (of 4)", "Basics of Entrepreneurship"];
    let subsections = [];
    // each subsection has:
    // title
    // completion status

    let s1 = [];
    // script to generate path
    // script to load popup?
</script>

<nav class="fixed top-0 right-0 left-0 flex items-center justify-between flex-wrap p-2 bg-white">
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
    <div class="w-full rounded-md bg-[#DC5E65] p-3 mx-5 mt-2 text-white">
        <p class="opacity-60">{section[0]}</p>
        <div class="w-full flex">
            <div class="basis-1/4 w-1/4 bg-[#b64d52] rounded-full h-3 dark:bg-gray-700 mx-0.5">
                <div class="bg-white h-3 rounded-full" style="width: 45%"></div>
            </div>
            <div class="basis-1/4 w-1/4 bg-[#b64d52] rounded-full h-3 dark:bg-gray-700 mx-0.5"></div>
            <div class="basis-1/4 w-1/4 bg-[#b64d52] rounded-full h-3 dark:bg-gray-700 mx-0.5"></div>
            <div class="basis-1/4 w-1/4 bg-[#b64d52] rounded-full h-3 dark:bg-gray-700 mx-0.5"></div>
        </div>
        <p class="mt-2">{section[1]}</p>
        <div class="w-full bg-[#b64d52] rounded-full h-3 dark:bg-gray-700">
            <div class="bg-white h-3 rounded-full" style="width: 75%"></div>
        </div>
    </div>
</nav>

<div class="flex fixed flex-col right-10 left-10">
    <!-- section info -->

</div>

<!-- for each subsection generate path -->
<div>
    <!-- entrepreneurship section x -->
</div>

<div>
    <!-- locked section 2 -->
</div>

