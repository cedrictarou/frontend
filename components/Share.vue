<template>
  <div class="share mt-5">
    <div class="share__container">
      <ValidationForm @submit="sendContent" :validation-schema="schema">
        <label class="share__label mb-2" for="share_textarea">シェア</label>
        <ValidationField
          class="share__textarea mb-5"
          id="share_textarea"
          name="content"
          v-model="content"
          as="textarea"
        ></ValidationField>

        <div class="flex justify-end">
          <button class="btn" type="submit">シェアする</button>
        </div>
      </ValidationForm>
    </div>
  </div>
</template>

<script setup lang="ts">
  const content = ref("");
  const schema = reactive({
    content: "required|max:120",
  });
  const router = useRouter();
  const { getCurrentUser } = useAuth();
  const { updatePosts } = usePosts();

  // ユーザー情報をfirebaseから取得
  const currentUser = getCurrentUser();
  const sendContent = async () => {
    const sendData = {
      email: currentUser!.email,
      content: content.value,
    };
    // laravelに投稿追加のデータを送る
    const { error, data }: any = await useFetch(
      "http://127.0.0.1:8000/api/v1/posts",
      {
        method: "POST",
        body: sendData,
      }
    );

    if (error.value?.status === 400) {
      throw new Error("Failed");
    }

    // postsをアップデート
    const newPost = data.value.data;
    updatePosts(newPost);

    // textareaの初期化
    content.value = "";

    router.push("/posts");
  };
</script>

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
      padding: 0.5rem 1rem;
      line-height: 1.5;
      height: calc(1.6em * 5);
      border-radius: 1rem;
      background: transparent;
      border: 0.1rem solid var(--color-base);
    }
  }
</style>
