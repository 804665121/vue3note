<template>
  <div class="son"><h1>这是孙组件</h1></div>
  <div>接收到的祖组件传递过来的数据:{{ person }}</div>
  <button @click="show = true">显示弹框</button>
  <dialog-box :isShow="show" @close="closeDialog"></dialog-box>
</template>
<script>
import { inject, ref } from "vue";
import DialogBox from "./DialogBox.vue";
export default {
  components: {
    DialogBox,
  },
  setup() {
    let person = inject("user");
    let show = ref(false);
    function closeDialog(val) {
      console.log(val, "val");
      show.value = false;
    }
    console.log(show, "show");
    return {
      closeDialog,
      person,
      show,
    };
  },
};
</script>

<style lang="less" scoped>
.son {
  background-color: red;
}
</style>