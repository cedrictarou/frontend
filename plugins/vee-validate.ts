import { configure, defineRule, Form, Field, ErrorMessage } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import ja from '@vee-validate/i18n/dist/locale/ja.json'
import AllRules from '@vee-validate/rules'

declare module '@vue/runtime-core' {
	export interface GlobalComponents {
		ValidationForm: typeof Form
		ValidationField: typeof Field
		ValidationErrorMessage: typeof ErrorMessage
	}
}

export default defineNuxtPlugin((nuxtApp) => {
	Object.keys(AllRules).forEach((rule) => {
		defineRule(rule, AllRules[rule]);
	});

	nuxtApp.vueApp.component('ValidationForm', Form)
	nuxtApp.vueApp.component('ValidationField', Field)
	nuxtApp.vueApp.component('ValidationErrorMessage', ErrorMessage)
	configure({
		generateMessage: localize({ ja }),
	})
	setLocale('ja')
})