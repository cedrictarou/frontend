<template>
  <nav class="nav">
    <ul class="nav__list-group">
      <li class="nav__list-item">
        <NuxtLink to="/posts">
          <font-awesome-icon icon="fa-solid fa-house" />
          <span class="nav__list-text">ホーム</span>
        </NuxtLink>
      </li>
      <li class="nav__list-item">
        <button>
          <font-awesome-icon icon="fa-solid fa-right-from-bracket" />
          <span class="nav__list-text">ログアウト</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .nav {
    &__list-group {
      display: flex;
    }
    &__list-item:not(:last-child) {
      margin-right: 2rem;
    }
  }

  @media screen and (min-width: 769px) {
    .nav {
      margin-top: 2rem;
      &__list-group {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      &__list-item {
        margin-left: 1rem;
      }
      &__list-text {
        margin-left: 1rem;
      }
    }
  }
</style>
