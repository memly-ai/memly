<script lang="ts">
	import Cog from '$lib/cog.svelte';
	import Cube from '$lib/cube.svelte';
	import Lock from '$lib/lock.svelte';

	// section
	// |- Section x/x
	// |- Title
	let section = ['Section 1 (of 4)', 'Basics of Entrepreneurship'];
	let subsections = [
		{ title: 'Ideation', suggestions: '', completed: true },
		{ title: 'Market Research', suggestions: '', completed: true },
		{ title: 'Team Research', suggestions: '', completed: true },
		{ title: 'Networking', suggestions: '', completed: true },
		{ title: 'Prototyping', suggestions: '', completed: false },
		{ title: '', suggestions: '', completed: false },
		{ title: 'Sunk-Cost Fallacy', suggestions: '', completed: false }
	];
	let colors = ['fill-[#52ADE1]', 'fill-[#DC5E65]', 'fill-yellow-400'];
	// TODO: hover colors
	// TODO: click colors

	// script to generate path
	// script to load popup?
</script>

<nav
	class="sticky left-0 right-0 top-0 flex flex-wrap items-center justify-between bg-white pl-2 pr-2 pt-2"
>
	<!-- logo -->
	<img class="w-16" src="/logo.png" alt="memly logo" />

	<!-- progress -->
	<div class="w-2/3 p-4">
		<div class="h-6 w-full rounded-full bg-gray-200 dark:bg-gray-700">
			<div class="h-6 rounded-full bg-[#52ADE1]" style="width: 45%"></div>
		</div>
	</div>

	<!-- settings -->
	<div class="p-2">
		<Cog />
	</div>

	<!-- section info -->
	<div class="mx-5 mt-2 w-full rounded-md border-b-8 border-[#b64d52] bg-[#DC5E65] p-3 text-white">
		<div class="flex w-full">
			<div class="mx-0.5 h-3 w-1/4 basis-1/4 rounded-full bg-[#b64d52] dark:bg-gray-700">
				<div class="h-3 rounded-full bg-white" style="width: 65%"></div>
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
					<div class="w-20">
						<Cube color={colors[index % 3]} />
					</div>
				{:else}
					<div class="w-20 -scale-x-100">
						<Cube color="fill-gray-600" />
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
