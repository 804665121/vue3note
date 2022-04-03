import { defineStore } from "pinia";
export const useContentStore = defineStore({
  id: "content",
  state: () => {
    //定义state的值
    return {
      title: "",
      sum: 0,
    };
  },
  getters: {
    all: (state) => {
      return "getters:" + state.title;
    },
  },
  actions: {
    updateTitle(title) {
      //更新title的值
      this.title = title;
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
