<template>
  <a-layout>
    <!-- <a-layout-sider> -->
    <MenuList></MenuList>
    <!-- </a-layout-sider> -->
    <a-layout>
      <a-layout-content>
        <a-layout-header>
          <div class="header">
            <a-breadcrumb>
              <a-breadcrumb-item
                v-for="(item, index) in routeList.children"
                :key="index"
              >
                <span>
                  {{ item.meta.title }}
                </span>
                <template #overlay>
                  <a-menu
                    v-for="(child, cindex) in item.children"
                    :key="cindex"
                  >
                    <a-menu-item>
                      {{ child.meta.title }}
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-breadcrumb-item>
            </a-breadcrumb>
            <div>
              <a-space>
                <sound-outlined />
                <smile-outlined />
                <sync-outlined />
                <team-outlined />
              </a-space>
            </div>
          </div>
          <!-- tabs -->
          <div style="width: 100%; height: 50px; padding: 10px 20px">
            <a-tabs
              hide-add
              v-model:activeKey="activeKey"
              type="editable-card"
              @edit="onEdit"
              @tabClick="changeTab"
            >
              <a-tab-pane
                v-for="item in routerArr"
                :key="item.sindex"
                :tab="item.meta.title"
                tabPosition="bottom"
                animated
              >
              </a-tab-pane>
            </a-tabs>
          </div>
        </a-layout-header>
        <!-- <transition name="fade-transform" mode="out-in" appear> -->
        <a-card>
          <div class="content">
            <router-view> </router-view>
          </div>
        </a-card>
        <!-- </transition> -->
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import MenuList from "@/common/MenuList.vue";
import * as antIcons from "@ant-design/icons-vue";
import { router, routes } from "../router/index";
import { useContentStore } from "@/store/content";
import { reactive } from "vue";
import { storeToRefs } from "pinia";
export default {
  components: { MenuList, ...antIcons },
  setup() {
    let store = useContentStore();
    let { Sindex, index, routerArr } = storeToRefs(store);
    const activeKey = Sindex;
    let routeList = reactive(routes[1]);
    routeList.children.filter((item) => {
      item.breadcrumbName = item.meta.title;
    });

    // tab被切换
    const changeTab = (e) => {
      //修改公共左侧菜单栏
      let obj = reactive({});
      store.routerArr.forEach((elem) => {
        if (elem.sindex == e) {
          obj = elem;
        }
      });
      router.push(obj.path);
      store.updateTitle(obj);
      store.setIndex(obj.index, obj.sindex);
    };

    // 删除tabs
    const onEdit = (index) => {
      store.deleteRouteArr(index);
    };

    const testFunc = () => {
      let test = function () {
        this.name = "zhangsan";
        console.log("this is a test function");
      };
      let obj = {};
      test.call(obj);
      console.log(obj.name);
    };

    testFunc()

    return {
      onEdit,
      Sindex,
      index,
      routerArr,
      routeList,
      changeTab,
      activeKey,
    };
  },
};
</script>

<style lang="less" scoped>
.ant-layout {
  // height:100vh;
}
.ant-layout-header {
  background-color: #fdfdfd;
  height: auto;
  padding: 0;
}
.header {
  padding: 0 20px;
  box-shadow: inset 0px -1px 0px 0px #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}

.ant-tag {
  padding: 8px 20px;
  border-bottom: none;
}
.content {
  padding: 20px;
  background-color: #fff;
  overflow: auto;
  overflow-y: scroll;
}
.ant-layout-footer {
  background-color: #fdfdfd;
  box-shadow: inset 0px 2px 0px 0px #d9d9d9;
}
.ant-card {
  margin: 20px;
}
</style>