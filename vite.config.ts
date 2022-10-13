import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import WindiCSS from 'vite-plugin-windicss'
import suidPlugin from '@suid/vite-plugin'

export default defineConfig({
	plugins: [solidPlugin(), WindiCSS(), suidPlugin()],
	build: {
		target: 'esnext',
		polyfillDynamicImport: false,
	},
})
