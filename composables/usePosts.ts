import type { Ref } from 'vue'
export type Post = {
	id: number,
	content: string,
	name: string,
	likeCount: number,
}

export const usePosts = () => {
	const posts: Ref<Post[]> = useState('posts', () => [])
	const setPosts = (newPosts: Post[]) => {
		// postsの初期化
		posts.value = []
		// 配列を追加
		posts.value.push(...newPosts)
		return posts.value
	}
	const updatePosts = (newPost: Post) => {
		// 配列を追加
		posts.value.push(newPost)
	}
	return {
		posts: readonly(posts),
		setPosts,
		updatePosts
	}
}

