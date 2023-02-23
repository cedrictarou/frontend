<script setup lang="ts">
  import { NuxtApp } from "#app";

  const props = defineProps<{ error: NuxtApp["payload"]["error"] }>();
  const handleError = () => clearError({ redirect: "/" });
  const isDev = process.dev;
</script>

<template>
  <p>エラーが発生しました</p>
  <button @click="handleError">トップページに戻る</button>
  <div v-if="isDev">
    {{ error }}
  </div>
</template>
