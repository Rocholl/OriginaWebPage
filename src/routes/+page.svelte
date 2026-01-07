<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Articles from '$lib/components/Articles.svelte';
	import ImpactStats from '$lib/components/ImpactStats.svelte';
	import { _ } from 'svelte-i18n';
	import { Heart, Share2, Users, Target, Eye, Shield, Users2, HeartHandshake, Instagram } from 'lucide-svelte';
	
	const carouselImages = [
		{
			src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
			alt: 'Memoria e infancia migrante',
			title: 'Preservando la memoria identitaria',
			description: 'Trabajamos para cuidar y transmitir la memoria de la infancia migrante'
		},
		{
			src: 'https://images.unsplash.com/photo-1509099836639-18ba1793926d?w=1200&h=600&fit=crop',
			alt: 'Mujeres migrantes como agentes culturales',
			title: 'Visibilizando la historia de las mujeres migrantes',
			description: 'Reconociendo su papel como cuidadoras y sostenedoras de la memoria'
		},
		{
			src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=600&fit=crop',
			alt: 'Diversidad cultural y arraigo positivo',
			title: 'Fomentando el arraigo positivo desde la infancia',
			description: 'Promovemos la diversidad cultural y el diálogo intergeneracional'
		}
	];
	
	const projects = [
		{
			title: 'Talleres de Expresión Creativa y Narración',
			excerpt: 'Talleres de expresión creativa, fotografía narrativa, cuentos migrantes, círculos de palabra y narración comunitaria para preservar y transmitir la memoria identitaria de la infancia migrante.',
			image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop',
			link: '#'
		},
		{
			title: 'Actividades Escolares y Comunitarias',
			excerpt: 'Actividades escolares, familiares y comunitarias orientadas al arraigo, la memoria y la diversidad cultural, fomentando el diálogo intergeneracional y la participación comunitaria.',
			image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop',
			link: '#'
		},
		{
			title: 'Formación y Producción Cultural',
			excerpt: 'Formación de agentes educativos, narradoras comunitarias y facilitadoras migrantes. Producción y difusión de materiales culturales y pedagógicos sobre la memoria afectiva de la infancia migrante.',
			image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
			link: '#'
		},
		{
			title: 'Ciclo de Cine Paraguayo',
			excerpt: 'Ciclo trimestral de cine paraguayo en espacios comunitarios, promoviendo la diversidad cultural y el diálogo intergeneracional a través del arte cinematográfico.',
			image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=300&fit=crop',
			link: '#'
		}
	];
	
	// Las estadísticas se pasarán como props reactivas al componente
	const impactStatsKeys = [
		{ value: '15,000+', key: 'home.impact.people' },
		{ value: '25', key: 'home.impact.projects' },
		{ value: '50+', key: 'home.impact.communities' },
		{ value: '10+', key: 'home.impact.years' }
	];
	
	// Función derivada para obtener las estadísticas con traducciones
	$: impactStats = impactStatsKeys.map(stat => ({
		value: stat.value,
		label: $_(stat.key)
	}));
</script>

<svelte:head>
	<title>{$_('home.title')} - Origina</title>
</svelte:head>

<div class="pt-8">
	<!-- Hero Section -->
	<section class="text-center py-12 sm:py-16 md:py-20 bg-primary text-white mb-8 md:mb-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6">
			<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 md:mb-6 font-bold leading-tight">
				{$_('home.title')}
			</h1>
			<p class="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 mb-6 md:mb-8 max-w-3xl mx-auto px-2">
				{$_('home.subtitle')}
			</p>
			<div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
				<a
					href="/work-in-progress"
					class="bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center text-sm sm:text-base"
				>
					<Heart size={18} class="sm:w-5 sm:h-5" />
					{$_('home.help.donate')}
				</a>
			</div>
		</div>
	</section>
	
	<!-- Carousel Section -->
	<section class="py-8 mb-12">
		<div class="max-w-7xl mx-auto px-4">
			<Carousel images={carouselImages} />
		</div>
	</section>
	
	<!-- Mission & Vision Section -->
	<section class="py-10 sm:py-12 md:py-16 bg-beige mb-8 md:mb-12">
		<div class="max-w-7xl mx-auto px-4 sm:px-6">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-10 md:mb-16">
				<div class="bg-white p-6 sm:p-8 rounded-lg shadow-md">
					<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
						<Target class="text-primary sm:w-8 sm:h-8" size={28} />
						<h2 class="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
							{$_('home.mission.title')}
						</h2>
					</div>
					<p class="text-dark-600 text-base sm:text-lg leading-relaxed">
						{$_('home.mission.description')}
					</p>
				</div>
				<div class="bg-white p-6 sm:p-8 rounded-lg shadow-md">
					<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
						<Eye class="text-secondary sm:w-8 sm:h-8" size={28} />
						<h2 class="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
							{$_('home.vision.title')}
						</h2>
					</div>
					<p class="text-dark-600 text-base sm:text-lg leading-relaxed">
						{$_('home.vision.description')}
					</p>
				</div>
			</div>
			
			<!-- Values Section -->
			<div class="text-center">
				<h2 class="text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-10 md:mb-12 text-dark-800 font-bold px-4">
					{$_('home.values.title')}
				</h2>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
					<div class="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
						<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
							<Shield class="text-primary sm:w-7 sm:h-7" size={24} />
							<h3 class="text-xl sm:text-2xl text-primary font-semibold">
								{$_('home.values.transparency')}
							</h3>
						</div>
						<p class="text-dark-600 text-sm sm:text-base">
							{$_('home.values.transparencyDesc')}
						</p>
					</div>
					<div class="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
						<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
							<HeartHandshake class="text-primary sm:w-7 sm:h-7" size={24} />
							<h3 class="text-xl sm:text-2xl text-primary font-semibold">
								{$_('home.values.commitment')}
							</h3>
						</div>
						<p class="text-dark-600 text-sm sm:text-base">
							{$_('home.values.commitmentDesc')}
						</p>
					</div>
					<div class="bg-white p-5 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
						<div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
							<Users2 class="text-primary sm:w-7 sm:h-7" size={24} />
							<h3 class="text-xl sm:text-2xl text-primary font-semibold">
								{$_('home.values.solidarity')}
							</h3>
						</div>
						<p class="text-dark-600 text-sm sm:text-base">
							{$_('home.values.solidarityDesc')}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<!-- Impact Stats Section -->
	<ImpactStats stats={impactStats} />
	
	<!-- Projects Section -->
	<Articles articles={projects} />
	
	<!-- How to Help Section -->
	<section class="py-10 sm:py-12 md:py-16 bg-beige">
		<div class="max-w-7xl mx-auto px-4 sm:px-6">
			<h2 class="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 sm:mb-10 md:mb-12 text-dark-800 font-bold px-4">
				{$_('home.help.title')}
			</h2>
			<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
				<div class="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center">
					<div class="flex justify-center mb-4">
						<div class="bg-primary/10 p-3 sm:p-4 rounded-full">
							<Heart class="text-primary sm:w-10 sm:h-10" size={32} />
						</div>
					</div>
					<h3 class="text-xl sm:text-2xl mb-3 text-primary font-semibold">
						{$_('home.help.donate')}
					</h3>
					<p class="text-dark-600 mb-4 sm:mb-6 text-sm sm:text-base">
						{$_('home.help.donateDesc')}
					</p>
					<a
						href="/work-in-progress"
						class="bg-primary text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md font-semibold hover:bg-secondary transition-colors inline-flex items-center gap-2 text-sm sm:text-base"
					>
						<Heart size={16} class="sm:w-[18px] sm:h-[18px]" />
						{$_('home.help.donate')}
					</a>
				</div>
				<div class="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center">
					<div class="flex justify-center mb-4">
						<div class="bg-primary/10 p-3 sm:p-4 rounded-full">
							<Share2 class="text-primary sm:w-10 sm:h-10" size={32} />
						</div>
					</div>
					<h3 class="text-xl sm:text-2xl mb-3 text-primary font-semibold">
						{$_('home.help.spread')}
					</h3>
					<p class="text-dark-600 mb-4 sm:mb-6 text-sm sm:text-base">
						{$_('home.help.spreadDesc')}
					</p>
					<div class="flex gap-3 sm:gap-4 justify-center">
						<a href="https://www.instagram.com/origina.memoria" target="_blank" rel="noopener noreferrer" class="text-primary hover:text-secondary transition-colors p-2 hover:bg-primary/10 rounded-full" aria-label="Instagram">
							<Instagram size={20} class="sm:w-6 sm:h-6" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>
