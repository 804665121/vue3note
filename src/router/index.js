// import { defineAsyncComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});
const routes = [
  {
    path: "/",
    component: () => import("@/view/Login"),
    // redirect: "setup",
  },
  {
    meta: {
      title: "vue3小案例",
    },
    name: "home",
    redirect:"setup",
    path: "/home", //setup
    icon: "DesktopOutlined",
    component: () => import("@/view/Home.vue"),
    children: [
      {
        meta: {
          title: "vue3管理",
        },
        path: "/vue3", //Suspense的使用
        name: "vue3",
        redirect:"setup",
        icon: "LaptopOutlined",
        component: () => import("@/common/Context.vue"),
        children: [
          {
            meta: {
              title: "setup",
            },
            name: "setup",
            path: "/setup", //setup
            icon: "DesktopOutlined",
            component: () => import("@/components/SetupHello.vue"),
          },{
            meta: {
              title: "父子组件传参数",
            },
            name: "father",
            path: "/father", //父子组件传参数
            icon: "CommentOutlined",
            component: () => import("../components/Father.vue"),
          },
          {
            meta: {
              title: "自定义ref",
            },
            name: "custom",
            path: "/custom", //自定义ref
            icon: "PaperClipOutlined",
            component: () => import("../components/CustomRef.vue"),
          },
          {
            meta: {
              title: "生命周期",
            },
            name: "life",
            path: "/life", //生命周期
            icon: "PropertySafetyOutlined",
            component: () => import("../components/LifeCycle.vue"),
          },
          {
            meta: {
              title: "hooks的用法",
            },
            path: "/hooks", //hooks的用法
            name: "hooks",
            icon: "PushpinOutlined",
            component: () => import("../components/LifeCycleHook.vue"),
          },
          {
            meta: {
              title: "Suspense的使用",
            },
            path: "/suspense", //Suspense的使用
            name: "suspense",
            icon: "LaptopOutlined",
            component: () => import("../components/SuspenseInfo"),
          },
          {
            meta: {
              title: "ToRaw的使用",
            },
            path: "/toraw", //ToRaw的使用
            name: "toraw",
            icon: "MacCommandOutlined",
            component: () => import("../components/ToRaw.vue"),
          },
          {
            meta: {
              title: "计算属watch的使用性",
            },
            path: "/watch", //watch的使用
            name: "watch",
            icon: "ProfileOutlined",
            component: () => import("../components/Watch.vue"),
          },
          {
            meta: {
              title: "watchEffect的使用",
            },
            path: "/effect", //watchEffect的使用
            name: "effect",
            icon: "ScheduleOutlined",
            component: () => import("../components/WatchEffect.vue"),
          },
          {
            meta: {
              title: "Toref的使用",
            },
            path: "/toref", //oref的使用
            name: "toref",
            icon: "WalletOutlined",
            component: () => import("../components/Toref.vue"),
          },
        ],
      },
      {
        meta: {
          title: "232323",
        },
        name: "23",
        path: "/23", //setup
        icon: "DesktopOutlined",
        component: () => import("@/components/ChangeUser.vue"),
      },
    {
      meta: {
        title: "echarts",
      },
      name: "echarts",
      path: "/echarts", //setup
      icon: "DesktopOutlined",
      component: () => import("@/view/Echarts"),
    }
     
    ],
  },
  
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
  scrollBehavior: () => ({
    y: 0,
  }),
});

router.beforeEach((to, form, next) => {
  document.title = to.meta.title;
  console.log(to,'to')
  NProgress.start();
  next();
});
// 当路由进入后：关闭进度条
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done();
});

export { router, routes };
