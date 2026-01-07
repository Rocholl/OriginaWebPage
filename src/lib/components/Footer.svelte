<script>
	import { _ } from 'svelte-i18n';
	import { Instagram, Heart, Users, Mail, Globe } from 'lucide-svelte';
</script>

<footer class="bg-gray-800 text-white py-8 md:py-12 mt-16">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
			<div class="sm:col-span-2 lg:col-span-1">
				<h3 class="mb-3 md:mb-4 text-lg md:text-xl font-bold">ORIGINA</h3>
				<p class="text-white/80 text-xs md:text-sm mb-4">
					MEMORIA E INFANCIA EN MOVIMIENTO. Asociación sin ánimo de lucro comprometida con la preservación de la memoria identitaria de la infancia migrante y el fortalecimiento de su arraigo positivo.
				</p>
			</div>
			
			<div>
				<h3 class="mb-3 md:mb-4 text-base md:text-lg font-semibold">{$_('footer.mission')}</h3>
				<ul class="space-y-2 text-white/80 text-xs md:text-sm">
					<li><a href="/about-us" class="hover:text-white transition-colors block">{$_('about.title')}</a></li>
					<li><a href="/work-in-progress" class="hover:text-white transition-colors block">{$_('footer.contact')}</a></li>
				</ul>
			</div>
			
			<div>
				<h3 class="mb-3 md:mb-4 text-base md:text-lg font-semibold">{$_('footer.donate')}</h3>
				<ul class="space-y-2 text-white/80 text-xs md:text-sm">
					<li><a href="/work-in-progress" class="hover:text-white transition-colors block">{$_('footer.donate')}</a></li>
				</ul>
			</div>
			
			<div class="sm:col-span-2 lg:col-span-1">
				<h3 class="mb-3 md:mb-4 text-base md:text-lg font-semibold">{$_('footer.follow')}</h3>
				<div class="flex gap-3 md:gap-4 mb-4">
					<a href="https://www.instagram.com/origina.memoria" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
						<Instagram size={20} class="md:w-6 md:h-6" />
					</a>
				</div>
			</div>
		</div>
		
		<div class="border-t border-white/20 pt-6 md:pt-8 text-center">
			<p class="text-white/80 text-xs md:text-sm">© 2024 Origina. {$_('footer.rights')}</p>
		</div>
	</div>
</footer>
