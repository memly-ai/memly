<script lang="ts">
	import Calendar from '$lib/components/Calendar.svelte';

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

<div class="m-auto mt-5 h-full w-11/12">
	<img src="./logo 2.svg" alt="memly logo" width="100" />
	<h1 class="font-inter text-3xl font-bold mb-2">Calendar</h1>
	<Calendar currentDate={selectedDate} data={calendarData} />
	<h2 class="font-inter text-2xl font-bold mb-3">
		Skills for {dayNames[selectedDate.getDay()].substring(0, 3) +
			', ' +
			monthNames[selectedDate.getMonth() - 1].substring(0, 3) +
			' ' +
			selectedDate.getDate()}
	</h2>
	<div class="p-4 shadow-md rounded-lg bg-white">
		{#each calendarData['11'][0]['1'] as topic}
			<div class="font-inter text-xl flex flex-row gap-4 items-center mb-3">
				<div class={`h-9 w-9 rounded-full ${topic.color}`}></div>
				<span class="font-bold">{topic.Topic}</span>
				{topic.Subtopic}
			</div>
		{/each}
	</div>
</div>
