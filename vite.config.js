import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
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
