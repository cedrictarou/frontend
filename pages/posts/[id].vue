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
        />

        <CommentInput />
      </div>

      <!-- comment一覧 -->
      <div class="comment__bottom mt-10">
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { Post } from "~/composables/usePosts";

  definePageMeta({
    middleware: "auth",
  });
  const router = useRoute();
  const post = ref<Post>();

  // postsをAPIから取得する
  const { data } = await useFetch(
    `http://127.0.0.1:8000/api/v1/posts/${router.params.id}`
  );
  // 存在しないページのとき
  if (!data.value) {
    throw createError({
      statusCode: 404,
      message: "お探しの記事が見つかりませんでした",
      fatal: true,
    });
  } else {
    post.value = data.value.data;
  }
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
