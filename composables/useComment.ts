import type { Ref } from 'vue'
export type Comment = {
	id: number,
	comment: string,
	userId: string,
	user: {
		id: number,
		name: string
	},
}

export const useComment = () => {
	const comments: Ref<Comment[]> = useState('comments', () => []);

	const getComments = () => {
		return comments.value;
	};
	const setComments = (newComments: Comment[]) => {
		// postsの初期化
		comments.value = []
		// 配列を追加
		comments.value.push(...newComments)
		return comments.value
	};
	const updateComments = (newComment: Comment) => {
		// 配列を追加
		comments.value.push(newComment)
	}

	return {
		comments: readonly(comments),
		getComments,
		setComments,
		updateComments,
	};
}