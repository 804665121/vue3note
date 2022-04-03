<template>
  <div class="father">
    <h1>父组件</h1>

    <div>章三信息:年龄:{{ age }} ---工作:{{ job }}</div>
    <Child />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Child from "../components/Child.vue";
export default {
  components: {
    Child,
  },
  setup() {
    let person = reactive({
      name: "章三",
      age: 24,
      job: 20,
    });

    provide("user", person);

    return {
      ...toRefs(person),
    };
  },
};
</script>

<style lang="less" scoped>
.father {
  background-color: seagreen;
  padding: 10px;
}
</style>