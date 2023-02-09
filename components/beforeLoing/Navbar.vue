<template>
  <nav class="nav">
    <ul class="nav__list-group">
      <li class="nav__list-item">
        <NuxtLink to="/auth/register">新規登録</NuxtLink>
      </li>
      <li class="nav__list-item">
        <NuxtLink to="/auth/login">ログイン</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

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
