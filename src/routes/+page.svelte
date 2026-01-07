<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import Articles from '$lib/components/Articles.svelte';
	import ImpactStats from '$lib/components/ImpactStats.svelte';
	import { _ } from 'svelte-i18n';
	import { Heart, Share2, Users, Target, Eye, Shield, Users2, HeartHandshake, Instagram } from 'lucide-svelte';
	
	const carouselImages = [
		{
			src: 'nqm.jpg',
			alt: 'Memoria e infancia migrante',
			title: 'Preservando la memoria identitaria',
			description: 'Trabajamos para cuidar y transmitir la memoria de la infancia migrante'
		},
		{
			src: 'carroussel-2.jpg',
			alt: 'Mujeres migrantes como agentes culturales',
			title: 'Visibilizando la historia de las mujeres migrantes',
			description: 'Reconociendo su papel como cuidadoras y sostenedoras de la memoria'
		},
		{
			src: 'carroussel-1.png',
			alt: 'Diversidad cultural y arraigo positivo',
			title: 'Fomentando el arraigo positivo desde la infancia',
			description: 'Promovemos la diversidad cultural y el diálogo intergeneracional'
		}
	];
	
	const projects = [
		{
			id: 1,
			title: 'Comunidad Nosotras las que Migramos (NQM)',
			excerpt: 'Proyecto social y comunitario sin ánimo de lucro que acompaña, fortalece y visibiliza a las mujeres migrantes, transformando la experiencia migrante en motor de cambio social.',
			image: '/nqm.jpg',
			link: '/projects?id=1'
		},
		{
			id: 2,
			title: 'Curso Doula Migrante',
			excerpt: 'Curso para formar acompañantes conscientes, culturalmente sensibles y con enfoque de derechos humanos, capaces de acompañar nacimientos y procesos migratorios con conciencia, derechos y comunidad.',
			image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
			link: '/projects?id=2'
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

<div>
	<!-- Hero Section -->
	<section class="relative text-center py-16 sm:py-20 md:py-28 lg:py-32 bg-gradient-to-br from-primary via-primary to-secondary text-white mb-8 md:mb-12 overflow-hidden">
		<!-- Decorative elements -->
		<div class="absolute inset-0 opacity-10">
			<div class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
			<div class="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
			<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"></div>
		</div>
		
		<div class="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
			<div class="mb-6 sm:mb-8 animate-fade-in">
				<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 md:mb-8 font-bold leading-tight drop-shadow-lg">
					{$_('home.title')}
				</h1>
			</div>
			<div class="mb-8 sm:mb-10 md:mb-12 animate-fade-in-delay">
				<p class="text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-95 mb-8 max-w-4xl mx-auto px-2 leading-relaxed font-light">
					{$_('home.subtitle')}
				</p>
			</div>
			<div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 animate-fade-in-delay-2">
				<a
					href="/work-in-progress"
					class="group bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 justify-center text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
				>
					<Heart size={20} class="sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
					<span>{$_('home.help.donate')}</span>
				</a>
			</div>
		</div>
		
		<!-- Wave separator -->
		<div class="absolute bottom-0 left-0 right-0">
			<svg class="w-full h-12 sm:h-16 md:h-20 text-beige" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
				<path d="M0,0 C150,80 350,80 600,40 C850,0 1050,0 1200,40 L1200,120 L0,120 Z"></path>
			</svg>
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
