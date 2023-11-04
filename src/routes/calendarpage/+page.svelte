<script lang="ts">
	import Calendar from '$lib/components/Calendar.svelte';
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
	let selectedDate = new Date(2023, 11, 1);
	let calendarData = {
		'11': [
			{
				'1': [
					{
						color: 'bg-goldish',
						Topic: 'Spanish',
						Subtopic: 'Study notes'
					},
					{
						color: 'bg-blueish',
						Topic: 'Chemistry',
						Subtopic: 'Study periodic table'
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
			monthNames[selectedDate.getMonth() - 1].substring(0, 3) +
			' ' +
			selectedDate.getDate()}
	</h2>
	<div class="rounded-lg bg-white p-4 shadow-md">
		{#each calendarData['11'][0]['1'] as topic}
			<div class="font-inter mb-3 flex flex-row items-center gap-4 text-xl">
				<div class={`h-9 w-9 rounded-full ${topic.color}`}></div>
				<span class="font-bold">{topic.Topic}</span>
				{topic.Subtopic}
			</div>
		{/each}
	</div>
</div>
<Navigation />
