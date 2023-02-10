<template>
  <div class="auth__container">
    <ValidationForm @submit="sendLoginData" :validation-schema="schema">
      <h2 class="title mb-5">ログイン</h2>
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

      <div class="flex justify-center">
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
  const router = useRouter();
  const sendLoginData = async () => {
    const result = await login(loginData.email, loginData.password);
    result && router.push("/posts");
  };
</script>

<style lang="scss" scoped>
  .auth__container {
    background-color: var(--color-base);
    margin: 0 auto;
    max-width: 400px;
    padding: 2rem;
    border-radius: 1rem;
    margin-top: 100px;
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
