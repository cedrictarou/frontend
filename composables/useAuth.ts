import {
	getAuth,
	signInWithEmailAndPassword,
	signOut as firebaseSignOut,
	onAuthStateChanged,
	createUserWithEmailAndPassword,
	updateProfile
} from 'firebase/auth'

export const useAuth = () => {
	const token = useState<string | null>('token', () => null)

	const getCurrentUser = () => {
		try {
			const auth = getAuth();
			const currentUser = auth.currentUser
			return currentUser
		} catch (error) {
			console.log(error)
		}
	}

	async function register(name: string, email: string, password: string) {
		try {
			const auth = getAuth();
			const userCredential = await createUserWithEmailAndPassword(auth, email, password)
			const idToken = await userCredential.user.getIdToken()
			await updateProfile(userCredential.user, {
				displayName: name
			})
			token.value = idToken
			return userCredential
		} catch (error: unknown) {
			console.log(error)
			switch (error.code) {
				case 'auth/invalid-email':
					alert('メールアドレスの形式が違います。')
					break
				case 'auth/email-already-in-use':
					alert('このメールアドレスはすでに使われています。')
					break
				case 'auth/weak-password':
					alert('パスワードは6文字以上で入力してください。')
					break
				default:
					alert('エラーが起きました。しばらくしてから再度お試しください。')
					break
			}
			// return false
		}
	}

	async function login(email: string, password: string) {
		try {
			const auth = getAuth()
			const userCredential = await signInWithEmailAndPassword(auth, email, password)
			const idToken = await userCredential.user.getIdToken()
			token.value = idToken
			return userCredential
		} catch (error: unknown) {
			console.error(error)
			switch (error.code) {
				case 'auth/wrong-password':
					alert('メールアドレスまたはパスワードが違います。')
					break
				case 'auth/user-not-found':
					alert('登録されていません。')
					break
				default:
					alert('メールアドレスまたはパスワードが違います。')
					break
			}
		}
	}

	async function signOut() {
		try {
			const auth = getAuth()
			await firebaseSignOut(auth)
			token.value = null
			return true
		} catch (error) {
			console.error(error)
			return false
		}
	}

	async function checkAuthState() {
		return await new Promise<void>((resolve, reject) => {
			// client only
			if (process.server) return resolve()
			const auth = getAuth()

			onAuthStateChanged(
				auth,
				async (user) => {
					try {
						if (user) {
							const idToken = await user.getIdToken();
							token.value = idToken
						} else {
							token.value = null
						}
						resolve()
					} catch (error) {
						reject(error)
					}
				}, (error) => {
					reject(error)
				})
		})
	}
	return {
		register,
		login,
		signOut,
		token,
		checkAuthState,
		getCurrentUser,
	}
}