<script>
	import PersonIcon from '$lib/images/usp-person-icon.png';
	import { page } from '$app/stores';

</script>

<header class="justify-center bg-white px-4 py-2">
	{#if $page.route.id === '/'}
		<a href="/edit-profile">
			<img class="w-7 h-7" src={PersonIcon} alt="Person Icon" />
		</a>
	{:else}
		<a href="/" class="text-[#3B8694]"><span class="text-xl">‹</span> Voltar</a>
	{/if}
</header>
