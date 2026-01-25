<script>
	import { _ } from 'svelte-i18n';
	import { Construction, ArrowLeft, Home, Instagram, Youtube } from 'lucide-svelte';
</script>

<svelte:head>
	<title>En Construcción - Origina</title>
</svelte:head>

<div class="py-10 sm:py-12 md:py-16 min-h-[60vh] flex items-center">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 text-center">
		<div class="flex justify-center mb-6">
			<div class="bg-primary/10 p-6 rounded-full">
				<Construction class="text-primary sm:w-20 sm:h-20" size={80} />
			</div>
		</div>
		
		<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-dark-800 font-bold">
			Página en Construcción
		</h1>
		
		<p class="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto">
			Estamos trabajando en esta sección. Pronto estará disponible con nuevas funcionalidades y contenido.
		</p>
		
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a
				href="/"
				class="bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-secondary transition-colors inline-flex items-center gap-2 justify-center"
			>
				<Home size={20} />
				Volver al Inicio
			</a>
			<a
				href="https://forms.gle/PHp74US8WWLMDbLh9"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-white border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-primary/5 transition-colors inline-flex items-center gap-2 justify-center"
			>
				<ArrowLeft size={20} />
				Formulario Memoria Viva
			</a>
			<a
				href="https://www.instagram.com/origina.memoria"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-white border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-primary/5 transition-colors inline-flex items-center gap-2 justify-center"
			>
				<Instagram size={20} />
				Síguenos en Instagram
			</a>
			<a
				href="https://www.youtube.com/@origina.memoria"
				target="_blank"
				rel="noopener noreferrer"
				class="bg-white border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-primary/5 transition-colors inline-flex items-center gap-2 justify-center"
			>
				<Youtube size={20} />
				Síguenos en YouTube
			</a>
		</div>
	</div>
</div>

