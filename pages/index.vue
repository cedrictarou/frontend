<template>
  <div class="home">
    <h1>TOPページ</h1>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
    // ログイン登録していないとこのページを表示しない
    middleware: "auth",
  });
</script>
