<script lang="ts">
	import CalendarIcon from '$lib/components/CalendarIcon.svelte';
	import Chart from '$lib/components/chart.svelte';
	import Home from '$lib/components/home.svelte';
	import Settings from '$lib/components/settings.svelte';
</script>

<div class="flex flex-grow items-end fixed bottom-0 w-full">
	<div class="flex w-full flex-row justify-evenly items-center bg-[#F0E9E6] p-4">
		<a href="/" class=""><Home /></a>
		<a href="/wrapped" class=""><Chart /></a>
		<a href="/calendarpage" class=""><CalendarIcon /></a>
		<a href="/" class=""><img class="w-8 rounded-full" src="/pfp.jpg" alt="omar's avatar" /></a>
	</div>
</div>
