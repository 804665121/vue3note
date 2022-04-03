<template>
  <teleport to="body">
    <div class="panel" v-if="isShow" @click="closeDialog">
      <div class="box">
        这是一个弹框
        <div>这是一些内容</div>
        <button >关闭弹框</button>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["isShow"],
  emits: ["close"],
  setup(props, content) {
    function closeDialog() {
      content.emit("close", false);
    }

    return {
      closeDialog,
    };
  },
};
</script>

<style lang="less" scoped>
body {
  position: relative;
}

.panel {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
}
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: slateblue;
  margin: 0 auto;
}
</style>