<script>
	import { _ } from 'svelte-i18n';
	import { BookOpen, Heart, MapPin, ArrowRight, Target, Users, Calendar, Sparkles, CheckCircle2, Image as ImageIcon, Video } from 'lucide-svelte';
	
	const workshops = [
		{
			id: 1,
			title: 'Escuelita Origina: Historia, Igualdad y Memoria Viva',
			description: 'Taller educativo, cultural y comunitario dirigido a niños y niñas de 6 a 12 años. A través de la historia del Paraguay, la sensibilización, la igualdad, la migración y la expresión visual, promueve el respeto, la identidad y la convivencia intercultural.',
			fullDescription: 'La Escuelita Origina es un taller educativo, cultural y comunitario dirigido a niños y niñas de 6 a 12 años. A través de la historia del Paraguay, la sensibilización, la igualdad, la migración y la expresión visual, el taller promueve el respeto, la identidad y la convivencia intercultural. Cada sesión combina cuento histórico, actividad participativa, producción visual y cierre reflexivo.',
			image: '/escuelita.png',
			icon: BookOpen,
			objective: 'Fomentar el conocimiento de la historia del Paraguay desde una mirada sensible, inclusiva y visual, promoviendo valores de igualdad, respeto y convivencia.',
			objectives: [
				'Acercar la historia paraguaya de forma simple y atractiva',
				'Sensibilizar sobre la igualdad, la no violencia y el respeto',
				'Visibilizar la migración como experiencia de aprendizaje y orgullo',
				'Potenciar la expresión creativa y visual',
				'Promover el uso responsable de la tecnología'
			],
			contents: [
				'Historia del Paraguay (raíces, independencia, guerras, cultura)',
				'Lengua y cultura guaraní',
				'Migración y diversidad cultural',
				'Igualdad de género y no al odio',
				'Tecnología y creatividad'
			],
			methodology: 'Aprendizaje activo basado en el juego, el relato, la creación manual y la visualización. Cada sesión combina cuento histórico, actividad participativa, producción visual y cierre reflexivo.',
			materials: [
				'Cartón',
				'Papel',
				'Lápices de colores',
				'Revistas',
				'Telas reutilizadas',
				'Botellas plásticas',
				'Semillas',
				'Dispositivos móviles para grabaciones puntuales'
			],
			activities: [
				'Cuento histórico',
				'Actividad participativa',
				'Producción visual',
				'Cierre reflexivo',
				'Exposición final abierta a familias y comunidad'
			],
			beneficiaries: 'Niños y niñas de 6 a 12 años, especialmente pertenecientes a familias migrantes o en contextos de diversidad cultural',
			location: 'Presencial',
			status: 'Activo',
			modality: 'Taller presencial participativo, con dinámicas lúdicas, visuales y creativas',
			schedule: 'Dos sábados al mes',
			duration: '1 hora y 30 minutos por sesión',
			sessions: '20 sesiones anuales',
			results: [
				'Niños y niñas con mayor conocimiento de la historia paraguaya',
				'Desarrollo de actitudes de respeto e igualdad',
				'Producción de materiales visuales (murales, maquetas, videos)',
				'Fortalecimiento del sentido de pertenencia e identidad cultural'
			],
			closing: 'Exposición final abierta a las familias y comunidad, donde se presentan los trabajos realizados durante el taller',
			gallery: {
				images: [
					'/talleres/IMG-20250906-WA0018.jpg',
					'/talleres/IMG-20251122-WA0055.jpg',
					'/talleres/IMG-20251122-WA0061.jpg',
					'/talleres/IMG-20251122-WA0073.jpg'
				],
				videos: [
					'/talleres/VID-20250906-WA0029.mp4',
					'/talleres/VID-20251122-WA0121.mp4'
				]
			}
		}
	];
	
	let selectedWorkshopId = $state(/** @type {number | null} */ (null));
	let selectedImageIndex = $state(/** @type {number | null} */ (null));
	
	/**
	 * @param {number | null} id
	 */
	function selectWorkshop(id) {
		selectedWorkshopId = id;
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
	
	function closeWorkshop() {
		selectedWorkshopId = null;
		selectedImageIndex = null;
	}

	/**
	 * @param {number} index
	 */
	function openImageLightbox(index) {
		selectedImageIndex = index;
	}

	function closeImageLightbox() {
		selectedImageIndex = null;
	}

	function nextImage() {
		if (selectedWorkshop?.gallery?.images) {
			selectedImageIndex = ((selectedImageIndex ?? 0) + 1) % selectedWorkshop.gallery.images.length;
		}
	}

	function prevImage() {
		if (selectedWorkshop?.gallery?.images) {
			selectedImageIndex = ((selectedImageIndex ?? 0) - 1 + selectedWorkshop.gallery.images.length) % selectedWorkshop.gallery.images.length;
		}
	}
	
	let selectedWorkshop = $derived(workshops.find(w => w.id === selectedWorkshopId) || null);
	let lightboxImage = $derived(selectedWorkshop?.gallery?.images?.[selectedImageIndex ?? 0] || null);
</script>

<svelte:head>
	<title>{$_('workshops.title')} - Origina</title>
</svelte:head>

<div class="py-10 sm:py-12 md:py-16 min-h-[60vh]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<!-- Header -->
		<div class="text-center mb-10 sm:mb-12 md:mb-16">
			<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-dark-800 font-bold">
				{$_('workshops.title')}
			</h1>
			<p class="text-lg sm:text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto px-4">
				Espacios creativos para fortalecer la memoria identitaria y promover valores de igualdad, respeto y convivencia intercultural
			</p>
		</div>
		
		{#if selectedWorkshop}
			{@const workshop = selectedWorkshop}
			<!-- Workshop Detail View -->
			<div class="max-w-4xl mx-auto">
				<button
					onclick={closeWorkshop}
					class="mb-6 text-primary hover:text-secondary transition-colors flex items-center gap-2 font-semibold"
				>
					<ArrowRight size={20} class="rotate-180" />
					Volver a talleres
				</button>
				
				<article class="bg-white rounded-lg shadow-lg overflow-hidden">
					<div class="relative w-full h-64 sm:h-80 md:h-96">
						<img
							src={workshop.image}
							alt={workshop.title}
							class="w-full h-full object-cover"
						/>
						<div class="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
							{workshop.status}
						</div>
					</div>
					
					<div class="p-6 sm:p-8 md:p-10">
						<div class="flex items-center gap-3 mb-4">
							<div class="bg-primary/10 p-3 rounded-full">
								{#if workshop.icon}
									{@const Icon = workshop.icon}
									<Icon class="text-primary" size={32} />
								{/if}
							</div>
							<h2 class="text-3xl sm:text-4xl md:text-5xl text-dark-800 font-bold">
								{workshop.title}
							</h2>
						</div>
						
						<p class="text-dark-600 text-lg sm:text-xl mb-6 leading-relaxed">
							{workshop.description}
						</p>
						
						<div class="prose max-w-none mb-8">
							<p class="text-dark-600 text-base sm:text-lg leading-relaxed">
								{workshop.fullDescription}
							</p>
						</div>

						<!-- Objetivo General -->
						{#if workshop.objective}
							<div class="bg-primary text-white p-6 rounded-lg mb-8">
								<div class="flex items-center gap-2 mb-3">
									<Target size={24} />
									<h3 class="text-xl font-semibold">Objetivo General</h3>
								</div>
								<p class="opacity-95 text-lg">{workshop.objective}</p>
							</div>
						{/if}

						<!-- Objetivos Específicos -->
						{#if workshop.objectives && workshop.objectives.length > 0}
							<div class="bg-gray-50 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">Objetivos específicos</h3>
								<ul class="space-y-2">
									{#each workshop.objectives as objective (objective)}
										<li class="flex items-start gap-3 text-dark-600">
											<span class="text-primary mt-1">•</span>
											<span>{objective}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						<!-- Contenidos -->
						{#if workshop.contents && workshop.contents.length > 0}
							<div class="bg-white p-6 rounded-lg border border-gray-200 mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">Contenidos del Taller</h3>
								<ul class="space-y-2">
									{#each workshop.contents as content (content)}
										<li class="flex items-start gap-3 text-dark-600">
											<span class="text-primary mt-1">•</span>
											<span>{content}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						<!-- Metodología -->
						{#if workshop.methodology}
							<div class="bg-primary/10 p-6 rounded-lg mb-8">
								<div class="flex items-center gap-2 mb-3">
									<Sparkles size={20} class="text-primary" />
									<h3 class="text-xl font-semibold text-dark-800">Metodología</h3>
								</div>
								<p class="text-dark-600 text-lg font-medium">{workshop.methodology}</p>
							</div>
						{/if}

						<!-- Materiales -->
						{#if workshop.materials && workshop.materials.length > 0}
							<div class="bg-gray-50 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">Materiales</h3>
								<p class="text-dark-600 mb-3 text-sm italic">Materiales accesibles y reciclados:</p>
								<div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
									{#each workshop.materials as material (material)}
										<div class="flex items-start gap-2 text-dark-600">
											<CheckCircle2 size={16} class="text-primary mt-1 flex-shrink-0" />
											<span class="text-sm">{material}</span>
										</div>
									{/each}
								</div>
							</div>
						{/if}

						<!-- Información del taller -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div class="bg-beige p-5 rounded-lg">
								<h3 class="text-xl font-semibold text-dark-800 mb-3 flex items-center gap-2">
									<MapPin size={20} class="text-primary" />
									Modalidad
								</h3>
								<p class="text-dark-600">{workshop.modality}</p>
								{#if workshop.location}
									<p class="text-dark-600 text-sm mt-2"><span class="font-semibold">Ubicación:</span> {workshop.location}</p>
								{/if}
							</div>
							
							<div class="bg-beige p-5 rounded-lg">
								<h3 class="text-xl font-semibold text-dark-800 mb-3 flex items-center gap-2">
									<Calendar size={20} class="text-primary" />
									Duración y Calendario
								</h3>
								<p class="text-dark-600">{workshop.sessions}</p>
								{#if workshop.schedule}
									<p class="text-dark-600 text-sm mt-2"><span class="font-semibold">Horario:</span> {workshop.schedule}</p>
								{/if}
								{#if workshop.duration}
									<p class="text-dark-600 text-sm mt-1"><span class="font-semibold">Duración por sesión:</span> {workshop.duration}</p>
								{/if}
							</div>
						</div>

						<div class="bg-beige p-5 rounded-lg mb-8">
							<h3 class="text-xl font-semibold text-dark-800 mb-3 flex items-center gap-2">
								<Users size={20} class="text-primary" />
								Población Destinataria
							</h3>
							<p class="text-dark-600">{workshop.beneficiaries}</p>
						</div>

						<!-- Resultados Esperados -->
						{#if workshop.results && workshop.results.length > 0}
							<div class="bg-white p-6 rounded-lg border border-gray-200 mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">Resultados esperados</h3>
								<ul class="space-y-2">
									{#each workshop.results as result (result)}
										<li class="flex items-start gap-3 text-dark-600">
											<span class="text-primary mt-1">•</span>
											<span>{result}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						<!-- Cierre del Taller -->
						{#if workshop.closing}
							<div class="bg-primary/10 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-3">Cierre del Taller</h3>
								<p class="text-dark-600 text-lg">{workshop.closing}</p>
							</div>
						{/if}

						<!-- Actividades -->
						{#if workshop.activities && workshop.activities.length > 0}
							<div class="bg-gray-50 p-6 rounded-lg mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-4">Actividades principales</h3>
								<ul class="space-y-2">
									{#each workshop.activities as activity (activity)}
										<li class="flex items-start gap-3 text-dark-600">
											<span class="text-primary mt-1">•</span>
											<span>{activity}</span>
										</li>
									{/each}
								</ul>
							</div>
						{/if}

						<!-- Galería de Imágenes y Videos -->
						{#if workshop.gallery && (workshop.gallery.images?.length > 0 || workshop.gallery.videos?.length > 0)}
							<div class="bg-white p-6 rounded-lg border border-gray-200 mb-8">
								<h3 class="text-xl font-semibold text-dark-800 mb-6">Galería del Taller</h3>
								
								<!-- Videos -->
								{#if workshop.gallery.videos && workshop.gallery.videos.length > 0}
									<div class="mb-8">
										<div class="flex items-center gap-2 mb-4">
											<Video size={24} class="text-primary" />
											<h4 class="text-lg font-semibold text-dark-800">Videos</h4>
										</div>
										<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
											{#each workshop.gallery.videos as video (video)}
												<div class="relative w-full rounded-lg overflow-hidden bg-gray-100">
													<video
														controls
														class="w-full h-auto"
														preload="metadata"
													>
														<source src={video} type="video/mp4" />
														Tu navegador no soporta la reproducción de videos.
													</video>
												</div>
											{/each}
										</div>
									</div>
								{/if}

								<!-- Imágenes -->
								{#if workshop.gallery.images && workshop.gallery.images.length > 0}
									<div>
										<div class="flex items-center gap-2 mb-4">
											<ImageIcon size={24} class="text-primary" />
											<h4 class="text-lg font-semibold text-dark-800">Imágenes</h4>
										</div>
										<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
											{#each workshop.gallery.images as image, index (image)}
												{@const imageIndex = index}
												<button
													type="button"
													onclick={() => openImageLightbox(imageIndex)}
													class="relative w-full aspect-square rounded-lg overflow-hidden bg-gray-100 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
												>
													<img
														src={image}
														alt="Imagen del taller Escuelita Origina"
														class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
														loading="lazy"
													/>
													<div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
												</button>
											{/each}
										</div>
									</div>
								{/if}
							</div>
						{/if}
						
						<div class="mt-8 pt-8 border-t border-gray-200">
							<a
								href="/work-in-progress"
								class="bg-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-secondary transition-colors inline-flex items-center gap-2"
							>
								<Heart size={20} />
								Contactar sobre este taller
							</a>
						</div>
					</div>
				</article>
			</div>
		{:else}
			<!-- Workshops Grid -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
				{#each workshops as workshop (workshop.id)}
					<button
						type="button"
						class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer text-left w-full"
						onclick={() => selectWorkshop(workshop.id)}
						onkeydown={(e) => e.key === 'Enter' && selectWorkshop(workshop.id)}
					>
						<div class="relative w-full h-48 overflow-hidden">
							<img
								src={workshop.image}
								alt={workshop.title}
								class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
							/>
							<div class="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
								{workshop.status}
							</div>
							<div class="absolute top-3 left-3 bg-white/90 p-2 rounded-full">
								{#if workshop.icon}
									{@const Icon = workshop.icon}
									<Icon class="text-primary" size={24} />
								{/if}
							</div>
						</div>
						
						<div class="p-5 sm:p-6">
							<h3 class="text-xl sm:text-2xl mb-3 text-dark-800 font-bold">
								{workshop.title}
							</h3>
							<p class="text-dark-600 mb-4 leading-relaxed text-sm sm:text-base line-clamp-3">
								{workshop.description}
							</p>
							
							<div class="flex items-center gap-4 text-sm text-dark-500 mb-4">
								<div class="flex items-center gap-1">
									<MapPin size={16} />
									<span class="truncate">{workshop.location}</span>
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
					¿Interesado en nuestros talleres?
				</h2>
				<p class="text-lg sm:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
					Contáctanos para más información sobre fechas, horarios y cómo participar
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center">
					<a
						href="/work-in-progress"
						class="bg-white text-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center"
					>
						<Heart size={20} />
						Contactar
					</a>
				</div>
			</div>
		{/if}
	</div>
</div>

<!-- Lightbox para imágenes -->
{#if selectedImageIndex !== null && lightboxImage}
	<div
		class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
		onclick={closeImageLightbox}
		onkeydown={(e) => e.key === 'Escape' && closeImageLightbox()}
		role="dialog"
		aria-modal="true"
		aria-label="Vista ampliada de imagen"
		tabindex="-1"
	>
		<button
			type="button"
			onclick={(e) => { e.stopPropagation(); closeImageLightbox(); }}
			onkeydown={(e) => e.key === 'Enter' && closeImageLightbox()}
			class="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
			aria-label="Cerrar"
		>
			<ArrowRight size={32} class="rotate-45" />
		</button>
		
		{#if selectedWorkshop?.gallery?.images && selectedWorkshop.gallery.images.length > 1}
			<button
				type="button"
				onclick={(e) => { e.stopPropagation(); prevImage(); }}
				onkeydown={(e) => e.key === 'Enter' && prevImage()}
				class="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
				aria-label="Imagen anterior"
			>
				<ArrowRight size={24} class="rotate-180" />
			</button>
			<button
				type="button"
				onclick={(e) => { e.stopPropagation(); nextImage(); }}
				onkeydown={(e) => e.key === 'Enter' && nextImage()}
				class="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
				aria-label="Imagen siguiente"
			>
				<ArrowRight size={24} />
			</button>
		{/if}
		
		<div class="max-w-full max-h-full">
			<img
				src={lightboxImage}
				alt="Imagen ampliada del taller Escuelita Origina"
				class="max-w-full max-h-full object-contain"
			/>
		</div>
		
		{#if selectedWorkshop?.gallery?.images && selectedWorkshop.gallery.images.length > 1}
			<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
				{(selectedImageIndex ?? 0) + 1} / {selectedWorkshop.gallery.images.length}
			</div>
		{/if}
	</div>
{/if}

<style>
	.line-clamp-3 {
		display: -webkit-box;
		-webkit-line-clamp: 3;
		line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
