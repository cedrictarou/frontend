<template>
  <div class="comment">
    <div class="comment__container">
      <div class="comment__top">
        <PostHeader />
        <Card
          :id="post!.id"
          :content="post!.content"
          :name="post!.name"
          :like-count="post!.likeCount"
          :is-liked="checkIfPostIsLiked(post!.isLikedBy, currentUser.id)"
          :current-user="currentUser"
          :showShareIcon="false"
          :showXmarkIcon="isUser"
        />

        <CommentInput />
      </div>

      <!-- comment一覧 -->
      <div
        class="comment__bottom mt-10"
        v-for="comment in reverseComments"
        :key="comment.id"
      >
        <CommentCard :name="comment.user.name" :comment="comment.comment" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Post } from "~/composables/usePosts";
  // import type { Comment } from "~/composables/useComment";

  definePageMeta({
    middleware: "auth",
  });
  const router = useRoute();
  const { checkIfPostIsLiked } = usePosts();
  const { getCurrentUser } = useCurrentUser();
  const { setComments, getComments } = useComment();
  const currentUser = await getCurrentUser();

  // 初期値
  const post = ref<Post | undefined>();
  // const comments = ref<Comment[] | undefined>();
  const comments = computed(() => {
    const comments = getComments();
    return comments;
  });
  // postsをAPIから取得する
  const { data }: any = await useFetch(
    `http://127.0.0.1:8000/api/v1/posts/${router.params.id}`
  );
  if (!data.value) {
    // 存在しないページのとき
    throw createError({
      statusCode: 404,
      message: "お探しの記事が見つかりませんでした",
      fatal: true,
    });
  } else {
    post.value = data.value.post;
    setComments(data.value.comments);
  }

  const reverseComments = computed(() => {
    return comments.value!.slice().reverse();
  });
  const isUser = computed(() => {
    if (post.value!.userId === currentUser.id) {
      return true;
    } else {
      return false;
    }
  });
</script>

<style lang="scss" scoped>
  .comment {
    &__top {
      position: sticky;
      top: 0;
      background-color: var(--color-main);
      padding-bottom: 5rem;
    }
  }
</style>
