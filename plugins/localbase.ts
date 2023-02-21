import Localbase from 'localbase';
let db = new Localbase('db')

export default defineNuxtPlugin((nuxtApp) => {
	return {
		provide: {
			db: db
		}
	}
});