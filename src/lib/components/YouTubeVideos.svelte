<script>
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { Youtube, Play, ExternalLink } from 'lucide-svelte';
	
	/** @type {Array<{id: string, title: string, description: string, thumbnail: string, published: string, author: string, url: string}>} */
	let videos = [];
	let loading = true;
	/** @type {string | null} */
	let error = null;
	
	onMount(async () => {
		try {
			const response = await fetch('/api/youtube?max=12');
			const data = await response.json();
			
			if (data.videos) {
				videos = data.videos;
			} else if (data.error) {
				error = data.error;
			}
		} catch (e) {
			console.error('Error cargando videos:', e);
			error = 'Error al cargar los videos';
		} finally {
			loading = false;
		}
	});
	
	/**
	 * @param {string} dateString
	 */
	function formatDate(dateString) {
		if (!dateString) return '';
		try {
			const date = new Date(dateString);
			return date.toLocaleDateString('es-ES', { 
				year: 'numeric', 
				month: 'long', 
				day: 'numeric' 
			});
		} catch {
			return dateString;
		}
	}
	
	/**
	 * @param {string} videoId
	 */
	function getEmbedUrl(videoId) {
		return `https://www.youtube.com/embed/${videoId}`;
	}
</script>

{#if loading}
	<div class="flex justify-center items-center py-16">
		<div class="text-center">
			<div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
			<p class="text-dark-600">{$_('home.videos.loading')}</p>
		</div>
	</div>
{:else if error || videos.length === 0}
	<div class="text-center py-16">
		<Youtube class="mx-auto mb-4 text-primary" size={48} />
		<p class="text-dark-600 mb-4">{$_('home.videos.error')}</p>
		<a 
			href="https://www.youtube.com/@origina.memoria" 
			target="_blank" 
			rel="noopener noreferrer"
			class="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
		>
			<span>{$_('home.videos.visitChannel')}</span>
			<ExternalLink size={16} />
		</a>
	</div>
{:else}
	<div class="py-10 sm:py-12 md:py-16">
		<div class="max-w-7xl mx-auto px-4 sm:px-6">
			<div class="text-center mb-8 sm:mb-10 md:mb-12">
				<div class="flex items-center justify-center gap-3 mb-4">
					<Youtube class="text-primary sm:w-8 sm:h-8" size={32} />
					<h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-dark-800 font-bold">
						{$_('home.videos.title')}
					</h2>
				</div>
				<p class="text-dark-600 text-base sm:text-lg max-w-3xl mx-auto mb-6">
					{$_('home.videos.subtitle')}
				</p>
				<a 
					href="https://www.youtube.com/@origina.memoria" 
					target="_blank" 
					rel="noopener noreferrer"
					class="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold"
				>
					<span>{$_('home.videos.viewAll')}</span>
					<ExternalLink size={18} />
				</a>
			</div>
			
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
				{#each videos as video}
					<div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
						<a 
							href={video.url} 
							target="_blank" 
							rel="noopener noreferrer"
							class="block"
						>
							<div class="relative aspect-video bg-gray-200 overflow-hidden">
								<img 
									src={video.thumbnail} 
									alt={video.title}
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
									loading="lazy"
								/>
								<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
									<div class="bg-red-600 rounded-full p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity">
										<Play class="text-white" size={24} fill="white" />
									</div>
								</div>
								<div class="absolute bottom-2 right-2 bg-black/75 text-white text-xs px-2 py-1 rounded">
									YouTube
								</div>
							</div>
							<div class="p-4 sm:p-6">
								<h3 class="text-lg sm:text-xl font-semibold text-dark-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
									{video.title}
								</h3>
								{#if video.description}
									<p class="text-dark-600 text-sm sm:text-base mb-3 line-clamp-2">
										{video.description}
									</p>
								{/if}
								<div class="flex items-center justify-between text-xs sm:text-sm text-dark-500">
									<span>{formatDate(video.published)}</span>
									<span class="flex items-center gap-1 text-primary">
										<ExternalLink size={14} />
										Ver en YouTube
									</span>
								</div>
							</div>
						</a>
					</div>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.line-clamp-2 {
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
