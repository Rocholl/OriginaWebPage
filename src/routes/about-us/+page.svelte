<script>
	import { _ } from 'svelte-i18n';
	import { Target, Eye, Shield, Heart, History, FileText, Users, Award, Building2, Leaf, Mail, Phone, MapPin, CheckCircle2, Instagram, Youtube } from 'lucide-svelte';
</script>

<svelte:head>
	<title>{$_('about.title')} - Origina</title>
</svelte:head>

<div class="py-10 sm:py-12 md:py-16 min-h-[60vh]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<!-- Header -->
		<div class="text-center mb-10 sm:mb-12 md:mb-16">
			<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-dark-800 font-bold">
				{$_('about.title')}
			</h1>
			<p class="text-xl sm:text-2xl md:text-3xl text-primary font-semibold mb-6">
				{$_('about.subtitle')}
			</p>
		</div>

		<div class="max-w-5xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
			<!-- Presentación -->
			<section class="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
				<div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
					<History class="text-primary sm:w-10 sm:h-10" size={32} />
					<h2 class="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
						{$_('about.presentation.title')}
					</h2>
				</div>
				<div class="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
					<p>{$_('about.presentation.description')}</p>
					<p class="text-primary font-medium">{$_('about.presentation.description2')}</p>
				</div>
			</section>

			<!-- Marco Legal -->
			<section class="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-lg shadow-md border border-primary/20">
				<div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
					<FileText class="text-primary sm:w-10 sm:h-10" size={32} />
					<h2 class="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
						{$_('about.legal.title')}
					</h2>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
					<div>
						<p class="font-semibold text-gray-800 mb-1">{$_('about.legal.name')}</p>
						<p class="text-gray-600 mb-4">{$_('about.legal.nameValue')}</p>
					</div>
					<div>
						<p class="font-semibold text-gray-800 mb-1">{$_('about.legal.nature')}</p>
						<p class="text-gray-600 mb-4">{$_('about.legal.natureValue')}</p>
					</div>
					<div>
						<p class="font-semibold text-gray-800 mb-1">{$_('about.legal.registry')}</p>
						<p class="text-primary font-bold text-lg mb-4">{$_('about.legal.registryNumber')}</p>
					</div>
					<div>
						<p class="font-semibold text-gray-800 mb-1">{$_('about.legal.resolution')}</p>
						<p class="text-gray-600 mb-4">{$_('about.legal.resolutionDate')}</p>
					</div>
					<div class="md:col-span-2">
						<p class="font-semibold text-gray-800 mb-1">{$_('about.legal.scope')}</p>
						<p class="text-gray-600">{$_('about.legal.scopeValue')}</p>
					</div>
				</div>
			</section>

			<!-- Misión, Visión, Valores -->
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
				<!-- Misión -->
				<div class="bg-primary text-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
					<div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
						<Target size={28} class="sm:w-8 sm:h-8" />
						<h2 class="text-xl sm:text-2xl font-bold">{$_('about.mission.title')}</h2>
					</div>
					<p class="leading-relaxed opacity-95 text-sm sm:text-base">
						{$_('about.mission.description')}
					</p>
				</div>
				
				<!-- Visión -->
				<div class="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
					<div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
						<Eye class="text-secondary sm:w-8 sm:h-8" size={28} />
						<h2 class="text-primary text-xl sm:text-2xl font-bold">{$_('about.vision.title')}</h2>
					</div>
					<p class="text-gray-700 leading-relaxed text-sm sm:text-base">
						{$_('about.vision.description')}
					</p>
				</div>
				
				<!-- Valores -->
				<div class="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
					<div class="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
						<Shield class="text-primary sm:w-8 sm:h-8" size={28} />
						<h2 class="text-primary text-xl sm:text-2xl font-bold">{$_('about.values.title')}</h2>
					</div>
					<ul class="space-y-2">
						{#each $_('about.values.items') as value (value)}
							<li class="flex items-start gap-2 text-gray-700 text-sm sm:text-base">
								<CheckCircle2 size={18} class="text-primary mt-0.5 flex-shrink-0" />
								<span>{value}</span>
							</li>
						{/each}
					</ul>
				</div>
			</div>

			<!-- Objetivos Generales -->
			<section class="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
				<div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
					<Target class="text-primary sm:w-10 sm:h-10" size={32} />
					<h2 class="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
						{$_('about.objectives.title')}
					</h2>
				</div>
				<ul class="space-y-3 sm:space-y-4">
					{#each $_('about.objectives.items') as objective (objective)}
						<li class="flex items-start gap-3 text-gray-700 leading-relaxed">
							<CheckCircle2 size={20} class="text-primary mt-1 flex-shrink-0" />
							<span class="text-base sm:text-lg">{objective}</span>
						</li>
					{/each}
				</ul>
			</section>

			<!-- Áreas de Trabajo -->
			<section class="bg-gray-50 p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
				<div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
					<Building2 class="text-primary sm:w-10 sm:h-10" size={32} />
					<h2 class="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
						{$_('about.areas.title')}
					</h2>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
					{#each $_('about.areas.items') as area (area)}
						<div class="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
							<div class="flex items-start gap-2">
								<CheckCircle2 size={18} class="text-primary mt-1 flex-shrink-0" />
								<span class="text-gray-700 text-sm sm:text-base">{area}</span>
							</div>
						</div>
					{/each}
				</div>
			</section>

			<!-- Equipo -->
			<section class="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
				<div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
					<Users class="text-primary sm:w-10 sm:h-10" size={32} />
					<h2 class="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
						{$_('about.team.title')} (2025–2026)
					</h2>
				</div>
				<div class="mb-4">
					<h3 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">{$_('about.team.board')}</h3>
					<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
						<div class="bg-gray-50 p-4 sm:p-5 rounded-lg">
							<p class="font-semibold text-primary mb-1">{$_('about.team.president')}</p>
							<p class="text-gray-700">Ana María Paniagua Torales</p>
						</div>
						<div class="bg-gray-50 p-4 sm:p-5 rounded-lg">
							<p class="font-semibold text-primary mb-1">{$_('about.team.secretary')}</p>
							<p class="text-gray-700">Jesús Ángel Suárez Pérez</p>
						</div>
						<div class="bg-gray-50 p-4 sm:p-5 rounded-lg">
							<p class="font-semibold text-primary mb-1">{$_('about.team.treasurer')}</p>
							<p class="text-gray-700">Mirna Busto</p>
						</div>
						<div class="bg-gray-50 p-4 sm:p-5 rounded-lg">
							<p class="font-semibold text-primary mb-1">{$_('about.team.vocal')}</p>
							<p class="text-gray-700">Zulma Díaz Álvarez</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Público Beneficiario -->
			<section class="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
				<div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
					<Award class="text-primary sm:w-10 sm:h-10" size={32} />
					<h2 class="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
						{$_('about.beneficiaries.title')}
					</h2>
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
					{#each $_('about.beneficiaries.items') as beneficiary (beneficiary)}
						<div class="flex items-start gap-2 text-gray-700">
							<CheckCircle2 size={18} class="text-primary mt-1 flex-shrink-0" />
							<span class="text-sm sm:text-base">{beneficiary}</span>
						</div>
					{/each}
				</div>
			</section>

			<!-- Sostenibilidad -->
			<section class="bg-green-50 p-6 sm:p-8 md:p-10 rounded-lg shadow-md border border-green-200">
				<div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
					<Leaf class="text-green-600 sm:w-10 sm:h-10" size={32} />
					<h2 class="text-2xl sm:text-3xl md:text-4xl text-green-700 font-bold">
						{$_('about.sustainability.title')}
					</h2>
				</div>
				<p class="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
					{$_('about.sustainability.description')}
				</p>
				<ul class="space-y-2 sm:space-y-3">
					{#each $_('about.sustainability.items') as item (item)}
						<li class="flex items-start gap-2 text-gray-700">
							<CheckCircle2 size={18} class="text-green-600 mt-1 flex-shrink-0" />
							<span class="text-sm sm:text-base">{item}</span>
						</li>
					{/each}
				</ul>
			</section>

			<!-- Modelo Económico -->
			<section class="bg-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
				<div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
					<Heart class="text-primary sm:w-10 sm:h-10" size={32} />
					<h2 class="text-2xl sm:text-3xl md:text-4xl text-primary font-bold">
						{$_('about.funding.title')}
					</h2>
				</div>
				<ul class="space-y-3 sm:space-y-4 mb-4">
					{#each $_('about.funding.items') as item (item)}
						<li class="flex items-start gap-3 text-gray-700">
							<CheckCircle2 size={20} class="text-primary mt-1 flex-shrink-0" />
							<span class="text-base sm:text-lg">{item}</span>
						</li>
					{/each}
				</ul>
				<p class="text-gray-600 italic text-sm sm:text-base mt-4 pt-4 border-t border-gray-200">
					{$_('about.funding.transparency')}
				</p>
			</section>

			<!-- Contacto -->
			<section class="bg-primary text-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
				<h2 class="text-2xl sm:text-3xl md:text-4xl mb-6 font-bold">Contacto Institucional</h2>
				<div class="space-y-4 text-white/95">
					<div class="flex items-start gap-3">
						<MapPin size={20} class="mt-1 flex-shrink-0" />
						<div>
							<p class="font-semibold mb-1">Sede provisional:</p>
							<p>El Patio de las Culturas</p>
							<p>C/ Doctor Chill 15 — Vegueta</p>
							<p>Las Palmas de Gran Canaria</p>
						</div>
					</div>
					<div class="flex items-center gap-3">
						<Mail size={20} class="flex-shrink-0" />
						<a href="mailto:origina.memoria@gmail.com" class="hover:underline">origina.memoria@gmail.com</a>
					</div>
					<div class="flex items-center gap-3">
						<Phone size={20} class="flex-shrink-0" />
						<a href="tel:+34613118321" class="hover:underline">613 11 83 21</a>
					</div>
					<div class="flex items-center gap-3">
						<Instagram size={20} class="flex-shrink-0" />
						<a href="https://www.instagram.com/origina.memoria" target="_blank" rel="noopener noreferrer" class="hover:underline">@origina.memoria</a>
					</div>
					<div class="flex items-center gap-3">
						<Youtube size={20} class="flex-shrink-0" />
						<a href="https://www.youtube.com/@origina.memoria" target="_blank" rel="noopener noreferrer" class="hover:underline">@origina.memoria</a>
					</div>
				</div>
			</section>

			<!-- Call to Action -->
			<div class="text-center bg-primary text-white p-6 sm:p-8 md:p-10 rounded-lg shadow-md">
				<h2 class="text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4 font-bold">¿Quieres apoyar a ORIGINA?</h2>
				<p class="mb-4 sm:mb-6 text-base sm:text-lg opacity-90">
					Contribuye a preservar la memoria identitaria de la infancia migrante
				</p>
				<div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
					<a
						href="/work-in-progress"
						class="bg-white text-primary px-6 sm:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2 justify-center text-sm sm:text-base"
					>
						<Heart size={18} class="sm:w-5 sm:h-5" />
						Hacer una Donación
					</a>
				</div>
			</div>
		</div>
	</div>
</div>
