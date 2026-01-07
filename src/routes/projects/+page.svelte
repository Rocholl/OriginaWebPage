<script>
	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { Users, Heart, MapPin, ArrowRight, Target, Eye, Shield, Sparkles, Baby, GraduationCap } from 'lucide-svelte';
	
	const projects = [
		{
			id: 1,
			title: 'Comunidad Nosotras las que Migramos (NQM)',
			description: 'Proyecto social y comunitario sin ánimo de lucro que acompaña, fortalece y visibiliza a las mujeres migrantes, transformando la experiencia migrante en motor de cambio social.',
			fullDescription: 'Comunidad Nosotras las que Migramos nace como una iniciativa impulsada por la ONG Origina Memoria e Infancia en Movimiento, fundada por Ana Paniagua T., desde una trayectoria comprometida con la memoria, la infancia, la identidad y los procesos comunitarios. NQM se construye a partir de la experiencia real y colectiva de mujeres migrantes que sostienen vidas, familias, trabajos y comunidades en contextos de desarraigo, desigualdad y silenciamiento. No es un proyecto asistencialista. Es un proyecto de empoderamiento consciente, memoria viva y acción colectiva.',
			image: '/nqm.jpg',
			icon: Users,
			mission: 'Acompañar, fortalecer y visibilizar a las mujeres migrantes.',
			vision: 'Transformar la experiencia migrante en motor de cambio social.',
			values: ['Dignidad', 'Memoria', 'Comunidad', 'Justicia social', 'Cuidado consciente'],
			methodology: 'Método LAS 8 T – NQM',
			activities: [
				'Espacios de encuentro y diálogo',
				'Talleres de empoderamiento',
				'Actividades comunitarias',
				'Formación y capacitación',
				'Acciones de visibilización'
			],
			beneficiaries: 'Mujeres migrantes',
			location: 'España – América Latina (con proyección internacional)',
			status: 'Activo',
			scope: 'Mujeres migrantes (educativo, social, cultural y comunitario)',
			founder: 'Ana Paniagua T.',
			organization: 'ONG Origina Memoria e Infancia en Movimiento'
		},
		{
			id: 2,
			title: 'Curso Doula Migrante',
			description: 'Curso para formar acompañantes conscientes, culturalmente sensibles y con enfoque de derechos humanos, capaces de acompañar nacimientos y procesos migratorios con conciencia, derechos y comunidad.',
			fullDescription: 'Las mujeres migrantes atraviesan procesos de maternidad, parto y crianza en contextos de desarraigo, barreras idiomáticas, choques culturales y, en muchos casos, vulneración de derechos. El Curso Doula Migrante nace para formar acompañantes conscientes, culturalmente sensibles y con enfoque de derechos humanos. El curso utiliza metodología de educación popular, enfoque vivencial, testimonios reales, trabajo reflexivo y práctico.',
			image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
			icon: Baby,
			mission: 'Formar doulas con perspectiva migrante capaces de acompañar de manera ética, empática y profesional a mujeres y familias en contextos de migración.',
			vision: 'Acompañar nacimientos y procesos migratorios con conciencia, derechos y comunidad.',
			values: ['Conciencia', 'Derechos humanos', 'Comunidad', 'Interculturalidad', 'Empatía'],
			methodology: 'Educación popular, enfoque vivencial, testimonios reales, trabajo reflexivo y práctico.',
			objectives: [
				'Comprender la experiencia migratoria y su impacto emocional y corporal',
				'Incorporar enfoque intercultural y de género',
				'Brindar herramientas prácticas de acompañamiento prenatal, parto y posparto',
				'Fortalecer redes comunitarias de apoyo'
			],
			contents: [
				'Migración, cuerpo y maternidad',
				'Rol de la doula migrante',
				'Derechos reproductivos y humanos',
				'Interculturalidad y comunicación',
				'Acompañamiento emocional',
				'Red de apoyo y autocuidado',
				'Prácticas comunitarias',
				'Proyecto final de acompañamiento'
			],
			activities: [
				'Curso online con encuentros en directo',
				'Materiales descargables',
				'Acompañamiento comunitario',
				'Trabajo reflexivo y práctico',
				'Proyecto final de acompañamiento'
			],
			beneficiaries: 'Mujeres migrantes, activistas comunitarias, acompañantes de parto, educadoras, cuidadoras y personas interesadas en el acompañamiento respetuoso',
			location: 'Online (con encuentros en directo)',
			status: 'Activo',
			duration: '8 semanas (flexible según edición)',
			modality: 'Curso online con encuentros en directo, materiales descargables y acompañamiento comunitario',
			certification: 'Certificado de participación emitido por Origina – Memoria e Infancia en Movimiento',
			founder: 'Ana Paniagua T.',
			organization: 'ONG Origina – Memoria e Infancia en Movimiento',
			project: 'Nosotras las que Migramos (NQM)'
		}
	];
	
	// Leer el ID del proyecto desde la URL
	let urlProjectId = $derived(() => {
		const idParam = $page.url.searchParams.get('id');
		return idParam ? parseInt(idParam, 10) : null;
	});
	
	let selectedProjectId = $state(/** @type {number | null} */ (urlProjectId()));
	
	// Actualizar cuando cambie la URL
	$effect(() => {
		const idFromUrl = urlProjectId();
		if (idFromUrl && projects.find(p => p.id === idFromUrl)) {
			selectedProjectId = idFromUrl;
			if (typeof window !== 'undefined') {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		}
	});
	
	/**
	 * @param {number | null} id
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
	
	let selectedProject = $derived(projects.find(p => p.id === selectedProjectId) || null);
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
					Volver a proyectos
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
							<h2 class="text-3xl sm:text-4xl md:text-5xl text-dark-800 font-bold">
								{project.title}
							</h2>
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
									<h3 class="text-xl font-semibold">Misión</h3>
								</div>
								<p class="opacity-95">{project.mission}</p>
							</div>
							
							<div class="bg-gray-50 p-5 rounded-lg">
								<div class="flex items-center gap-2 mb-3">
									<Eye size={20} class="text-primary" />
									<h3 class="text-xl font-semibold text-dark-800">Visión</h3>
								</div>
								<p class="text-dark-600">{project.vision}</p>
							</div>
							
							<div class="bg-gray-50 p-5 rounded-lg">
								<div class="flex items-center gap-2 mb-3">
									<Shield size={20} class="text-primary" />
									<h3 class="text-xl font-semibold text-dark-800">Valores</h3>
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
									<h3 class="text-xl font-semibold text-dark-800">Metodología</h3>
								</div>
								<p class="text-dark-600 text-lg font-medium">{project.methodology}</p>
							</div>
						{/if}
						
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div class="bg-beige p-5 rounded-lg">
								<h3 class="text-xl font-semibold text-dark-800 mb-3 flex items-center gap-2">
									<MapPin size={20} class="text-primary" />
									Ubicación
								</h3>
								<p class="text-dark-600">{project.location}</p>
							</div>
							
							<div class="bg-beige p-5 rounded-lg">
								<h3 class="text-xl font-semibold text-dark-800 mb-3 flex items-center gap-2">
									<Users size={20} class="text-primary" />
									Beneficiarios
								</h3>
								<p class="text-dark-600">{project.beneficiaries}</p>
								{#if project.scope}
									<p class="text-dark-600 text-sm mt-2 italic">Ámbito: {project.scope}</p>
								{/if}
							</div>
						</div>

						<!-- Objetivos específicos -->
						{#if project.objectives && project.objectives.length > 0}
							<div class="bg-gray-50 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">Objetivos específicos</h3>
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

						<!-- Contenidos principales -->
						{#if project.contents && project.contents.length > 0}
							<div class="bg-white p-6 rounded-lg border border-gray-200 mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">Contenidos principales</h3>
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

						<!-- Información adicional del curso -->
						{#if project.duration || project.modality || project.certification}
							<div class="bg-primary/10 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">Información del curso</h3>
								<div class="space-y-3 text-dark-600">
									{#if project.duration}
										<p><span class="font-semibold">Duración:</span> {project.duration}</p>
									{/if}
									{#if project.modality}
										<p><span class="font-semibold">Modalidad:</span> {project.modality}</p>
									{/if}
									{#if project.certification}
										<p><span class="font-semibold">Certificación:</span> {project.certification}</p>
									{/if}
								</div>
							</div>
						{/if}

						<!-- Información del proyecto -->
						{#if project.organization || project.founder || project.project}
							<div class="bg-gray-50 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-3">Información del proyecto</h3>
								<div class="space-y-2 text-dark-600">
									{#if project.organization}
										<p><span class="font-semibold">Entidad impulsora:</span> {project.organization}</p>
									{/if}
									{#if project.founder}
										<p><span class="font-semibold">Fundadora y directora:</span> {project.founder}</p>
									{/if}
									{#if project.project}
										<p><span class="font-semibold">Proyecto:</span> {project.project}</p>
									{/if}
								</div>
							</div>
						{/if}
						
						{#if project.activities && project.activities.length > 0}
							<div class="bg-gray-50 p-6 rounded-lg">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">Actividades principales</h3>
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
								Colaborar con este proyecto
							</a>
						</div>
					</div>
				</article>
			</div>
		{:else}
			<!-- Projects Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
				{#each projects as project (project.id)}
					<button
						type="button"
						class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer text-left w-full"
						onclick={() => selectProject(project.id)}
						onkeydown={(e) => e.key === 'Enter' && selectProject(project.id)}
					>
						<div class="relative w-full h-48 overflow-hidden">
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
						
						<div class="p-5 sm:p-6">
							<h3 class="text-xl sm:text-2xl mb-3 text-dark-800 font-bold">
								{project.title}
							</h3>
							<p class="text-dark-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
								{project.description}
							</p>
							
							<div class="flex items-center gap-4 text-sm text-dark-500 mb-4">
								<div class="flex items-center gap-1">
									<MapPin size={16} />
									<span class="truncate">{project.location}</span>
								</div>
							</div>
							
							<span class="text-primary font-semibold inline-flex items-center gap-2 text-sm sm:text-base w-full justify-center py-2 border border-primary rounded-md block">
								Ver detalles
								<ArrowRight size={16} />
							</span>
						</div>
					</button>
				{/each}
			</div>
			
			<!-- Call to Action -->
			<div class="mt-12 sm:mt-16 text-center bg-primary text-white p-8 sm:p-10 md:p-12 rounded-lg">
				<h2 class="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold">
					¿Quieres colaborar con nuestros proyectos?
				</h2>
				<p class="text-lg sm:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
					Tu apoyo hace posible que estos proyectos sigan transformando vidas y preservando la memoria de la infancia migrante
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/work-in-progress"
						class="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center"
					>
						<Heart size={20} />
						Hacer una donación
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
