<template>
  <div class="share mt-5">
    <div class="share__container">
      <label class="share__label mb-2" for="share_textarea">シェア</label>
      <textarea class="share__textarea mb-5" id="share_textarea"></textarea>
      <div class="flex justify-end">
        <button class="btn">シェアする</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .share {
    width: 100%;
    &__container {
      margin: 0 auto;
    }
    &__label {
      font-size: 1.8rem;
      font-weight: 600;
    }
    &__textarea {
      width: 100%;
      height: 10em;
      border-radius: 1rem;
      background: transparent;
      border: 0.1rem solid var(--color-base);
    }
  }
</style>
