<template>
  <button @click="show = !show">切换显示/隐藏</button>
  <div v-if="show">
    <div>求和: {{ sum }}</div>
    <button @click="sum++">累加</button>
  </div>
</template>

<script>
import {
  ref,
  onMounted,
  onUpdated,
  onBeforeUpdate,
  onUnmounted,
  onBeforeUnmount,
} from "vue";
export default {
  setup() {
    let sum = ref(1);
    let show = ref(true);

    //通过组合式api的形式
    onMounted(() => {
      console.log("mounted!");
    });
    onUpdated(() => {
      console.log("updated!");
    });
    onUnmounted(() => {
      console.log("unmounted!");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onBeforeUnmount(() => {
      console.log("-----beforeMount-----");
    });
    onUnmounted(() => {
      console.log("-----unmouted-----");
    });

    return {
      sum,
      show,
    };
  },
};
</script>

<style>
</style>