<template>
  <div class="comment">
    <div class="comment__container">
      <div class="comment__top">
        <PostHeader />
        <Card
          :content="post.content"
          :route-param="post.id"
          :name="post.user.name"
          :num-like="post.numLike"
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
  definePageMeta({
    // ログイン登録していないとこのページを表示しない
    middleware: "auth",
  });

  const { posts } = usePosts();
  const router = useRoute();
  const id = Number(router.params.id);
  const post = computed(() => {
    return posts.value.filter((post) => post.id === id)[0];
  });
  console.log(post.value);
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
