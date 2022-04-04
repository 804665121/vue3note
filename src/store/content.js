import { defineStore } from "pinia";
export const useContentStore = defineStore({
  id: "content",
  state: () => {
    //定义state的值
    return {
      routeInfo: {},
      sum: 0,
    };
  },
  getters: {
    all: (state) => {
      return "getters:" + state.routeInfo.meta.title;
    },
  },
  actions: {
    updateTitle(val) {
      //更新title的值
      this.routeInfo = val;
    },
    changeSum() {
      //调用actions内部的方法
      this.addSum(2);
    },
    addSum(num) {
      this.sum += num;
    },
  },
});
