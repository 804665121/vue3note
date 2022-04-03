<template>
  <div>
    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <button @click="person.age++">点为+1</button>
  </div>
</template>

<script>
import { reactive, watchEffect } from "vue";
export default {
  setup() {
    let person = reactive({
      name: "zangsan",
      age: 19,
      job: {
        j1: 20,
      },
    });

    watchEffect(() => {
      const x = person.age;
      console.log("回调执行了");
    });
    return {
      person,
    };
  },
};
</script>

<style>
</style>