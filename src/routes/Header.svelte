<script>
	import PersonIcon from '$lib/images/usp-person-icon.png';
	import { page } from '$app/stores';
  import { base } from '$app/paths';

</script>

<header class="justify-center bg-white px-4 py-2">
	{#if $page.route.id != `${base}/edit-profile`}
		<a href="{base}/edit-profile">
			<img class="w-7 h-7" src={PersonIcon} alt="Person Icon" />
		</a>
	{:else}
		<a href="{base}/" class="text-[#3B8694]"><span class="text-xl">‹</span> Voltar</a>
	{/if}
</header>
