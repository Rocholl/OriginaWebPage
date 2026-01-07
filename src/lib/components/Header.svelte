<script>
	import { _ } from 'svelte-i18n';
	import { locale } from 'svelte-i18n';
	import { Home, Users, Mail, Heart, Globe, Menu, X, FolderKanban, Sparkles } from 'lucide-svelte';
	import { fade, slide } from 'svelte/transition';
	
	let currentLocale = $state($locale);
	let mobileMenuOpen = $state(false);
	
	function toggleLocale() {
		if (currentLocale === 'es') {
			currentLocale = 'en';
		} else if (currentLocale === 'en') {
			currentLocale = 'gu';
		} else {
			currentLocale = 'es';
		}
		$locale = currentLocale;
	}
	
	function getLocaleLabel() {
		if (currentLocale === 'es') return 'EN';
		if (currentLocale === 'en') return 'GN';
		return 'ES';
	}
	
	function getFlagClass() {
		if (currentLocale === 'es') return 'fi fi-es';
		if (currentLocale === 'en') return 'fi fi-us';
		return 'fi fi-py'; // Paraguay para Guaraní
	}
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}
	
	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="bg-white shadow-md sticky top-0 z-50">
	<nav class="max-w-7xl mx-auto px-4 py-3 md:py-4">
		<div class="flex justify-between items-center">
			<a href="/" class="flex items-center gap-3 hover:opacity-80 transition-opacity" onclick={closeMobileMenu}>
				<img
					src="/logo.png"
					alt="Logo Origina"
					class="h-10 md:h-14 lg:h-16 w-auto object-contain"
					onerror={(e) => {
						if (e.currentTarget instanceof HTMLImageElement) {
							e.currentTarget.style.display = 'none';
							const nextSibling = e.currentTarget.nextElementSibling;
							if (nextSibling instanceof HTMLElement) {
								nextSibling.style.display = 'block';
							}
						}
					}}
				/>
				<span class="hidden">LOGO</span>
				<div class="flex flex-col">
					<h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-primary leading-tight">Origina</h2>
					<p class="text-xs md:text-sm text-gray-600 hidden sm:block">Memoria e Infancia en Movimiento</p>
				</div>
			</a>
			
			<!-- Desktop Navigation -->
			<ul class="hidden lg:flex list-none gap-6 xl:gap-8 items-center">
				<li>
					<a
						href="/"
						class="text-gray-800 font-medium py-2 relative hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full flex items-center gap-2"
					>
						<Home size={18} />
						<span class="hidden xl:inline">{$_('header.home')}</span>
					</a>
				</li>
				<li>
					<a
						href="/about-us"
						class="text-gray-800 font-medium py-2 relative hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full flex items-center gap-2"
					>
						<Users size={18} />
						<span class="hidden xl:inline">{$_('header.about')}</span>
					</a>
				</li>
				<li>
					<a
						href="/projects"
						class="text-gray-800 font-medium py-2 relative hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full flex items-center gap-2"
					>
						<FolderKanban size={18} />
						<span class="hidden xl:inline">{$_('header.projects')}</span>
					</a>
				</li>
				<li>
					<a
						href="/workshops"
						class="text-gray-800 font-medium py-2 relative hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full flex items-center gap-2"
					>
						<Sparkles size={18} />
						<span class="hidden xl:inline">{$_('header.workshops')}</span>
					</a>
				</li>
				<li>
					<a
						href="https://forms.gle/PHp74US8WWLMDbLh9"
						target="_blank"
						rel="noopener noreferrer"
						class="text-gray-800 font-medium py-2 relative hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full flex items-center gap-2"
					>
						<Mail size={18} />
						<span class="hidden xl:inline">{$_('header.contact')}</span>
					</a>
				</li>
			</ul>
			
			<!-- Desktop Actions -->
			<div class="hidden lg:flex items-center gap-3 xl:gap-4">
				<a
					href="/work-in-progress"
					class="bg-secondary text-white border-none px-3 xl:px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-primary transition-colors flex items-center gap-2 text-sm xl:text-base"
				>
					<Heart size={18} />
					{$_('header.donate')}
				</a>
				<button
					class="bg-primary text-white border-none px-3 xl:px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-secondary transition-colors flex items-center gap-2 text-sm xl:text-base"
					onclick={() => toggleLocale()}
				>
					<span class={getFlagClass()} style="font-size: 1.2rem;"></span>
					<span class="hidden xl:inline">{getLocaleLabel()}</span>
				</button>
			</div>
			
			<!-- Mobile Menu Button -->
			<button
				class="lg:hidden bg-primary text-white border-none p-2 rounded-md cursor-pointer hover:bg-secondary transition-colors"
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<X size={24} />
				{:else}
					<Menu size={24} />
				{/if}
			</button>
		</div>
		
		<!-- Mobile Navigation Menu -->
		{#if mobileMenuOpen}
			<div
				class="lg:hidden mt-4 pb-4 border-t border-gray-200"
				transition:slide={{ duration: 200 }}
			>
				<ul class="flex flex-col gap-2 mt-4">
					<li>
						<a
							href="/"
							class="text-gray-800 font-medium py-3 px-2 hover:text-primary hover:bg-gray-50 rounded-md transition-colors flex items-center gap-3"
							onclick={closeMobileMenu}
						>
							<Home size={20} />
							{$_('header.home')}
						</a>
					</li>
					<li>
						<a
							href="/about-us"
							class="text-gray-800 font-medium py-3 px-2 hover:text-primary hover:bg-gray-50 rounded-md transition-colors flex items-center gap-3"
							onclick={closeMobileMenu}
						>
							<Users size={20} />
							{$_('header.about')}
						</a>
					</li>
					<li>
						<a
							href="/projects"
							class="text-gray-800 font-medium py-3 px-2 hover:text-primary hover:bg-gray-50 rounded-md transition-colors flex items-center gap-3"
							onclick={closeMobileMenu}
						>
							<FolderKanban size={20} />
							{$_('header.projects')}
						</a>
					</li>
					<li>
						<a
							href="/workshops"
							class="text-gray-800 font-medium py-3 px-2 hover:text-primary hover:bg-gray-50 rounded-md transition-colors flex items-center gap-3"
							onclick={closeMobileMenu}
						>
							<Sparkles size={20} />
							{$_('header.workshops')}
						</a>
					</li>
					<li>
						<a
							href="https://forms.gle/PHp74US8WWLMDbLh9"
							target="_blank"
							rel="noopener noreferrer"
							class="text-gray-800 font-medium py-3 px-2 hover:text-primary hover:bg-gray-50 rounded-md transition-colors flex items-center gap-3"
							onclick={closeMobileMenu}
						>
							<Mail size={20} />
							{$_('header.contact')}
						</a>
					</li>
					<li class="pt-2 border-t border-gray-200">
						<a
							href="/work-in-progress"
							class="bg-secondary text-white border-none px-4 py-3 rounded-md font-semibold cursor-pointer hover:bg-primary transition-colors flex items-center justify-center gap-2 w-full"
							onclick={closeMobileMenu}
						>
							<Heart size={20} />
							{$_('header.donate')}
						</a>
					</li>
					<li>
						<button
							class="bg-primary text-white border-none px-4 py-3 rounded-md font-semibold cursor-pointer hover:bg-secondary transition-colors flex items-center justify-center gap-2 w-full"
							onclick={() => {
								toggleLocale();
								closeMobileMenu();
							}}
						>
							<span class={getFlagClass()} style="font-size: 1.2rem;"></span>
							{getLocaleLabel()}
						</button>
					</li>
				</ul>
			</div>
		{/if}
	</nav>
</header>
