<template>
  <div>
    <!-- <keep-alive include="details"> -->
      详情页面
      <h1>详情</h1>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "details",
  setup(props) {
    let route = useRoute();
    console.log(route.query.id, "route");
  },
};
</script>

<style>
</style>