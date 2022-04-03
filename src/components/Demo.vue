<template>
  <div>Demo 测试 使用hooks</div>
  <div>获取到鼠标的位置:x:{{ point.x }} y:{{ point.y }}</div>
</template>

<script>
import usePoint from "../hooks/usePoint";
export default {
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