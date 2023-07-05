<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.postcss';

	import { pwaInfo } from 'virtual:pwa-info';

	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<div class="app min-h-[100vh] flex flex-col">
	<Header />

	<main class="min-h-full flex flex-col grow">
		<slot />
	</main>
</div>