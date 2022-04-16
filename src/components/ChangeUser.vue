<template>
  <div><h1>计算属性的学习</h1></div>
  <div>姓: <input v-model="person.firstName" /></div>
  <div>名: <input v-model="person.lastName" /></div>
  <p>{{ person.fullName }}</p>

  <div>全名: <input v-model="person.fullName" /></div>

  <div>
    <router-view />
  </div>
</template>

<script>
import { reactive, computed } from "@vue/reactivity";
export default {
  name: "ChangeUser",
  setup() {
    let person = reactive({
      firstName: "",
      lastName: "",
    });

    // 计算属性 简写 未考虑修改情况
    //  person.fullName = computed(() => {
    //   return person.firstName + person.lastName;
    // });

    //   计算属性完整形式
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const name = value.split("-");
        person.firstName = name[0];
        person.lastName = name[1];
      },
    });

    return {
      person,
    };
  },
};
</script>

<style>
</style>