<template>
  <div>
    <div>求和: {{ sum }}</div>
    <button @click="sum++">累加</button>
    <div>获取要鼠标的位置:x:{{ point.x }} y:{{ point.y }}</div>
  </div>
</template>

<script>
import { ref } from "vue";

import usePoint from "../hooks/usePoint";
export default {
  setup() {
    let sum = ref(1);

    let point = usePoint();

    return {
      sum,
      point,
    };
  },
};
</script>

<style>
</style>