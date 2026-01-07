<script>
	import '../app.css';
	import '$lib/i18n';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
	main {
		min-height: calc(100vh - 200px);
	}
</style>

