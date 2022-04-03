<template>
  <div>
    <h1>vue3中Watch监视的使用</h1>

    <h2>求和:{{ sum }}</h2>
    <button @click="sum++">点为+1</button>

    <hr />
    <h2>{{ msg }}</h2>
    <button @click="msg += 1">点为+1</button>

    <hr />

    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <button @click="person.age++">点为+1</button>

    <hr />

    <h2>监听深层数据:{{ person1.job.j1 }}</h2>
    <button @click="person1.job.j1++">点为+1</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  name: "watch",

  watch: {
    //vue2 简写使用方式
    // sum(newVal, oldVal) {
    //   console.log(oldVal, newVal);
    // },
    // sum: {  //完整写法
    //   deep: true, //是否开启深度监测
    //   handler(newVal, oldVal) {
    //     console.log(oldVal, newVal);
    //   },
    // },
  },
  setup() {
    let sum = ref(1);

    let msg = ref("hello");

    let person = reactive({
      name: "zangsan",
      age: 19,
      job: {
        j1: 20,
      },
    });

    let person1 = ref({
      name: "zangsan",
      age: 19,
      job: {
        j1: 20,
      },
    });

    // 监视ref定义的对象值
    watch(person1.value, (newVal, oldVal) => {
      console.log(newVal, oldVal, "oldVal");
    });
    // watch(
    //   person1,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal, "oldVal");
    //   },
    //   { deep: true }
    // );
    // 情况1:监视 ref 定义的一个响应式数据 immediate 初始化的时候执行一次
    watch(
      sum,
      (newVal, oldVal) => {
        console.log(newVal, oldVal, "sum修改了");
      },
      { immediate: true }
    );

    // 情况2: 监视多个值的情况
    // watch([sum, msg], (newVal, oldVal) => {
    //   console.log(newVal, oldVal, "sum修改了");
    // });
    /**
     *情况3: 注意点1:监视reactive 定义的响应式数据的全部属性  使用watch监测的时候无法定义到旧的值
     *      注意点2:强制开启了deep深度监视(deep无法关闭)
     *  */
    // watch(person, (newVal, oldVal) => {
    //   console.log(newVal, oldVal, "person 监视的值");
    // });

    /** 情况4
     *监视reactive 定义的响应式数据的某个属性
     */
    // watch(
    //   () => person.age,
    //   (newVal, oldVal) => {
    //     console.log(newVal, oldVal, "person.age 监视的值");
    //   }
    // );
    /**
     * 情况5
     * 监视reactive 定义的响应式数据的某些属性
     */

    watch([() => person.age, () => person.name], (newVal, oldVal) => {
      console.log(newVal, oldVal, "person.age 监视的值");
    });

    // 特殊情况

    watch(
      () => person.job,
      (newVal, oldVal) => {
        console.log(newVal, oldVal, "person.job 监视的值");
      },
      { deep: true }
    ); //此处由于监视的是reactive定义的对象中的某个属性,所有deep配置有效果

    return {
      person1,
      sum,
      msg,
      person,
    };
  },
};
</script>

<style>
</style>