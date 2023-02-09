<template>
  <div class="comment-card mt-5">
    <div class="comment-card__body">
      <span class="comment-card__user-name">ゲストユーザー</span>
      <p class="comment-card__text">
        あそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょーあそびましょー
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .comment-card {
    background-color: transparent;
    border-radius: 1rem;
    border: 0.1rem solid var(--color-grey);
    width: 100%;
    padding: 2rem 3rem;
    &__body {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
    &__user-name {
      font-size: 1.6rem;
      font-weight: 600;
    }
    &__text {
      font-size: 1.4rem;
    }
  }
</style>
