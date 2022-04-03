<template>
  <h1>自定义ref</h1>
  <div>
    <input type="text" v-model="keyword" />
    <span>{{ keyword }}</span>
  </div>
</template>

<script>
import { customRef } from "@vue/reactivity";
export default {
  setup() {
    // 防抖函数的实现
    function useCustomRef(value, delay = 2000) {
      return customRef((track, trigger) => {
        let timer;
        return {
          get() {
            console.log(value, "get");
            track();
            return value;
          },
          set(newVal) {
            console.log(newVal, "值被修改l1111");
            clearTimeout(timer);
            timer = setTimeout(() => {
              //默认等待2s之后再执行
              value = newVal;
              trigger();
            }, delay);
          },
        };
      });
    }
    let keyword = useCustomRef("hello", 1000);
    return {
      keyword,
    };
  },
};
</script>

<style>
</style>