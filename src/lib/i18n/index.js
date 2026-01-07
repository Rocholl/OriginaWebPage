import { register, init, getLocaleFromNavigator, waitLocale } from 'svelte-i18n';

register('es', () => import('./es.json'));
register('en', () => import('./en.json'));
register('gu', () => import('./gu.json'));

// Initialize i18n
const defaultLocale = typeof window !== 'undefined' ? getLocaleFromNavigator() : 'es';

init({
	initialLocale: defaultLocale || 'es',
	fallbackLocale: 'es'
});

// Export a function to wait for locale to be ready (for SSR)
export async function loadLocale() {
	await waitLocale();
}
