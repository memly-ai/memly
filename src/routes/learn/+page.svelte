<script lang="ts">
	import Cog from '$lib/cog.svelte';
	import Logo from '$lib/components/logo.svelte';
	import Cube from '$lib/cube.svelte';
	import Lock from '$lib/lock.svelte';

	// section
	// |- Section x/x
	// |- Title
	let section = ['Section 1 (of 4)', 'Learning Guitar'];
	let subsections = [
		{ title: 'Basic Chords', suggestions: '', completed: true },
		{ title: 'Major Chords', suggestions: '', completed: false },
		{ title: 'Play First Song', suggestions: '', completed: false },
		{ title: 'Practice Scales', suggestions: '', completed: false },
		{ title: 'Stairway to Heaven', suggestions: '', completed: false }];
	let colors = ['fill-[#52ADE1]', 'fill-[#DC5E65]', 'fill-yellow-400'];
	let showTimer = false;
	// TODO: hover colors
	// TODO: click colors

	// script to generate path
	// script to load popup?
	let addClickCube = false;
	let start = true;
	let cur_date = 0;
	let final_date = 0;
</script>

<nav
	class="sticky left-0 right-0 top-0 flex flex-wrap items-center justify-between bg-[#F4F4F4] pl-2 pr-2 pt-2 z-30"
>
	<!-- logo -->
	<div class="w-16 scale-75">
		<Logo />
	</div>

	<!-- progress -->
	<div class="w-2/3 p-4">
		<div class="h-6 w-full rounded-full bg-gray-200 dark:bg-gray-700">
			<div class="h-6 rounded-full bg-[#52ADE1]" style="width: 45%"></div>
		</div>
	</div>

	<!-- settings -->
	<div class="p-2">
		<a href="/" class=""><img class="w-11 rounded-full" src="/pfp.jpg" alt="omar's avatar" /></a>
	</div>

	<!-- section info -->
	<div class="mx-5 mt-2 w-full rounded-md border-b-8 border-[#b64d52] bg-[#DC5E65] p-3 text-white">
		<div class="flex w-full">
			<div class="mx-0.5 h-3 w-1/4 basis-1/4 rounded-full bg-[#b64d52] dark:bg-gray-700">
				<div class="h-3 rounded-full bg-white" style="width: 25%"></div>
			</div>
			<div class="mx-0.5 h-3 w-1/4 basis-1/4 rounded-full bg-[#b64d52] dark:bg-gray-700"></div>
			<div class="mx-0.5 h-3 w-1/4 basis-1/4 rounded-full bg-[#b64d52] dark:bg-gray-700"></div>
			<div class="mx-0.5 h-3 w-1/4 basis-1/4 rounded-full bg-[#b64d52] dark:bg-gray-700"></div>
		</div>
		<p class="mt-2 opacity-60">{section[0]}</p>
		<p>{section[1]}</p>
	</div>
</nav>

<!-- for each subsection generate path -->
<div class="flex flex-col items-center">
	{#each subsections as subsection, index}
		<div class="box-border odd:pl-24 even:pr-24">
			<div class="mt-16 flex aspect-square w-20 items-center justify-center rounded-full">
				{#if subsection.completed}
					<div class="w-20" on:click={() => {showTimer = true}}>
						<p>{subsection.title}</p>				
						<Cube color={colors[index % 3]} />
					</div>
				{:else}
					<div class="w-20">		
						<p class="text-sm">{subsection.title}</p>					
						<Cube color="fill-gray-600 -scale-x-100" />
					</div>
				{/if}
			</div>
		</div>
	{/each}

</div>

<div class="mt-8 flex w-full flex-col items-center justify-center">
	<!-- locked section 2 -->
	<!-- TODO: scale, add text about completing section to unlock -->
	<Lock />
</div>

<!-- TODO: path graphic -->

{#if showTimer}
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 w-screen h-screen p-4 z-50">
    <div class="flex flex-col gap-4 justify-center items-center bg-white p-4 rounded-lg shadow-md w-full h-2/3">
      <!-- Pop-up content goes here -->
	  {#if start}
	  <button on:click={() => {
		start = false; 
		cur_date = new Date().getTime(); 
		final_date = Math.floor((new Date().getTime()-cur_date)/1000)
		setInterval(() => {
			final_date= Math.floor((new Date().getTime()-cur_date)/1000); 
		}, 1000)
		}} class="flex flex-row items-center justify-center w-32 h-32 rounded-full border border-[green] border-4 bg-white">
			<h2 class="text-2xl">Start</h2>
	  </button>
	  {:else}
	  <h1 class="text-2xl">{final_date} secs</h1>
	  <button on:click={() => {start = true; cur_date=0; final_date=0;}} class="flex flex-row items-center justify-center w-32 h-32 rounded-full border border-[red] border-4 bg-white">
		<h2 class="text-2xl">Stop</h2>
  	  </button>
	  {/if}
	  <div class="flex flex-row justify-evenly p-5 w-full ">
		<p>+15</p>
		<p>+30</p>
		<p>+60</p>
	  </div>

      <button on:click={() => {showTimer = false; cur_date=0; final_date=0; start = true}}>Close</button>
    </div>
  </div>
{/if}