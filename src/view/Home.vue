<template>
  <a-layout>
    <!-- <a-layout-sider> -->
    <MenuList></MenuList>
    <!-- </a-layout-sider> -->
    <a-layout>
      <a-layout-content>
        <a-layout-header>
          <div>
            <component :is="antIcons[routeInfo.icon]"></component>
            {{ routeInfo.meta.title }}
          </div>
          <div>
            <a-space>
              <sound-outlined />
              <smile-outlined />
              <sync-outlined />
              <team-outlined />
            </a-space>
          </div>
        </a-layout-header>
        <a-card>
          <template v-slot:title>
            <div>读取pinia内部的方法:{{ sum }} ----{{ all }}</div>
            <button @click="changeSum">修改pinia里面的sum</button>
          </template>
          <div class="content">
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" />
              </transition>
            </router-view>
          </div>
        </a-card>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import MenuList from "@/common/MenuList.vue";
import * as antIcons from "@ant-design/icons-vue";
import { useContentStore } from "@/store/content";
import { storeToRefs } from "pinia";
export default {
  components: { MenuList, ...antIcons },
  setup() {
    let info = useContentStore();

    const changeSum = () => {
      info.addSum(3);
    };
    let { routeInfo, sum, all } = storeToRefs(info); //使用pinia的storeRefs 对数据进行解构 直接解构的数据是非响应式的
    console.log(routeInfo, "routeInfo");
    return {
      routeInfo,
      sum,
      changeSum,
      info,
      all,
      antIcons,
    };
  },
};
</script>

<style lang="less" scoped>
.ant-layout {
  height: 100vh;
}

.ant-layout-header {
  display: flex;
  justify-content: space-between;
  align-self: center;
  background-color: #fdfdfd;
  box-shadow: inset 0px -2px 0px 0px #d9d9d9;
}
.content {
  background-color: #fff;
}
.ant-layout-footer {
  background-color: #fdfdfd;
  box-shadow: inset 0px 2px 0px 0px #d9d9d9;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>