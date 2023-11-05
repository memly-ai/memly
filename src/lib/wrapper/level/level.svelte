<script lang="ts">
    import Circles from "./circles.svelte";
</script>

<div class="px-5 flex items-middle">
    <div class="p-5 shadow-xl rounded-md w-full mt-[200px]">
        <div class="flex flex-row items-center mb-2">
            <img class="w-8 rounded-full mr-2" src="/pfp.jpg" alt="omar's avatar" />
            <p>Omar's <span class="text-[#52ADE1]"><b>memly</b></span></p>
        </div>
        <h1 class="text-5xl py-4" style="font-size: 30px;">Of your <span class="text-3xl font-bold text-[#52ADE1]">13</span> masteries...</h1>
        <p class="mb-3">
            Here are your <span class="text-[#DC5E65] font-bold">highest leveled:</span>
        </p>
        <div class="flex flex-row justify-flex-start w-full">
            <div class="flex flex-col items-center w-full h-full">
                <Circles x={92} color="text-[#52ADE1]" mastery="15"/>
                <div class="w-full flex-grow flex-row items-center justify-center">
                    <h1 class="text-center p-1.5 text-[15px]">Calculus</h1>
                </div>
            </div>
            <div class="flex flex-col items-center w-full h-full">
                <Circles x={74} color="text-yellow-400" mastery="13"/>
                <div class="w-full flex-grow flex-row items-center justify-center">
                    <h1 class="text-center p-1.5 text-[15px]">Guitar</h1>
                </div>
            </div>
            <div class="flex flex-col items-center w-full h-full">
                <Circles x={58} color="text-[#DC5E65]" mastery="11"/>
                <div class="w-full flex-grow flex-row items-center justify-center">
                    <h1 class="text-center p-1.5 text-[15px]">Knitting</h1>
                </div>
            </div>
        </div>

        <div class="mt-3 flex items-center justify-center text-center">
            <span class="text-sm text-gray-500">(your average mastery level is higher than 72% of users!)</span>
        </div>
    </div>
</div>