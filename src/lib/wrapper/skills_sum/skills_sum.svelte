<script lang="ts">
    import Bar from "./skills.svelte"
</script>

<div class="px-5 flex items-middle w-full">
    <div class="p-5 shadow-xl rounded-md w-full mt-[200px]">
        <div class="flex flex-row items-center mb-2">
            <img class="w-8 rounded-full mr-2" src="/pfp.jpg" alt="omar's avatar" />
            <p>Omar's <span class="text-[#52ADE1]"><b>memly</b></span></p>
        </div>
        <h1 class="text-5xl py-4" style="font-size: 30px;">Of your <span class="text-3xl font-bold text-[#52ADE1]">19</span> new skills...</h1>
        <p class="mb-3">
            Here are your <span class="text-[#DC5E65] font-bold">top five</span> by tasks:
        </p>
        <div class="flex flex-col justify-flex-start w-full">
            <div class="flex flex-col items-start w-full">
                <div>
                    1. Calculus <span class="text-sm text-gray-500">(48/48)</span>
                </div>
                <Bar x = {100}/>
            </div>
            <div class="flex flex-col items-start">
                <div>
                    2. Cooking <span class="text-sm text-gray-500">(33/36)</span>
                </div>
                <Bar x = {89}/>
            </div>
            <div class="flex flex-col items-start">
                <div>
                    3. Knitting <span class="text-sm text-gray-500">(22/26)</span>
                </div>
                <Bar x = {81}/>
            </div>
            <div class="flex flex-col items-start">
                <div>
                    4. Entrepreneurship <span class="text-sm text-gray-500">(21/30)</span>
                </div>
                <Bar x = {64}/>
            </div>
            <div class="flex flex-col items-start">
                <div>
                    5. Playing Kazoo <span class="text-sm text-gray-500">(11/28)</span>
                </div>
                <Bar x = {40}/>
            </div>
    
            <div class="mt-3 flex items-center justify-center text-center">
                <span class="text-sm text-gray-500">(your skill completion average was 15% higher than average!)</span>
            </div>
        </div>
    </div>
</div>
