<script>
	import { _ } from 'svelte-i18n';
	import { fade } from 'svelte/transition';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';
	
	let { images = [] } = $props();
	let currentIndex = $state(0);
	let autoplayInterval;
	
	function nextImage() {
		currentIndex = (currentIndex + 1) % images.length;
	}
	
	function prevImage() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
	
	function goToImage(index) {
		currentIndex = index;
	}
	
	function startAutoplay() {
		autoplayInterval = setInterval(nextImage, 5000);
	}
	
	function stopAutoplay() {
		if (autoplayInterval) {
			clearInterval(autoplayInterval);
		}
	}
	
	startAutoplay();
</script>

<div
	class="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg"
	role="region"
	aria-label="Image carousel"
	onmouseenter={stopAutoplay}
	onmouseleave={startAutoplay}
>
	<div class="relative w-full aspect-video">
		{#each images as image, index (image.src)}
			{#if index === currentIndex}
				<div class="absolute top-0 left-0 w-full h-full" transition:fade={{ duration: 300 }}>
					<img src={image.src} alt={image.alt || `Image ${index + 1}`} class="w-full h-full object-cover" />
					{#if image.title}
						<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 sm:p-6 md:p-8">
							<h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-1 sm:mb-2">{image.title}</h2>
							{#if image.description}
								<p class="text-sm sm:text-base md:text-lg lg:text-xl opacity-90">{image.description}</p>
							{/if}
						</div>
					{/if}
				</div>
			{/if}
		{/each}
		
		<button
			class="absolute top-1/2 -translate-y-1/2 left-2 sm:left-4 bg-white/80 hover:bg-white border-none w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full cursor-pointer transition-colors z-10 flex items-center justify-center shadow-lg"
			onclick={() => prevImage()}
			aria-label={$_('carousel.prev')}
		>
			<ChevronLeft size={18} class="sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" />
		</button>
		<button
			class="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-white/80 hover:bg-white border-none w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full cursor-pointer transition-colors z-10 flex items-center justify-center shadow-lg"
			onclick={() => nextImage()}
			aria-label={$_('carousel.next')}
		>
			<ChevronRight size={18} class="sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-800" />
		</button>
	</div>
	
	<div class="flex justify-center gap-2 p-2 sm:p-3 md:p-4 bg-black/50">
		{#each images as image, index (image.src)}
			<button
				class="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full border-none cursor-pointer transition-colors {index === currentIndex ? 'bg-white' : 'bg-white/50'}"
				onclick={() => goToImage(index)}
				aria-label="Go to image {index + 1}"
			></button>
		{/each}
	</div>
</div>
