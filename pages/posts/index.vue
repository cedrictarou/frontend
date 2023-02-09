<template>
  <div class="post">
    <div class="post__container">
      <PostHeader />
      <div class="card-group">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    // ログイン登録していないとこのページを表示しない
    middleware: "auth",
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
