<template>
  <div><h1>toRaw/markRaw</h1></div>
  <div>这是x的值:{{ x }}</div>
  <button @click="x++">x++</button>
  <hr />

  <div>{{ person }}</div>
  <div>名字:{{ person.name }}</div>
  <div>年龄:{{ person.age }}</div>
  <div>薪水:{{ person.job.j1 }}k</div>
  <div v-if="person.car">车辆信息:{{ person.car }}</div>
  <button @click="person.job.j1++">加薪</button>
  <button @click="person.age++">年龄++</button>
  <button @click="showRaw">还原最原始的person</button>
  <button @click="addCar">添加一辆车</button>

  <button @click="person.car.price++">修改车次价格</button>
</template>

<script>
import { reactive, ref, toRaw, markRaw } from "vue";
export default {
  setup() {
    let person = reactive({
      name: "zangsan",
      age: 19,
      job: {
        j1: 20,
      },
    });

    let x = ref(0);

    function showRaw() {
      let p = toRaw(person);
      console.log(p);
    }

    function addCar() {
      let car = { carName: "OOOO", price: 400 };
      person.car = markRaw(car); //添加一个原始对象数据标记,数据不会再是响应式的
    }

    return {
      addCar,
      showRaw,
      person,
      x,
    };
  },
};
</script>

<style>
</style>