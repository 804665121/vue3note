<template>
  <div class="child">
    <h1>孩子组件</h1>
    <span>{{ sum }} {{p}}</span>
    <!-- <son>{{sum}}</son> -->
  </div>
</template>

<script>
import Son from "./Son.vue";
import { ref } from "vue";
export default {
  components: { Son },
  async setup() {
    let sum = ref(1);
    let p = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({sum});
      }, 3000);
    });

    console.log(p,'p')
    return await p;
  },
};
</script>

<style lang="less" scoped>
.child {
  background-color: rosybrown;
  padding: 20px;
}
</style>