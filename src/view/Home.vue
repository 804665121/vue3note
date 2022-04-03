<template>
  <a-layout>
    <a-layout-header> 这是头部信息 </a-layout-header>
    <a-layout>
      <a-layout-sider>
        <MenuList></MenuList>
      </a-layout-sider>
      <a-layout-content>
        <a-card>
          <template v-slot:title>
            {{ title }}
            <div>读取pinia内部的方法:{{ sum }} ----{{ all }}</div>
            <button @click="changeSum">修改pinia里面的sum</button>
          </template>
          <div class="content">
            <router-view />
          </div>
        </a-card>
      </a-layout-content>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script>
import MenuList from "@/common/MenuList.vue";

import { useContentStore } from "@/store/content";
import { storeToRefs } from "pinia";
export default {
  components: { MenuList },
  setup() {
    let info = useContentStore();

    const changeSum = () => {
      info.addSum(3);
    };
    let { title, sum,all } = storeToRefs(info); //使用pinia的storeRefs 对数据进行解构 直接解构的数据是非响应式的
    return {
      title,
      sum,
      changeSum,
      info,
      all
    };
  },
};
</script>

<style lang="less" scoped>
.ant-layout {
  height: 100vh;
}

.ant-layout-header {
  text-align: center;
  background-color: #ccc;
}
.content {
  background-color: #fff;
  //   padding: 20px;
}
.ant-layout-footer {
  background-color: #e4e4e4;
}
</style>