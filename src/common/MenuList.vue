<template>
  <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
    >
      <a-menu-item v-for="(item, index) in menuList.children" :key="index + ''">
        <template #icon>
          <MailOutlined />
        </template>
        <span>{{ item.title }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import {
  DesktopOutlined,
  AppstoreOutlined,
  InboxOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

import { routes } from "@/router/index";
import { reactive, toRefs } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useContentStore } from "@/store/content";

const icon = [
  <DesktopOutlined />,
  <AppstoreOutlined />,
  <AppstoreOutlined />,
  <MailOutlined />,
  <InboxOutlined />,
];
export default {
  components: {
    UserOutlined,
    DesktopOutlined,
    MailOutlined,
    AppstoreOutlined,
    InboxOutlined,
  },

  setup() {
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
        useContent.updateTitle(routerName.title); //更新title的值
      },
      { immediate: true } //初始化的时候执行一次
    );
    return {
      menuList,
      ...toRefs(state),
    };
  },
};
</script>

<style>
</style>