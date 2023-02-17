<template>
  <div class="post">
    <div class="post__container">
      <PostHeader />
      <div class="card-group" v-for="post in reversedPosts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">
          <Card
            :content="post.content"
            :route-param="post.id"
            :name="post.name"
            :num-like="post.numLike"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    middleware: ["auth"],
  });
  const { posts, getPosts } = usePosts();

  // postsをAPIから取得する
  const { data } = await useFetch("http://127.0.0.1:8000/api/v1/posts/");
  const newPosts = data.value.posts;
  getPosts(newPosts);
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
