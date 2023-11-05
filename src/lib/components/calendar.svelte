<script lang="ts">
	export let currentDate: Date;
	export let data: any;

	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
</script>

<div class="mb-10 rounded-xl bg-white shadow-lg">
	<div class="rounded-t-xl bg-[#DC5E65]">
		<h1 class="font-inter p-2 text-center text-2xl font-bold text-white">
			{monthNames[currentDate.getMonth()]}
		</h1>
	</div>
  
	<div class="grid grid-cols-7 gap-4 pb-5 pl-5">
		<p class="opacity-25">S</p>
		<p class="opacity-25">M</p>
		<p class="opacity-25">T</p>
		<p class="opacity-25">W</p>
		<p class="opacity-25">Th</p>
		<p class="opacity-25">F</p>
		<p class="opacity-25">S</p>
		<div></div>
		<div></div>
		<div></div>
		{#each { length: 30 } as _, i}
			{#if i + 1 === currentDate.getDate()}
				<div class="font-bold">
					{i + 1}
					<div class="flex flex-row -mb-7">
						<div class={`h-2 w-2 rounded-full ${data['11'][0]['5'][0].color}`}></div>
						<div class={`h-2 w-2 rounded-full ${data['11'][0]['5'][1].color}`}></div>
					</div>
				</div>
			{:else}
				<div>{i + 1}</div>
			{/if}
		{/each}
	</div>
</div>
