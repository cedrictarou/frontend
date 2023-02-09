<template>
  <div class="comment-input__container mt-20">
    <div class="comment__input-box">
      <input
        type="text"
        class="comment__input"
        placeholder="コメントを入力してください"
      />
      <button class="btn">コメント</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .comment__input-box {
    display: flex;
    gap: 2rem;
  }
  .comment__input {
    background-color: transparent;
    padding: 1rem 2rem;
    border: 0.1rem solid var(--color-base);
    border-radius: 1rem;
  }
</style>
