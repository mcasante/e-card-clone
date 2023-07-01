<script>
	import Header from './Header.svelte';
	import './styles.css';
	import '../app.postcss';
</script>

<div class="app min-h-[100vh] flex flex-col">
	<Header />

	<main class="min-h-full flex flex-col grow">
		<slot />
	</main>
</div>