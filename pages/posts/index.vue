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
            :liked-by-user="post.likedByUser"
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
  const { setPosts } = usePosts();

  // postsをAPIから取得する
  const { data } = await useFetch("http://127.0.0.1:8000/api/v1/posts/");
  const newPosts = data.value.posts;
  console.log(newPosts);
  const posts = setPosts(newPosts);

  // postsを後ろから並ばせる
  const reversedPosts = computed(() => {
    return posts.slice().reverse();
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
