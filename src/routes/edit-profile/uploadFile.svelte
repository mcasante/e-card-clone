<script lang="ts">
	import { onMount } from "svelte";

  export let image = ''
  export let multiple = false
  export let accept = '*'
  export let capture = false

  let input: HTMLInputElement | undefined

  onMount(() => {
    if (document) {
      input = document.createElement('input')
      input.type = 'file'
  
      input.addEventListener('change', (event: Event) => {
        const result = event.target as HTMLInputElement
        if (result.files) {
          const file = result.files[0]
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onloadend = () => {
            image = reader.result as string
          }
        }
      })
    }

  })

  const open = () => {
    if (!input)
      return

    input.multiple = multiple
    input.accept = accept
    if(capture)
      input.capture = String(capture)

    input.click()
  }
</script>

<button on:click={open}>Trocar foto</button>

<style lang="postcss">
  button {
    @apply w-full border border-gray-300 rounded-md px-4 py-2 mb-4;
  }
</style>