<script lang="ts">
    import Thropy from "./thropy.svelte";
    import Cap from "./cap.svelte";
    import Hourglass from "./hourglass.svelte";
</script>

<div class="mx-5 flex items-center">
    <div class="rounded-md shadow-xl w-full p-5 mt-[200px]">
        <div class="flex flex-row items-center mb-2">
            <img class="w-8 rounded-full mr-2" src="/pfp.jpg" alt="omar's avatar" />
            <p>Omar's <span class="text-[#52ADE1]"><b>memly</b></span></p>
        </div>
        <h1 class="text-5xl py-4" style="font-size: 30px;">In 2023, you...</h1>
        <div class="flex flex-col justify-flex-start">
            <div class="flex flex-row items-center mb-4">
                <div class="w-16 h-16 mr-3"><Thropy /></div>
                acquired&nbsp;<span class="text-3xl font-bold text-[#52ADE1]">53</span>&nbsp;new skills!
            </div>
            <div class="flex items-center mb-4">
                <div class="w-16 h-16 mr-3"><Cap /></div>
                mastered&nbsp;<span class="text-3xl font-bold text-[#52ADE1]">13</span>&nbsp;skills!
            </div>
            <div class="flex items-center">
                <div class="w-16 h-16 mr-3"><Hourglass /></div>
                spent&nbsp;<span class="text-3xl font-bold text-[#DC5E65]">5,478</span>&nbsp;mins learning!
            </div>
            <div class="mt-3 flex items-center justify-center text-center">
                <span class="text-sm text-gray-500">(that's almost 4 days saved from doomscrolling!)</span>
            </div>
        </div>
    </div>
</div>
