<template>
  <div class="comment">
    <div class="comment__container">
      <div class="comment__top">
        <PostHeader />
        <Card />
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

<script setup lang="ts"></script>

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
