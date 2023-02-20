<template>
  <div class="card">
    <div class="card__top">
      <span class="card__user-name">{{ name }}</span>
      <ul class="card__icon-group">
        <li class="card__like-icon" @click="clickLike(id)">
          <font-awesome-icon :icon="['fa-solid', 'fa-heart']" v-if="isLiked" />
          <font-awesome-icon :icon="['fa-regular', 'fa-heart']" v-else />
          <span class="card__like-count ml-3">{{ count }}</span>
        </li>
        <li class="card__undo-icon">
          <font-awesome-icon icon="fa-solid fa-circle-xmark" />
        </li>
        <li class="card__to-comment">
          <nuxt-link :to="`/posts/${id}`">
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
  const { id, content, name, likeCount, likedByUser } = defineProps<{
    id: number;
    content: string;
    name: string;
    likeCount: number;
    likedByUser: boolean;
  }>();
  const { getCurrentUser } = useAuth();
  const userData = reactive({
    email: "",
  });
  let count = ref(0);
  const isLiked = ref(false);

  const countUp = () => {
    return (count.value += 1);
  };
  const countDown = () => {
    return (count.value -= 1);
  };
  // 初期値の更新
  count.value = likeCount;
  isLiked.value = likedByUser;

  // ユーザー情報をfirebaseから取得
  const currentUser = getCurrentUser();
  userData.email = currentUser!.email as string;

  const clickLike = async (id: number) => {
    try {
      // まだユーザーがlikeを教えていなかったら
      if (!isLiked.value) {
        const { data } = await useFetch(
          `http://127.0.0.1:8000/api/v1/like/${id}`,
          {
            method: "POST",
            body: userData,
          }
        );
        isLiked.value = true;
        countUp();
        console.log(data.value);
      } else {
        const { data } = await useFetch(
          `http://127.0.0.1:8000/api/v1/unlike/${id}`,
          {
            method: "DELETE",
            body: userData,
          }
        );
        isLiked.value = false;
        countDown();
        console.log(data.value);
      }
    } catch (error) {
      console.log(error);
    }
  };
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

  .card__like-icon {
    cursor: pointer;
  }
</style>
