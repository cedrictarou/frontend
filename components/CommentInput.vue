<template>
  <div class="comment-input__container mt-20">
    <ValidationForm @submit="sendComment" :validation-schema="schema">
      <div class="comment__input-box">
        <ValidationField
          name="comment"
          as="input"
          type="text"
          class="comment__input"
          placeholder="コメントを入力してください"
          v-model="newComment"
        />
        <button class="btn">コメント</button>
      </div>
      <!-- <ValidationErrorMessage as="p" name="comment" class="error-message" /> -->
    </ValidationForm>
  </div>
</template>

<script setup lang="ts">
  const newComment = ref<string>("");
  const schema = reactive({
    comment: "required|max:120",
  });
  const route = useRoute();
  const router = useRouter();
  const { getCurrentUser } = useCurrentUser();
  const currentUser = await getCurrentUser();
  // newCommentを送信する処理
  const sendComment = async () => {
    const id: number = Number(route.params.id);
    try {
      const { data }: any = await useFetch(
        `http://127.0.0.1:8000/api/v1/comments/${id}`,
        {
          method: "POST",
          body: {
            comment: newComment.value,
            user_id: currentUser.id,
            post_id: id,
          },
        }
      );
      console.log(data.value);

      newComment.value = "";
    } catch (error) {
      console.log(error);
      router.push(`/posts/${id}`);
    }
  };
</script>

<style lang="scss" scoped>
  .comment__input-box {
    display: flex;
    gap: 2rem;
  }
  .comment__input {
    background-color: transparent;
    padding: 1rem 2rem;
    border: 0.1rem solid var(--color-base);
    border-radius: 1rem;
  }
</style>
