<template>
  <nav class="nav">
    <ul class="nav__list-group">
      <li class="nav__list-item">
        <NuxtLink to="/register">新規登録</NuxtLink>
      </li>
      <li class="nav__list-item"><NuxtLink to="/login">ログイン</NuxtLink></li>
      <!-- todo 後でログイン用にカスタマイズ -->
      <li class="nav__list-item"><NuxtLink to="/">ログアウト</NuxtLink></li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .nav {
    color: var(--color-base);
    &__list-group {
      display: flex;
    }
    &__list-item:not(:last-child) {
      margin-right: 2rem;
    }
  }
</style>
