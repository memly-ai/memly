<script lang="ts">
	import Calendar from '$lib/components/calendar.svelte';
	import Navigation from '$lib/components/navigation.svelte';

	const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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
	let selectedDate = new Date(2023, 10, 5);
	let calendarData = {
		'11': [
			{
				'5': [
					{
						color: 'bg-goldish',
						Topic: 'Music',
						Subtopic: 'Review music theory'
					},
					{
						color: 'bg-blueish',
						Topic: 'Guitar',
						Subtopic: 'Practice \'Stairway to Heaven\''
					}
				]
			}
		]
	};
</script>

<div class="m-auto mt-5 w-11/12">
	<img src="./logo 2.svg" alt="memly logo" width="100" />
	<h1 class="font-inter mb-2 text-3xl font-bold">Calendar</h1>
	<Calendar currentDate={selectedDate} data={calendarData} />
	<h2 class="font-inter mb-3 text-2xl font-bold">
		Skills for {dayNames[selectedDate.getDay()].substring(0, 3) +
			', ' +
			monthNames[selectedDate.getMonth()].substring(0, 3) +
			' ' +
			selectedDate.getDate()}
	</h2>
	<div class="rounded-lg bg-white p-4 shadow-md">
		{#each calendarData['11'][0]['5'] as topic}
			<div class="font-inter mb-4 flex flex-row items-center gap-2 text-xl">
				<div class={`h-6 w-6 rounded-full ${topic.color}`}></div>
				<span class="font-bold text-sm w-1/4">{topic.Topic}</span>
				<p class="text-sm">
					{topic.Subtopic}
				</p>
			</div>
		{/each}
	</div>
</div>
<Navigation />
