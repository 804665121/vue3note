<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="sendVal">传递个值给父类元素</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["msg", "info"],
  emits: ["hello"],
  setup(props, content) {
    // props 父组件传递过来的参数
    // content.slots  插槽信息
    // content.emit  父组件传递过来的方法
    // console.log(props, content.emit); 触发自定义对象
    // console.log(props, content.slots);
    // console.log(props, content.slots);

    function sendVal() {
      content.emit("hello", "这是子组件传递给你的值哦");
    }

    return {
      sendVal,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
