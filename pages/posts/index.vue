<template>
  <div class="post">
    <div class="post__container">
      <PostHeader />
      <div class="card-group" v-for="post in newPosts" :key="post.id">
        <NuxtLink :to="`/posts/${post.id}`">
          <Card
            :content="post.content"
            :route-param="post.id"
            :name="post.user.name"
            :num-like="post.numLike"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    // ログイン登録していないとこのページを表示しない
    middleware: "auth",
  });
  // apiからpostsを取得する
  const { posts, updatePosts } = usePosts();
  const { data } = await useFetch("http://127.0.0.1:8000/api/v1/posts/");
  const newPosts = data.value.posts;
  // postsの配列を更新する
  updatePosts(newPosts);
  console.log("newPostsArray", posts.value);
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
