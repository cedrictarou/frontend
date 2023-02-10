
export default defineNuxtRouteMiddleware(async () => {
	if (!process.server) {
		const { checkAuthState, token } = useAuth()
		await checkAuthState()
		if (!token.value) {
			return await navigateTo('/auth/login', { replace: true })
		}
	}
})