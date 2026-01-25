<script>
	import '../app.css';
	import '$lib/i18n';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<meta name="color-scheme" content="light" />
	<meta name="theme-color" content="#ffffff" />
	<link rel="icon" type="image/png" href="/logo.png" />
	<link rel="apple-touch-icon" href="/logo.png" />
	<link rel="shortcut icon" href="/logo.png" />
</svelte:head>

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

