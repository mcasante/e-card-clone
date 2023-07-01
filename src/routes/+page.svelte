<script lang="ts">
	import uspLogo from '$lib/images/usp-logo.webp';
	import uspLogoFallback from '$lib/images/usp-logo.png';
	import defaultProfilePicture from '$lib/images/default-profile-picture.png';

	import qr from '$lib/images/usp-qr-code-icon.svg';
	import bar from '$lib/images/usp-bar-code-icon.svg';

	import { date, data } from '$store'

	type Entries<T> = {
    [K in keyof T]: [K, T[K]];
	}[keyof T][];

	let person: typeof $data = {
		picture: defaultProfilePicture,
		name: 'Configure seu nome',
		registration: 'Configure sua matrícula',
		institute: 'Configure seu instituto',
		type: 'Graduação',
	}

	$: {
		for (const [key, value] of <Entries<typeof $data>>Object.entries(person)) {
			person[key] = $data[key] || value
		}
	}
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="grow flex flex-col">
	<section class="profile">
		<div class="col-span-9 flex items-center flex-col py-4">
			<picture class="max-w-[120px]">
				<source srcset={uspLogo} type="image/webp" />
				<img src={uspLogoFallback} alt="Welcome" />
			</picture>
			<span class="font-[900] mt-4 text-lg">ALUNO</span>
		</div>

		<div class="col-span-3 relative">
			<div class="w-full h-0 pb-[125%]" />

			<img 
				class:!object-contain={person.picture === defaultProfilePicture}
				class:!bg-[#239bcd]={person.picture === defaultProfilePicture}
				class:!px-3={person.picture === defaultProfilePicture}
				class="absolute top-0 w-full h-full object-cover"
				src={person.picture} 
				alt="Profile Pic" />
		</div>
	</section>

	<section class="flex grow flex-col bg-white py-4">
		<div class="grid grid-cols-12">
			<div class="col-span-10 offset-md pl-4 pr-2">
				{#each Object.values(person).filter(v => v !== person['picture']) as value, i}
					<span class:font-[900]={!(i % 2)} class:mb-4={i % 2} class="block text-lg">
						{value}
					</span>
				{/each}
			</div>
			<div class="col-span-2">
				<div class="mb-4">
					<img class="align-baseline inline w-7 h-7" src={qr} alt="qr code" />
					<span class="text-xl text-white">...</span>
				</div>
				<div>
					<img class="align-baseline inline w-7 h-7" src={bar} alt="bar code" />
					<span class="text-xl text-white">...</span>
				</div>
			</div>
		</div>

		<div class="mt-auto text-center">
			
			<span class="inline-block bg-[#0097a6] pl-2 pr-1 text-white font-[600]">
				Imunizado com 1 dose de reforço
			</span><br>

			<span class="text-sm">
				O código QR expira em {$date} 23:59
			</span>
		</div>
	</section>
</section>

<style lang="postcss">
	.profile {
		@apply mb-4 grid grid-cols-12;
		background: #ff9d1a;
		box-shadow: 
			0px 10px 0 #fecc52, 
			0 16px #1DB2E6, 
			0 21px #239bcd;
	}
</style>

