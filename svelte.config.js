import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		adapter: adapter(),
		alias: {
			$store: './src/store',
			$data: './src/data',
		}
	},
};

export default config;
