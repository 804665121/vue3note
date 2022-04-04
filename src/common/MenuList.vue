<template>
  <a-layout-sider v-model:collapsed="isCollapsed" collapsible>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
    >
      <a-menu-item v-for="(item, index) in menuList.children" :key="index+''">
        <template #icon>
          <!-- <component :is="antIcons[icons[index]]"  /> -->
            <component :is="antIcons[item.icon]"  />
        </template>
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
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
import * as antIcons from '@ant-design/icons-vue';

export default {
  setup() {
    let isCollapsed=ref(false)
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
        router.push(routerName.name);
        useContent.updateTitle(routerName); //更新title的值
      },
      { immediate: true } //初始化的时候执行一次
    );
    return {
      menuList,
      ...toRefs(state),
      antIcons,isCollapsed
    };
  },
};
</script>

<style>
</style>