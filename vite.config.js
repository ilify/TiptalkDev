import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0',
		port: 3000,
	},
	resolve: {
		alias: {
			$lib: path.resolve("./src/lib"),
		},
	},
});
