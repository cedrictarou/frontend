<template>
  <header class="header">
    <div class="header__container">
      <nuxt-link to="/posts">
        <Logo />
      </nuxt-link>
      <Navbar />
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .header {
    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      &.logged-in {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
      }
    }
  }
  @media screen and (min-width: 769px) {
    .header {
      &__container {
        flex-direction: column;
        align-items: flex-start;
      }
    }
  }
</style>
