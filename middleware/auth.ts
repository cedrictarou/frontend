export default defineNuxtRouteMiddleware((to, from) => {
	//isAdmin関数はアクセスしているユーザが管理者かどうかチェックする関数です
	const isLoggedIn = true
	if (!isLoggedIn) {
		return navigateTo('/auth/register')
	}
});