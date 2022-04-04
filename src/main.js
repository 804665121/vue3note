//引入的不再是vue的构造函数,引入的是一个名为createApp的工厂函数
import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue/es";
// console.log(Antd);
import { router } from "./router";
import "ant-design-vue/dist/antd.css";

import store from "./store";

// 创建应用实例对象 vue 实例( 类似于之前vue2中的vm,但app比vm更“轻” 内容更少)
const app = createApp(App);
console.log(app);
app.use(store);
app.use(Antd);
app.use(router);
// 挂载页面
app.mount("#app"); //页面容器id body div app
