// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	build: {
		transpile: [
			"@fortawesome/vue-fontawesome",
			"@fortawesome/fontawesome-svg-core",
			"@fortawesome/free-brands-svg-icons",
		],
	},
	css: ['/assets/css/reset.css', '/assets/css/style.css', '@fortawesome/fontawesome-svg-core/styles.css'],
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		head: {
			title: 'laravel-nuxt-app',
			meta: [
				{ charset: 'utf-8' },
				{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
				{ hid: 'description', name: 'description', content: 'description' }
			],
			bodyAttrs: {
				class: 'body-class'
			},
			link: [
				{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
			]
		},
	},
	plugins: [
		'@/plugins/fontawesome.ts'
	],


})
