<template>
  <div class="auth__container">
    <ValidationForm @submit="sendLoginData" :validation-schema="schema">
      <div class="input-validate">
        <ValidationField
          name="email"
          class="input"
          type="email"
          placeholder="メールアドレス"
          v-model="loginData.email"
        />
        <ValidationErrorMessage name="email" class="error-message" />
      </div>
      <div class="input-validate">
        <ValidationField
          name="password"
          class="input"
          type="password"
          placeholder="パスワード"
          v-model="loginData.password"
        />
        <ValidationErrorMessage name="password" class="error-message" />
      </div>

      <div class="flex justify-center pt-5">
        <button class="btn" type="submit">ログイン</button>
      </div>
    </ValidationForm>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "auth",
  });
  type LoginData = {
    email: string;
    password: string;
  };
  const loginData = reactive<LoginData>({
    email: "",
    password: "",
  });
  const schema = reactive({
    email: "required|email",
    password: "required",
  });
  const { login } = useAuth();
  const { updateCurrentUser } = useCurrentUser();
  const router = useRouter();

  const sendLoginData = async () => {
    const userCredential = await login(loginData.email, loginData.password);

    // laravelからユーザー情報を取得
    const { data }: any = await useFetch("http://127.0.0.1:8000/auth/login", {
      method: "POST",
      body: loginData,
    });

    // current userの更新
    const userInfo = data.value.user[0];
    await updateCurrentUser(userInfo.id, userInfo.name, userInfo.email);

    // post一覧へ移動
    userCredential && router.push("/posts");
  };
</script>

<style lang="scss" scoped>
  .auth__container {
    background-color: var(--color-main);
    margin: 0 auto;
    max-width: 400px;
    padding: 2rem;
    border-radius: 1rem;
    margin-top: 100px;
    // border: solid 0.1rem var(--color-base);
  }
  .input {
    color: var(--color-black);
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 0.1rem solid var(--color-main);
  }

  .input-validate:not(:last-child) {
    margin-bottom: 2rem;
  }
  .error-message {
    margin-left: 1rem;
    color: #ff0000;
  }
</style>
