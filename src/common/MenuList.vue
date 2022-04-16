<template>
  <a-layout-sider v-model:collapsed="isCollapsed" collapsible>
    {{ openKeys }}
    {{ selectedKeys }}
    {{ store.index }}
    {{ store.Sindex }}
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      @click="showMenu"
    >
      <template v-for="item in menuList.children">
        <!-- 一级菜单 -->
        <template v-if="!item.children">
          <a-menu-item :key="item.index">
            <template #icon>
              <component :is="antIcons[item.icon]" />
            </template>
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <!-- 2级菜单 -->
        <a-sub-menu v-else :key="item.index">
          <template #icon>
            <component :is="antIcons[item.icon]" />
          </template>
          <template #title>{{ item.meta.title }}</template>
          <a-menu-item v-for="son in item.children" :key="son.sindex">{{
            son.title || son.meta.title
          }}</a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { ref } from "vue";
import { routes } from "@/router/index";
import { effect, reactive, toRefs } from "@vue/reactivity";
import { watchEffect, computed, watch } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useContentStore } from "@/store/content";
import * as antIcons from "@ant-design/icons-vue";
import { storeToRefs } from "pinia";

export default {
  /**
   *
   * 点击左侧菜单将菜单信息存储 全局缓存 且是一个累加的过程 当遇到相同下标时需要去重
   * 全局页面动态展示  删除时也一致
   *
   *
   */
  setup() {
    let isCollapsed = ref(false);
    let menuList = reactive(routes[1]);
    const router = useRouter();
    let store = useContentStore(); //使用的时候需要用变量接收再处理
    let { routeInfo, routerArr } = storeToRefs(store);
    let state = reactive({
      openKeys: ["01_0"],
      selectedKeys: ["01_00_2"],
    });

    watch(routeInfo, (newVal, old) => {
      console.log(newVal, old, "newVal,old");
      let { sindex, index } = newVal;
      state.openKeys = [index];
      state.selectedKeys = [sindex];
    });

    if(!routerArr.length){

      console.log(menuList.children[0].children[0],'menuList.children[0].children[0]');
       store.updateRouteArr(menuList.children[0].children[0])

    } ;
    const dealMenuData = () => {
      //初始化处理菜单数据
      menuList.children.filter((item, index) => {
        item.index = `${index}1_0`;
        if (item.children) {
          item.children.filter((son, sindex) => {
            son.sindex = item.index + sindex + "_2"; //  子类下标等于自己的下标
            son.index = item.index; // 子类的父类下标等于父类下标
          });
        }
      });
    };
    const initMenu = () => {
      router.push(store.routeInfo.path || "setup");
    };
    effect(() => {
      dealMenuData();
      initMenu();
    });

    function showMenu({ keyPath, key }) {
      console.log(keyPath, key, menuList.children, "2323232323showchange");
      let obj = {};
      menuList.children.forEach((e) => {
        e.children &&
          e.children.forEach((s) => {
            if (s.sindex == key) {
              obj = s;
            }
          });
      });
      store.updateRouteArr(obj); //更新存储的路由
      store.updateTitle(obj); //当前路由
      store.setIndex(obj.index, obj.sindex);
      router.push({
        name: obj.name,
      });
    }
    menuList.children = menuList.children.filter((item) => item.icon);
    return {
      menuList,
      ...toRefs(state),
      antIcons,
      isCollapsed,
      showMenu,
      store,
    };
  },
};
</script>

<style>
</style>