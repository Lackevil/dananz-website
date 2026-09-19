import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	base: '/dananz-website/',
	root: 'src',
	publicDir: '../public',

	build: {
		outDir: '../dist',
		emptyOutDir: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, './src/index.html'),
				about: resolve(__dirname, './src/pages/about.html'),
				contact: resolve(__dirname, './src/pages/contact-us.html'),
				portfolio: resolve(__dirname, './src/pages/portfolio.html'),
				portfolioDetails: resolve(
					__dirname,
					'./src/pages/portfolios-details.html',
				),
				services: resolve(__dirname, './src/pages/services.html'),
				teams: resolve(__dirname, './src/pages/teams.html'),
			},
		},
	},
})
