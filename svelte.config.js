import vercel from '@sveltejs/adapter-vercel';
import { sveltePreprocess } from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({ postcss: true, typescript: true }),
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: vercel(),
    paths: {
      base: '',
    },
    alias: {
      '@/*': './src/lib/*',
      $lib: resolve('./src/lib'),
    },
  },
};

export default config;
