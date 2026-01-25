<script>
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { Users, Heart, MapPin, ArrowRight, Target, Eye, Shield, Sparkles, Baby, GraduationCap } from 'lucide-svelte';
	
	// Iconos para los proyectos
	const projectIcons = {
		1: Users,
		2: Baby
	};
	
	// Imágenes de los proyectos
	const projectImages = {
		1: '/nqm.jpg',
		2: '/projects-1.png'
	};
	
	// Obtener proyectos desde las traducciones
	let projects = $derived.by(() => {
		const projectsData = $_('projects.items');
		/**
		 * @type {any[]}
		 */
		const projectsArray = Array.isArray(projectsData) ? projectsData : [];
		return projectsArray.map((project) => ({
			...project,
			icon: projectIcons[/** @type {1|2} */ (project.id)],
			image: projectImages[/** @type {1|2} */ (project.id)] || project.image
		}));
	});
	
	/**
	 * @type {any[]}
	 */
	let projectsList = $derived(projects);
	
	// Leer el ID del proyecto desde la URL
	let urlProjectId = $derived(() => {
		const idParam = $page.url.searchParams.get('id');
		return idParam ? parseInt(idParam, 10) : null;
	});
	
	let selectedProjectId = $state(/** @type {number | null} */ (null));
	
	// Actualizar cuando cambie la URL
	$effect(() => {
		const idFromUrl = urlProjectId();
		if (idFromUrl && projectsList.find((/** @type {any} */ p) => p.id === idFromUrl)) {
			selectedProjectId = idFromUrl;
			if (typeof window !== 'undefined') {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		}
	});
	
	/**
	 * @param {number} id
	 */
	function selectProject(id) {
		selectedProjectId = id;
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
			// Actualizar la URL sin recargar la página
			const url = new URL(window.location.href);
			url.searchParams.set('id', id.toString());
			window.history.pushState({}, '', url);
		}
	}
	
	function closeProject() {
		selectedProjectId = null;
		if (typeof window !== 'undefined') {
			const url = new URL(window.location.href);
			url.searchParams.delete('id');
			window.history.pushState({}, '', url);
		}
	}
	
	let selectedProject = $derived(projectsList.find((/** @type {any} */ p) => p.id === selectedProjectId) || null);
</script>

<svelte:head>
	<title>Nuestros Proyectos - Origina</title>
</svelte:head>

<div class="py-10 sm:py-12 md:py-16 min-h-[60vh]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<!-- Header -->
		<div class="text-center mb-10 sm:mb-12 md:mb-16">
			<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-dark-800 font-bold">
				{$_('home.projects.title')}
			</h1>
			<p class="text-lg sm:text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto px-4">
				Conoce nuestros proyectos dedicados a preservar la memoria identitaria de la infancia migrante y fortalecer su arraigo positivo
			</p>
		</div>
		
		{#if selectedProject}
			{@const project = selectedProject}
			<!-- Project Detail View -->
			<div class="max-w-4xl mx-auto">
				<button
					onclick={closeProject}
					class="mb-6 text-primary hover:text-secondary transition-colors flex items-center gap-2 font-semibold"
				>
					<ArrowRight size={20} class="rotate-180" />
					{$_('projects.back')}
				</button>
				
				<article class="bg-white rounded-lg shadow-lg overflow-hidden">
					<div class="relative w-full h-64 sm:h-80 md:h-96">
						<img
							src={project.image}
							alt={project.title}
							class="w-full h-full object-cover"
						/>
						<div class="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
							{project.status}
						</div>
					</div>
					
					<div class="p-6 sm:p-8 md:p-10">
						<div class="flex items-center gap-3 mb-4">
							<div class="bg-primary/10 p-3 rounded-full">
								{#if project.icon}
									{@const Icon = project.icon}
									<Icon class="text-primary" size={32} />
								{/if}
							</div>
							<div>
								<h2 class="text-3xl sm:text-4xl md:text-5xl text-dark-800 font-bold">
									{project.title}
								</h2>
								{#if project.subtitle}
									<p class="text-xl sm:text-2xl text-dark-600 mt-2">
										{project.subtitle}
									</p>
								{/if}
							</div>
						</div>
						
						<p class="text-dark-600 text-lg sm:text-xl mb-6 leading-relaxed">
							{project.description}
						</p>
						
						<div class="prose max-w-none mb-8">
							<p class="text-dark-600 text-base sm:text-lg leading-relaxed">
								{project.fullDescription}
							</p>
						</div>

						<!-- Misión, Visión y Valores -->
						<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							<div class="bg-primary text-white p-5 rounded-lg">
								<div class="flex items-center gap-2 mb-3">
									<Target size={20} />
									<h3 class="text-xl font-semibold">{$_('projects.detail.mission')}</h3>
								</div>
								<p class="opacity-95">{project.mission}</p>
							</div>
							
							<div class="bg-gray-50 p-5 rounded-lg">
								<div class="flex items-center gap-2 mb-3">
									<Eye size={20} class="text-primary" />
									<h3 class="text-xl font-semibold text-dark-800">{$_('projects.detail.vision')}</h3>
								</div>
								<p class="text-dark-600">{project.vision}</p>
							</div>
							
							<div class="bg-gray-50 p-5 rounded-lg">
								<div class="flex items-center gap-2 mb-3">
									<Shield size={20} class="text-primary" />
									<h3 class="text-xl font-semibold text-dark-800">{$_('projects.detail.values')}</h3>
								</div>
								<ul class="space-y-1">
									{#each project.values as value (value)}
										<li class="text-dark-600 text-sm">• {value}</li>
									{/each}
								</ul>
							</div>
						</div>

						<!-- Metodología -->
						{#if project.methodology}
							<div class="bg-primary/10 p-6 rounded-lg mb-8">
								<div class="flex items-center gap-2 mb-3">
									<Sparkles size={20} class="text-primary" />
									<h3 class="text-xl font-semibold text-dark-800">{$_('projects.detail.methodology')}</h3>
								</div>
								<p class="text-dark-600 text-lg font-medium">{project.methodology}</p>
							</div>
						{/if}
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div class="bg-beige p-5 rounded-lg">
								<h3 class="text-xl font-semibold text-dark-800 mb-3 flex items-center gap-2">
									<MapPin size={20} class="text-primary" />
									{$_('projects.detail.location')}
								</h3>
								<p class="text-dark-600">{project.location}</p>
							</div>
							
							<div class="bg-beige p-5 rounded-lg">
								<h3 class="text-xl font-semibold text-dark-800 mb-3 flex items-center gap-2">
									<Users size={20} class="text-primary" />
									{$_('projects.detail.beneficiaries')}
								</h3>
								<p class="text-dark-600">{project.beneficiaries}</p>
								{#if project.scope}
									<p class="text-dark-600 text-sm mt-2 italic">{$_('projects.detail.scope')}: {project.scope}</p>
								{/if}
							</div>
						</div>

						<!-- Objetivos específicos -->
						{#if project.objectives && project.objectives.length > 0}
							<div class="bg-gray-50 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">{$_('projects.detail.objectives')}</h3>
								<ul class="space-y-2">
									{#each project.objectives as objective (objective)}
										<li class="flex items-start gap-3 text-dark-600">
											<span class="text-primary mt-1">•</span>
											<span>{objective}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						<!-- Malla Curricular -->
						{#if project.curriculum && project.curriculum.modules && project.curriculum.modules.length > 0}
							<div class="bg-white p-6 rounded-lg border border-gray-200 mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">{$_('projects.detail.curriculum')}</h3>
								<div class="space-y-3">
									{#each project.curriculum.modules as module (module.number)}
										<div class="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
											<span class="text-primary font-bold text-lg min-w-[60px]">
												{$_('projects.detail.module')} {module.number}
											</span>
											<div class="flex-1">
												<p class="text-dark-800 font-medium">{module.name}</p>
												<p class="text-dark-500 text-sm mt-1">
													{module.hours} {$_('projects.detail.hours')}
												</p>
											</div>
										</div>
									{/each}
								</div>
							</div>
						{/if}

						<!-- Contenidos principales (fallback si no hay curriculum estructurado) -->
						{#if (!project.curriculum || !project.curriculum.modules) && project.contents && project.contents.length > 0}
							<div class="bg-white p-6 rounded-lg border border-gray-200 mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">{$_('projects.detail.contents')}</h3>
								<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
									{#each project.contents as content, index (content)}
										<div class="flex items-start gap-2 text-dark-600">
											<span class="text-primary font-bold">{index + 1}.</span>
											<span>{content}</span>
										</div>
									{/each}
								</div>
							</div>
						{/if}

						<!-- Salidas laborales -->
						{#if project.careerOpportunities && project.careerOpportunities.length > 0}
							<div class="bg-primary/10 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">{$_('projects.detail.careerOpportunities')}</h3>
								<div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
									{#each project.careerOpportunities as opportunity (opportunity)}
										<div class="flex items-start gap-2 text-dark-600">
											<span class="text-primary mt-1">•</span>
											<span>{opportunity}</span>
										</div>
									{/each}
								</div>
							</div>
						{/if}

						<!-- Información adicional del curso -->
						{#if project.duration || project.modality || project.certification}
							<div class="bg-primary/10 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">{$_('projects.detail.courseInfo')}</h3>
								<div class="space-y-3 text-dark-600">
									{#if project.duration}
										<p><span class="font-semibold">{$_('projects.detail.duration')}:</span> {project.duration}</p>
									{/if}
									{#if project.modality}
										<p><span class="font-semibold">{$_('projects.detail.modality')}:</span> {project.modality}</p>
									{/if}
									{#if project.certification}
										<p><span class="font-semibold">{$_('projects.detail.certification')}:</span> {project.certification}</p>
									{/if}
								</div>
							</div>
						{/if}

						<!-- Información del proyecto -->
						{#if project.organization || project.founder || project.project}
							<div class="bg-gray-50 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-3">{$_('projects.detail.projectInfo')}</h3>
								<div class="space-y-2 text-dark-600">
									{#if project.organization}
										<p><span class="font-semibold">{$_('projects.detail.organization')}:</span> {project.organization}</p>
									{/if}
									{#if project.founder}
										<p><span class="font-semibold">{$_('projects.detail.founder')}:</span> {project.founder}</p>
									{/if}
									{#if project.project}
										<p><span class="font-semibold">{$_('projects.detail.project')}:</span> {project.project}</p>
									{/if}
								</div>
							</div>
						{/if}
						
						{#if project.activities && project.activities.length > 0}
							<div class="bg-gray-50 p-6 rounded-lg">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">{$_('projects.detail.activities')}</h3>
								<ul class="space-y-2">
									{#each project.activities as activity (activity)}
										<li class="flex items-start gap-3 text-dark-600">
											<span class="text-primary mt-1">•</span>
											<span>{activity}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}
						
						<div class="mt-8 pt-8 border-t border-gray-200">
							<a
								href="/work-in-progress"
								class="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-secondary transition-colors inline-flex items-center gap-2"
							>
								<Heart size={20} />
								{$_('projects.collaborate')}
							</a>
						</div>
						
						{#if project.copyright || project.license}
							<div class="mt-8 pt-8 border-t border-gray-200">
								<div class="text-center text-sm text-dark-500 space-y-2">
									{#if project.copyright}
										<p class="font-semibold">{project.copyright}</p>
									{/if}
									{#if project.license}
										<p class="leading-relaxed">{project.license}</p>
									{/if}
								</div>
							</div>
						{/if}
					</div>
				</article>
			</div>
		{:else}
			<!-- Projects Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto items-stretch">
				{#each projectsList as project, index (project.id)}
					<button
						type="button"
						class="bg-white rounded-lg p-2 overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer text-left w-full h-full flex flex-col"
						onclick={() => selectProject(project.id)}
						onkeydown={(e) => e.key === 'Enter' && selectProject(project.id)}
					>
						<div class="relative w-full h-48 overflow-hidden flex-shrink-0">
							<img
								src={project.image}
								alt={project.title}
								class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
							/>
							<div class="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
								{project.status}
							</div>
							<div class="absolute top-3 left-3 bg-white/90 p-2 rounded-full">
								{#if project.icon}
									{@const Icon = project.icon}
									<Icon class="text-primary" size={24} />
								{/if}
							</div>
						</div>
						
						<div class="flex-1 flex flex-col p-3 sm:p-4 min-h-0">
							<div class="flex-1 min-h-0 flex flex-col">
								<h3 class="text-xl sm:text-2xl mb-3 text-dark-800 font-bold flex-shrink-0">
									{project.title}
								</h3>
								<p class="text-dark-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3 flex-shrink-0">
									{project.description}
								</p>
								
								<div class="flex items-center gap-4 text-sm text-dark-500 mb-4 flex-shrink-0">
									<div class="flex items-center gap-1">
										<MapPin size={16} />
										<span class="truncate">{project.location}</span>
									</div>
								</div>
							</div>
							
							<div class="mt-auto pt-4 flex-shrink-0">
								<span class="text-primary font-semibold inline-flex items-center gap-2 text-sm sm:text-base w-full justify-center py-2 border border-primary rounded-md block">
									{$_('projects.viewDetails')}
									<ArrowRight size={16} />
								</span>
							</div>
						</div>
					</button>
				{/each}
			</div>
			
			<!-- Call to Action -->
			<div class="mt-12 sm:mt-16 text-center bg-primary text-white p-8 sm:p-10 md:p-12 rounded-lg">
				<h2 class="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold">
					{$_('projects.cta.title')}
				</h2>
				<p class="text-lg sm:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
					{$_('projects.cta.description')}
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/work-in-progress"
						class="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center"
					>
						<Heart size={20} />
						{$_('projects.cta.button')}
					</a>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
