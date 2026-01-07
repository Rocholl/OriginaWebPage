<script>
	import { _ } from 'svelte-i18n';
	import { enhance } from '$app/forms';
	import { User, Mail, MessageSquare, Send, Heart } from 'lucide-svelte';
	
	let submitting = $state(false);
	let selectedSubject = $state('');
</script>

<svelte:head>
	<title>{$_('contact.title')} - Origina</title>
</svelte:head>

<div class="py-10 sm:py-12 md:py-16 min-h-[60vh]">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<section class="max-w-2xl mx-auto">
			<h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-3 sm:mb-4 text-gray-800 font-bold px-4">
				{$_('contact.title')}
			</h1>
			<p class="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg px-4">
				{$_('contact.subtitle')}
			</p>
			
			<form method="POST" action="?/contact" use:enhance class="bg-gray-50 p-5 sm:p-6 md:p-8 rounded-lg shadow-md">
				<div class="mb-4 sm:mb-6">
					<label for="name" class="block mb-2 text-gray-800 font-medium flex items-center gap-2 text-sm sm:text-base">
						<User size={16} class="sm:w-[18px] sm:h-[18px] text-primary" />
						{$_('contact.name')}
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder={$_('contact.placeholder.name')}
						required
						class="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
					/>
				</div>
				
				<div class="mb-4 sm:mb-6">
					<label for="email" class="block mb-2 text-gray-800 font-medium flex items-center gap-2 text-sm sm:text-base">
						<Mail size={16} class="sm:w-[18px] sm:h-[18px] text-primary" />
						{$_('contact.email')}
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder={$_('contact.placeholder.email')}
						required
						class="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
					/>
				</div>
				
				<div class="mb-4 sm:mb-6">
					<label for="subject" class="block mb-2 text-gray-800 font-medium flex items-center gap-2 text-sm sm:text-base">
						<MessageSquare size={16} class="sm:w-[18px] sm:h-[18px] text-primary" />
						{$_('contact.subject')}
					</label>
					<select
						id="subject"
						name="subject"
						bind:value={selectedSubject}
						required
						class="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors text-sm sm:text-base"
					>
						<option value="">{$_('contact.placeholder.subject')}</option>
						<option value="donate">{$_('contact.donate')}</option>
						<option value="info">{$_('contact.info')}</option>
						<option value="other">{$_('contact.other')}</option>
					</select>
				</div>
				
				<div class="mb-4 sm:mb-6">
					<label for="message" class="block mb-2 text-gray-800 font-medium flex items-center gap-2 text-sm sm:text-base">
						<MessageSquare size={16} class="sm:w-[18px] sm:h-[18px] text-primary" />
						{$_('contact.message')}
					</label>
					<textarea
						id="message"
						name="message"
						rows="5"
						placeholder={$_('contact.placeholder.message')}
						required
						class="w-full px-3 py-2 sm:py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none text-sm sm:text-base"
					></textarea>
				</div>
				
				<button
					type="submit"
					disabled={submitting}
					class="w-full bg-primary text-white py-3 sm:py-4 rounded-md text-base sm:text-lg font-semibold hover:bg-secondary transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
				>
					<Send size={18} class="sm:w-5 sm:h-5" />
					{submitting ? 'Enviando...' : $_('contact.send')}
				</button>
			</form>
			
			<!-- Additional Information -->
			<div class="mt-8 sm:mt-10 md:mt-12">
				<div class="bg-white p-5 sm:p-6 rounded-lg shadow-md max-w-md mx-auto">
					<div class="flex items-center gap-3 mb-3">
						<div class="bg-primary/10 p-2 rounded-full">
							<Heart class="text-primary sm:w-6 sm:h-6" size={20} />
						</div>
						<h3 class="text-lg sm:text-xl text-primary font-semibold">Donaciones</h3>
					</div>
					<p class="text-gray-600 text-sm sm:text-base">
						Tu contribución hace posible nuestros proyectos. Cada donación, sin importar el monto, marca la diferencia.
					</p>
				</div>
			</div>
		</section>
	</div>
</div>
