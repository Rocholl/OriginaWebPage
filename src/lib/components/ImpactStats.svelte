<script>
	import { _ } from 'svelte-i18n';
	
	let { stats = [] } = $props();
</script>

<section class="py-12 md:py-16 bg-primary text-white">
	<div class="max-w-7xl mx-auto px-4">
		<h2 class="text-center text-3xl sm:text-4xl md:text-5xl mb-8 md:mb-12 px-4">
			{$_('home.impact.title')}
		</h2>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
			{#each stats as stat, index (index)}
				<div class="text-center px-2">
					<div class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 md:mb-2">{stat.value}</div>
					<div class="text-xs sm:text-sm md:text-lg lg:text-xl opacity-90 leading-tight">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

