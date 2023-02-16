import type { Ref } from 'vue'
type Post = {
	id?: number,
	content: string,
	name:string,
	numLike:number,
}

export const usePosts = () => {
	const posts: Ref<Post[]> = useState('posts', () => [])
	const getPosts = (newPosts: Post[]) => {
		// postsの初期化
		posts.value = []
		// 配列を追加
		posts.value.push(...newPosts)
	}
	const updatePosts = (newPost: Post) => {
		// 配列を追加
		posts.value.push(newPost)
	}
	return {
		posts: readonly(posts),
		getPosts,
		updatePosts
	}
}

