<template>
  <div>
    <h1>Suspense</h1>
    <Suspense>
      <template v-slot:default>
        <Child></Child>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "../components/Child.vue"; //静态引入

import { defineAsyncComponent } from "vue";

const Child = defineAsyncComponent(() => import("../components/Child.vue"));
export default {
  components: {
    Child
  },
};
</script>

<style>
</style>