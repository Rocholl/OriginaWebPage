import { loadLocale } from '$lib/i18n';

export async function load() {
	// Wait for i18n to be initialized before rendering
	await loadLocale();
	return {};
}

