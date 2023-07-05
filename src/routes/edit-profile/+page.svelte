<script>
  import { base } from '$app/paths';
	import { data } from '$store';
  import { goto } from '$app/navigation';
  import institutos from '$data/institutos.json'
  import defaultProfilePicture from '$lib/images/default-profile-picture.png'

  import UploadFile from './uploadFile.svelte';

  let image = $data.picture || defaultProfilePicture

  $: { $data.picture = image }
  
  const handleSave = () => { goto(`${base}/`) };
  const removePicture = () => { 
    $data.picture = ''
    image = $data.picture || defaultProfilePicture 
  };
  
</script>

<section class="flex grow flex-col bg-white py-4 px-4">
  <div>
    <img
      class="w-[240px] h-[300px] rounded-md border mx-auto mb-4 object-cover"
      class:!object-contain={image === defaultProfilePicture}
      class:!px-6={image === defaultProfilePicture}
      src={image}
      alt="Current Profile"
    >
    <div class="flex nowrap gap-2">
      {#if image !== defaultProfilePicture}
        <button class="!w-20" on:click={removePicture}>X</button>
      {/if}
      <UploadFile bind:image={image} />
    </div>
  </div>
  <div>
    <input type="text" bind:value={$data.name} placeholder="Nome">
    <input type="text" bind:value={$data.registration} placeholder="Número USP">
    <select bind:value={$data.institute} placeholder="Instituto">
      {#each institutos as instituto}
        <option value={instituto}>{instituto}</option>
      {/each}
    </select>
    <select bind:value={$data.type} placeholder="Tipo">
      <option value="Graduação">Graduação</option>
      <option value="Pós-Graduação">Pós-Graduação</option>
      <option value="Professor">Professor</option>
      <option value="Funcionário">Funcionário</option>
    </select>
  </div>
  <button on:click={handleSave}>Salvar</button>
</section>

<style lang="postcss">
  input, select {
    @apply w-full border border-gray-300 rounded-md px-4 py-2 mb-4;
  }

  button {
    @apply w-full border bg-[#0097a6] text-white border-gray-300 rounded-md px-4 py-2 mb-4;
  }
</style>