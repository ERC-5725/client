import adapter from '@sveltejs/adapter-static';

import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter(),

		paths: {
			assets: '' | `http://${string}` | `https://${string}`,
			base: process.env.NODE_ENV === 'production' ? '/client' : ''
		}
	}
};
export default config;
