// import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: () => import("../view/Home.vue"),
    redirect: "setup",
    children: [
      {
        title: "setup",
        name: "setup",
        meta: {
          title: "setup",
        },
        path: "setup", //setup
        component: () => import("@/components/SetupHello.vue"),
      },
      {
        meta: {
          title: "计算属性",
        },
        title: "计算属性",
        name: "component",
        path: "component", //计算属性
        component: () => import("../components/ChangeUser.vue"),
      },
      {
        meta: {
          title: "父子组件传参数",
        },
        title: "父子组件传参数",
        name: "father",
        path: "father", //父子组件传参数
        component: () => import("../components/Father.vue"),
      },
      {
        meta: {
          title: "自定义ref",
        },
        title: "自定义ref",
        name: "custom",
        path: "custom", //自定义ref
        component: () => import("../components/CustomRef.vue"),
      },
      {
        meta: {
          title: "生命周期",
        },
        title: "生命周期",
        name: "life",
        path: "life", //生命周期
        component: () => import("../components/LifeCycle.vue"),
      },
      {
        meta: {
          title: "hooks的用法",
        },
        title: "hooks的用法",
        path: "hooks", //hooks的用法
        name: "hooks",
        component: () => import("../components/LifeCycleHook.vue"),
      },
      {
        meta: {
          title: "计算属性",
        },
        title: "watch的使用",
        path: "watch", //watch的使用
        name: "watch",
        component: () => import("../components/Watch.vue"),
      },
      {
        meta: {
          title: "计算属性",
        },
        title: "watchEffect的使用",
        path: "effect", //watchEffect的使用
        name: "effect",
        component: () => import("../components/WatchEffect.vue"),
      },
      {
        meta: {
          title: "Toref的使用",
        },
        title: "Toref的使用",
        path: "toref", //oref的使用
        name: "toref",
        component: () => import("../components/Toref.vue"),
      },
      {
        meta: {
          title: "Suspense的使用",
        },
        title: "Suspense的使用",
        path: "toref", //Suspense的使用
        name: "toref",
        component: () => import("../components/SuspenseInfo"),
      },
      {
        meta: {
          title: "ToRaw的使用",
        },
        title: "ToRaw的使用",
        path: "toraw", //ToRaw的使用
        name: "toraw",
        component: () => import("../components/ToRaw.vue"),
      },
    ],
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

router.beforeEach((to, form, next) => {
  document.title = to.meta.title;
  next();
});

export { router, routes };
