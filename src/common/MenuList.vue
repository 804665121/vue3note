<template>
  <a-layout-sider v-model:collapsed="isCollapsed" collapsible>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      @click="showMenu"
    >
      <template v-for="(item, index) in menuList.children">
        <template v-if="!item.children">
          <a-menu-item :key="index + ''">
            <template #icon>
              <component :is="antIcons[item.icon]" />
            </template>
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <!-- 下级菜单 -->
        <a-sub-menu v-else :key="index + ''">
          <template #icon>
            <component :is="antIcons[item.icon]" />
          </template>
          <template #title>{{ item.meta.title }}</template>
          <a-menu-item v-for="(son, sindex) in item.children" :key="sindex">{{
            son.title
          }}</a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { ref } from "vue";
import { routes } from "@/router/index";
import { reactive, toRefs } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useContentStore } from "@/store/content";
import * as antIcons from "@ant-design/icons-vue";

export default {
  setup() {
    let isCollapsed = ref(false);
    let menuList = reactive(routes[0]);
    let useContent = useContentStore(); //使用的时候需要用变量接收再处理
    let state = reactive({
      openKeys: ["0"],
      selectedKeys: ["0"],
    });
    const router = useRouter();
    let routerName = reactive({});
    watch(
      () => state.selectedKeys,
      (newVal) => {
        routerName = menuList.children[newVal];
        // router.push(routerName.name);
        useContent.updateTitle(routerName); //更新title的值
      },
      { immediate: true } //初始化的时候执行一次
    );
    function changeSonMenu(key, domEvent) {
      // console.log(key, domEvent, "e, event");
    }

    function showMenu(e) {
      let { keyPath, key } = e;
      let menu = menuList.children;
      let routerName = {};
      if (keyPath.length == 2) {
        let [f, s] = keyPath;
        routerName = menu[f].children[s];
      } else if (keyPath.length == 3) {
        let [f, s, l] = keyPath;
        routerName = menu[f].children[s].children[l];
      } else {
        routerName = menu[key];
      }

      router.push(routerName.name);
      useContent.updateTitle(routerName);
    }

    menuList.children = menuList.children.filter((item) => item.icon);
    return {
      menuList,
      ...toRefs(state),
      antIcons,
      isCollapsed,
      changeSonMenu,
      showMenu,
    };
  },
};
</script>

<style>
</style>