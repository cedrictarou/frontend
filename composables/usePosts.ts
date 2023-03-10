import type { Ref } from 'vue'
export type Post = {
	id: number,
	content: string,
	name: string,
	userId: number,
	likeCount: number,
	isLikedBy: [],
}

export const usePosts = () => {
	const posts: Ref<Post[]> = useState('posts', () => [])
	const getPosts = () => {
		return posts.value
	}
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
	// likeがすでに押されているかをチェックする
	const checkIfPostIsLiked = (isLikedBy: [], id: number) => {
		if (isLikedBy.some((_post: any) => _post.user_id === id)) {
			return true;
		} else {
			return false;
		}
	};
	return {
		posts: readonly(posts),
		getPosts,
		setPosts,
		updatePosts,
		checkIfPostIsLiked
	}
}

