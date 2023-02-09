<template>
  <div class="auth__container">
    <form>
      <h2 class="title mb-5">ログイン</h2>
      <input class="input" type="email" placeholder="メールアドレス" />
      <input class="input" type="password" placeholder="パスワード" />
      <div class="flex justify-center">
        <button class="btn" type="submit">ログイン</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: "auth",
  });
</script>
