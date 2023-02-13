import type { Ref } from 'vue'
type Post = {
	id: number,
	content: string,
	created_at: Date,
	updated_at: Date
}

export const usePosts = () => {
	const posts: Ref<Post[]> = useState('posts', () => [])
	const updatePosts = (newPosts: Post[]) => {
		// postsの初期化
		posts.value = []
		// 配列を追加
		posts.value.push(...newPosts)
	}
	return {
		posts: readonly(posts),
		updatePosts
	}
}

