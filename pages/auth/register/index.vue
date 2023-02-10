<template>
  <div class="auth__container">
    <ValidationForm @submit="sendRegisterData" :validation-schema="schema">
      <h2 class="title mb-5">新規登録</h2>
      <div class="input-validate">
        <ValidationField
          name="name"
          class="input"
          type="text"
          placeholder="ユーザーネーム"
          v-model="registerData.name"
        />
        <ValidationErrorMessage name="name" class="error-message" />
      </div>

      <div class="input-validate">
        <ValidationField
          name="email"
          class="input"
          type="email"
          placeholder="Eメール"
          v-model="registerData.email"
        />
        <ValidationErrorMessage name="email" class="error-message" />
      </div>

      <div class="input-validate">
        <ValidationField
          name="password"
          class="input"
          type="passwrod"
          placeholder="パスワード"
          v-model="registerData.password"
        />
        <ValidationErrorMessage name="password" class="error-message" />
      </div>

      <div class="flex justify-center">
        <button class="btn" type="submit">新規登録</button>
      </div>
    </ValidationForm>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "auth",
  });
  type RegisterData = {
    name: string;
    email: string;
    password: string;
  };
  const registerData = reactive<RegisterData>({
    name: "",
    email: "",
    password: "",
  });
  const schema = reactive({
    name: "required|max:20",
    email: "required|email",
    password: "required|min:6",
  });
  const { register } = useAuth();
  const router = useRouter();
  const sendRegisterData = async () => {
    const result = await register(registerData.email, registerData.password);
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
