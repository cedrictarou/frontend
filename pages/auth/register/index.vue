<template>
  <div class="auth__container">
    <ValidationForm @submit="sendRegisterData" :validation-schema="schema">
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
          type="password"
          placeholder="パスワード"
          v-model="registerData.password"
        />
        <ValidationErrorMessage name="password" class="error-message" />
      </div>

      <div class="flex justify-center pt-5">
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
    uid?: string;
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
  const { updateCurrentUser } = useCurrentUser();

  const sendRegisterData = async () => {
    try {
      const userCredential = await register(
        registerData.name,
        registerData.email,
        registerData.password
      );

      registerData["uid"] = userCredential!.user.uid;
      //laravelとの通信
      try {
        const { data }: any = await useFetch(
          "http://127.0.0.1:8000/auth/register",
          {
            method: "POST",
            body: registerData,
          }
        );
        // current userの更新
        const userInfo = data.value.user[0];
        updateCurrentUser(userInfo.id, userInfo.name, userInfo.email);

        // post一覧へ移動
        router.push("/posts");
      } catch (error) {
        // laravelとの通信でエラーが出たら
        console.log(error);
        router.push("/auth/register");
      }
    } catch (error) {
      // firebase接続でエラーが出たら
      console.log(error);
      router.push("/auth/register");
    }
  };

  // localストレージにユーザー情報を保存する
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
