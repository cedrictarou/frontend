<template>
  <div class="card">
    <div class="card__top">
      <span class="card__user-name">{{ name }}</span>
      <ul class="card__icon-group">
        <li class="card__like-icon">
          <font-awesome-icon icon="fa-solid fa-heart" />
          <span class="card__like-count ml-3">{{ numLike }}</span>
        </li>
        <li class="card__undo-icon">
          <font-awesome-icon icon="fa-solid fa-circle-xmark" />
        </li>
        <li class="card__to-comment">
          <nuxt-link :to="`/posts/${routeParam}`">
            <font-awesome-icon icon="fa-solid fa-share" />
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div class="card__body">
      <p class="card__text">{{ content }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { content, routeParam, name, numLike } = defineProps<{
    content: string;
    routeParam: number;
    name: string;
    numLike: number;
  }>();
</script>

<style lang="scss" scoped>
  .card {
    background-color: transparent;
    border-radius: 1rem;
    border: 0.1rem solid var(--color-base);
    width: 100%;
    padding: 2rem 3rem;
    box-shadow: 0px 5px 10px -5px #ffffff;
    &__top {
      display: flex;
      justify-content: space-between;
    }
    &__user-name {
      font-size: 1.8rem;
      font-weight: 600;
    }
    &__icon-group {
      display: flex;
      gap: 2rem;
      font-size: 2rem;
    }
    &__body {
      border-top: 0.1rem solid var(--color-base);
      margin-top: 2rem;
      padding-top: 2rem;
    }
    &__text {
      font-size: 1.6rem;
    }
  }
</style>
