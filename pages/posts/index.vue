<template>
  <div class="post">
    <div class="post__container">
      <PostHeader />
      <div class="card-group" v-for="post in reversedPosts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">
          <Card
            :id="post.id"
            :content="post.content"
            :name="post.name"
            :like-count="post.likeCount"
            :is-liked="checkIfPostIsLiked(post.isLikedBy, currentUser!.id)"
            :current-user="currentUser!"
            :showShareIcon="true"
            :showXmarkIcon="false"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import type { User } from "~/composables/useCurrentUser";

  definePageMeta({
    middleware: ["auth"],
  });
  const { checkIfPostIsLiked, setPosts, getPosts } = usePosts();
  const { getCurrentUser } = useCurrentUser();

  // 初期値
  const currentUser = ref<User>();

  // 初期値の更新
  currentUser.value = await getCurrentUser();

  // postsをAPIから取得する
  const { data }: any = await useFetch("http://127.0.0.1:8000/api/v1/posts/");
  setPosts(data.value.posts);
  const posts = computed(() => {
    const posts = getPosts();
    return posts;
  });

  // postsを後ろから並ばせる
  const reversedPosts = computed(() => {
    return posts.value.slice().reverse();
  });
</script>

<style lang="scss" scoped>
  .card-group {
    width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
</style>
