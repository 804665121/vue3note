<template>
  <div><h1>shallowReactive/shallowRef的使用</h1></div>
  <div><h1>readonly/shallowReadonly</h1></div>
  <div>这是x的值:{{ x }}</div>
  <button @click="x++">x++</button>
  <hr />

  <div>{{ person }}</div>
  <div>名字:{{ person.name }}</div>
  <div>年龄:{{ person.age }}</div>
  <div>薪水:{{ person.job.j1 }}k</div>

  <button @click="person.job.j1++">加薪</button>
  <button @click="person.age++">年龄++</button>
</template>

<script>
import {
  reactive,
  toRefs,
  shallowRef,
  shallowReactive,
  readonly,
  shallowReadonly,
} from "vue";
export default {
  setup() {
    // let person = shallowReactive({ //只处理对象第一层的数据浅响应式
    let person = reactive({
      //只处理基本数据类型的响应式 不进行对象的响应式
      name: "zangsan",
      age: 19,
      job: {
        j1: 20,
      },
    });

    let x = shallowRef(0); //只处理基本数据类型的响应式 不进行对象的响应式

    //  person = readonly(person); //使用readonly对数据进行包装 使数据是只读的
    person = shallowReadonly(person); //浅只读 深层次的可以更新

    return {
      person,
      x,
    };
  },
};
</script>

<style>
</style>