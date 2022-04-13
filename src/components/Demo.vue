<template>
  <!-- <keep-alive include="details"> -->
    <div>Demo 测试 使用hooks</div>
    <div>获取到鼠标的位置:x:{{ point.x }} y:{{ point.y }}</div>
  <!-- </keep-alive> -->
</template>

<script>
import usePoint from "../hooks/usePoint";
export default {
  name: "details",
  setup() {
    let point = usePoint();
    return {
      point,
    };
  },
};
</script>

<style>
</style>