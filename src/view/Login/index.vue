<template>
  <h1>login 页面</h1>

  <button @click="goHome">跳转主页</button>
</template>

<script>
import { router } from "@/router";
export default {
  setup() {
    function goHome() {
      router.push("home");
    }
    return {
      goHome,
    };
  },
};
</script>

<style>
</style>