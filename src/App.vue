<template>
  <!-- <home></home> -->
  <router-view />
  <!-- vue3根标签可以没有最外层标签包裹 -->
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <change-user></change-user> -->
  <!-- <watch-effect></watch-effect> -->
  <!-- <life-cycle></life-cycle> -->
  <!-- <toref></toref> -->
  <!-- <other></other> -->
  <!-- <to-raw></to-raw> -->
  <!-- <custom-ref></custom-ref> -->
  <!-- <life-cycle-hook></life-cycle-hook>
  <demo></demo> -->
  <!-- <father></father> -->
  <!-- <suspense-info></suspense-info> -->
  <!-- <Suspense>
    <template v-slot:default>
      <Child></Child>
    </template>
    <template v-slot:fallback>
      <span>....加载中</span>
    </template>
  </Suspense> -->
</template>

<script>
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue"));
import ChangeUser from "./components/ChangeUser.vue";
import CustomRef from "./components/CustomRef.vue";
import Demo from "./components/Demo.vue";
import Father from "./components/Father.vue";
import LifeCycle from "./components/LifeCycle.vue";
import LifeCycleHook from "./components/LifeCycleHook.vue";
import Other from "./components/Other.vue";
import ToRaw from "./components/ToRaw.vue";
import Toref from "./components/Toref.vue";
import Watch from "./components/Watch.vue";
import WatchEffect from "./components/WatchEffect.vue";
import SuspenseInfo from "./components/SuspenseInfo.vue";
// import Home from './view/Home.vue';
import { watch } from "vue";
export default {
  name: "App",
  components: {
    Child,
    ChangeUser,
    Watch,
    WatchEffect,
    LifeCycle,
    LifeCycleHook,
    Demo,
    Toref,
    Other,
    ToRaw,
    CustomRef,
    Father,
    // Home,
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
html,
body {
  margin: 0;
  padding: 0;
}
</style>
