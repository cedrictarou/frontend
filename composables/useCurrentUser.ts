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
	const updateCurrentUser = (id: number, name: string, email: string) => {
		const { $db } = useNuxtApp();
		currentUser.value = {
			id: id,
			name: name,
			email: email,
		}
		$db.collection('user').set([{
			id: id,
			name: name,
			email: email,
		}])
		return currentUser.value
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

