<template>
  <header class="header">
    <div class="header__container p-5">
      <div class="header__logo">
        <img src="/img/logo.png" alt="" class="header__logo-img" />
      </div>
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
    }
    &__logo {
      width: 100px;
    }
  }
</style>
