import { initializeApp } from 'firebase/app'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
	const firebaseConfig = {
		apiKey: "AIzaSyCYNlhbGgyNd-m30kf0HdNrW2gU8T49Dh8",
		authDomain: "laravel-nuxt-app-40a1c.firebaseapp.com",
		projectId: "laravel-nuxt-app-40a1c",
		storageBucket: "laravel-nuxt-app-40a1c.appspot.com",
		messagingSenderId: "303012965005",
		appId: "1:303012965005:web:b612a0b26f26f8d04810c4"
	}
	initializeApp(firebaseConfig)
})