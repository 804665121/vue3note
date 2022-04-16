<template>
  <div>
    <div><h1>ToRef</h1></div>
    <div>{{ person }}</div>
    <div>名字:{{ name }}</div>
    <div>年龄:{{ age }}</div>
    <div>薪水:{{ job.j1 }}k</div>

    <button @click="job.j1++">加薪</button>
    <button @click="age++">年龄++</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    let person = reactive({
      name: "zangsan",
      age: 19,
      job: {
        j1: 20,
      },
    });

    return {
      person,
      ...toRefs(person),
    };
  },
};
</script>

<style>
</style>