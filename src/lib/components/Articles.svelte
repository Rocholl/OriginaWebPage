<script>
	import { _ } from 'svelte-i18n';
	import { ArrowRight } from 'lucide-svelte';
	
	let { articles = [] } = $props();
</script>

<section class="py-10 sm:py-12 md:py-16 bg-beige">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<h2 class="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 text-dark-800 px-4">
			{$_('home.projects.title')}
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
			{#each articles as article}
				<article id={article.id ? `project-${article.id}` : undefined} class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
					{#if article.image}
						<div class="w-full h-40 sm:h-48 overflow-hidden">
							<img
								src={article.image}
								alt={article.title}
								class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
							/>
						</div>
					{/if}
					<div class="p-4 sm:p-6">
						<h3 class="text-xl sm:text-2xl mb-2 text-dark-800">{article.title}</h3>
						<p class="text-dark-600 mb-4 leading-relaxed text-sm sm:text-base">{article.excerpt}</p>
						<a
							href={article.link || '#'}
							class="text-primary font-semibold inline-flex items-center gap-2 hover:text-secondary transition-colors text-sm sm:text-base"
						>
							{$_('home.projects.readMore')}
							<ArrowRight size={16} class="sm:w-[18px] sm:h-[18px]" />
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

