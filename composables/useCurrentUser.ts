import type { Ref } from 'vue'

export type User = {
	id: number,
	name: string,
	email: string,
}

export const useCurrentUser = () => {
	const currentUser: Ref<User | null> = useState('current-user', () => null)

	const getCurrentUser = async () => {
		const { $db } = useNuxtApp();
		const user = await $db.collection('user').get()
		currentUser.value = {
			id: user[0].id,
			name: user[0].name,
			email: user[0].email
		}

		return currentUser.value
	}
	const updateCurrentUser = async (id: number, name: string, email: string) => {
		const { $db } = useNuxtApp();
		currentUser.value = {
			id: id,
			name: name,
			email: email,
		}
		await $db.collection('user').set([{
			id: id,
			name: name,
			email: email,
		}])
		console.log('update current user')
	}
	const deleteCurrentUser = () => {
		const { $db } = useNuxtApp();
		currentUser.value = null
		$db.collection('user').delete()
	}
	return {
		currentUser: readonly(currentUser),
		getCurrentUser,
		updateCurrentUser,
		deleteCurrentUser
	}
}

