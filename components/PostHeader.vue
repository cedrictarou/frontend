<template>
  <div class="post__header">
    <h2 class="post__title">ホーム</h2>
  </div>
</template>

<style lang="scss" scoped>
  .post {
    &__header {
      position: sticky;
      top: 0;
      background-color: var(--color-main);
      z-index: 100;
    }
    &__title {
      font-size: 2.5rem;
      text-align: center;
      padding: 2rem 0;
    }
  }
</style>
