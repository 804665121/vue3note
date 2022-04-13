<template>
  <h1>初识Setup</h1>

  <button @click="goDetails">goDetails</button>
  <div>{{ num }}</div>
  <div>{{ job.type }}</div>
  <div>{{ job.name }}</div>
  <span v-for="(item, index) in jobArr" :key="index">{{ item.name }}</span>
  <p>{{ objArr.work }}</p>
  <p>{{ objArr.age }}</p>
  <p>{{ objArr.a.b.c }}</p>
  <button @click="add">num++</button>
  <button @click="changeObj">修改对象中的值</button>
  <hello-world msg="原理信息" info="hello" @hello="setSonVal">
    <template v-slot:info>
      <span>这是父组件传递过来的值</span>
    </template>
  </hello-world>
</template>

<script>
import { reactive, ref } from "vue";
import HelloWorld from "./HelloWorld.vue";
import { router } from "@/router";
export default {
  components: { HelloWorld },
  name: "setup",
  setup() {
    /**
     * reactive  处理引用数据类型 修改一个响应式对象  不处理基本数据类型
     * reactive中定义的对象无需.value 可以直接取值
     * reactive 可以处理深层次的数据 obj.a.b.c
     *
     *
     * ref 处理基本数据类型
     * ref中的引用数据类型需要objName.value 取值 实际上ref中的对象处理也是求助了reactive中的proxy
     */
    // name job 都是引用对象

    let p = reactive({
      job: {
        type: "工程师",
        name: "ui设计",
      },
      jobArr: [
        {
          type: "工程师",
          name: "ui设计",
        },
      ],
      objArr: {
        work: "上班了吗",
        age: 12,
        a: {
          b: {
            c: 89898,
          },
        },
      },
    });
    let num = ref(1);
    let { job, objArr, jobArr } = p;
    function add() {
      num.value++;
      job.type = "技术员";
      job.name = "电工";
      console.log(job, p);
    }
    function changeObj() {
      objArr.age = 30;
      objArr.a.b.c = "测试数据";
    }

    function setSonVal(val) {
      console.log("helloworld传递过来的值:" + val);
    }

    function goDetails() {
      //
      router.push({
        name: "details",
        query: {
          id: 1,
        },
      });
    }
    return {
      num,
      add,
      ...p,
      changeObj,
      setSonVal,
      goDetails
    };
  },
};
</script>

<style>
</style>