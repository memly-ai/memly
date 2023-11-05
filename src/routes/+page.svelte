<script lang="ts">
	import Add from '$lib/components/add.svelte';
	import Hamburger from '$lib/components/hamburger.svelte';
	import Logo from '$lib/components/logo.svelte';
	import Navigation from '$lib/components/navigation.svelte';

	type HabitType = {
		name: string;
		progress: number;
		journey: string[];
	};

	let activeSkills: HabitType[] = [
		{ name: 'Cooking', progress: 30, journey: [] },
		{ name: 'Coding', progress: 40, journey: [] },
		{ name: 'Chess', progress: 50, journey: [] },
		{ name: 'Spanish', progress: 60, journey: [] },
		{ name: 'Skateboarding', progress: 80, journey: [] }
	];

	const skills: HabitType[] = [
		{ name: 'Writing', progress: 70, journey: [] },
		{ name: 'Painting', progress: 100, journey: [] },
		{ name: 'Calculus', progress: 30, journey: [] },
		{ name: 'Chemistry', progress: 80, journey: [] }
	];

	let addNewHabit = false;
	let planHabit = false;
	let journeyValue = '';
	let newHabit: HabitType = { name: '', progress: 0, journey: [] };
    newHabit.journey.push('Basic Chords');
    newHabit.journey.push('Major Chords');
    newHabit.journey.push('Play First Song');
	newHabit = newHabit;
</script>

<div class="flex h-full w-full flex-col gap-1">
	<div class="w-full p-4">
		<a href="/">
			<Logo />
		</a>
	</div>

	<div class="flex h-4/5 w-full flex-col gap-2 p-4">
		<h1 class="text-2xl font-bold">At a Glance</h1>

		<div class="flex h-full w-full flex-col items-center justify-stretch">
			<div class="mt-2 w-full rounded-md px-4 py-6 shadow-xl">
				<h2 class="text-sm font-bold">Today's Skills</h2>

				<div class="flex flex-col items-center justify-center gap-2">
					{#each activeSkills as skill, i}
						<div class="flex w-full flex-row items-center gap-2">
							<p class="w-1/3 text-ellipsis text-sm">{skill.name} {i === 1 ? '🔥 2' : ''}</p>
							<div class="flex w-2/3 flex-row items-center justify-between gap-2">
								<div class="h-2.5 w-full rounded-full bg-[#D9D9D9]">
									<div
										class="h-2.5 rounded-full bg-[#52ADE1]"
										style="width: {skill.progress}%"
									></div>
								</div>
								<button class="rounded-lg border border-gray-300 px-2 py-1 text-sm"><a href="/learn">Learn</a></button>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="mt-2 w-full rounded-md px-4 py-6 pt-8 shadow-xl">
				<h1 class="text-sm font-bold">Your Skills</h1>
				<div class="flex w-full flex-col gap-2 divide-y-2 pt-4">
					{#each skills as skill, i}
						<div class="flex w-full flex-row items-center justify-between">
							<div class="w-1/3">
								<p class="text-sm">{skill.name} {i === 2 ? '🔥 3' : ''}</p>
							</div>
							<div class="w-2/3">
								<div class="h-2.5 w-full rounded-full bg-[#D9D9D9]">
									<div
										class="h-2.5 rounded-full bg-[#52ADE1]"
										style="width: {skill.progress}%"
									></div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
  <Navigation />
</div>

<div
	class="fixed bottom-[50px] right-4 flex aspect-square w-20 flex-row items-center justify-center rounded-full bg-[#52ADE1]"
>
	<button on:click={() => (addNewHabit = true)} class="m-0 p-0 text-center leading-[0]">
		<Add />
	</button>
</div>

{#if addNewHabit}
	<div
		class="fixed left-0 top-0 flex h-screen w-screen flex-row items-center justify-center bg-gray-500/60 p-4 py-[40%]"
	>
		<div
			class="flex h-full w-full flex-col items-center justify-center gap-2 rounded-md bg-white p-4"
		>
			<h1 class="text-2xl">Let's build a new habit!</h1>
			<input
				bind:value={newHabit.name}
				class="mt-4 w-2/3 rounded-full bg-gray-300/60 px-4 py-2 text-center"
				placeholder="What are we learning?"
			/>
			<button
				on:click={() => {
					addNewHabit = false;
					planHabit = true;
				}}
				class="w-2/3 rounded-full bg-[#52ADE1] px-4 py-2 text-white">Plan</button
			>
		</div>
	</div>
{/if}

{#if planHabit}
	<div
		class="fixed left-0 top-0 flex h-screen w-screen flex-row items-center justify-center bg-gray-500/60 p-4 py-[40%]"
	>
		<div
			class="flex h-full w-full flex-col items-center justify-center gap-2 rounded-md bg-white p-4"
		>
			<h1 class="text-2xl">{newHabit.name}</h1>
			<button class="w-2/3 rounded-full bg-[#DC5E65] px-4 py-2 text-white">Import Plan</button>

			<div class="py-4">
				<div class="flex flex-col items-center gap-2">
					{#each newHabit.journey as step}
						<div class="flex w-full flex-row items-center gap-2">
							<Hamburger />
							<p class="text-md w-full">{step}</p>
						</div>
					{/each}

                    <div class="flex w-full flex-row items-flex-start gap-2">
						<Hamburger />
						<input
							bind:value={journeyValue}
							placeholder={"Add a step"}
							class="bg-grey-300/60 text-md w-full rounded-full text-center"
						/>
						<button
							on:click={() => {
								if (journeyValue !== '') {
									newHabit.journey.push(journeyValue);
									newHabit = newHabit;
                                    journeyValue="";
								}
							}}
							class="text-md rounded-full bg-green-500 px-4 py-2 text-white">Add</button
						>
					</div>
				</div>
			</div>

			<div class="flex w-full flex-grow flex-row items-end justify-center">
				<button
					on:click={() => {
						addNewHabit = false;
						planHabit = false;
						activeSkills.push(newHabit);
						activeSkills = activeSkills;
					}}
					class="w-2/3 rounded-full bg-[#52ADE1] px-4 py-2 text-white">Plan</button
				>
			</div>
		</div>
	</div>
{/if}
