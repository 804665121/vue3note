import { defineStore } from "pinia";
import { message } from "ant-design-vue";
export const useContentStore = defineStore({
  id: "content", //唯一值
  // 开启数据缓存  也可自定义
  persist: {
    //数据默认存在 sessionStorage 里，并且会以 store 的 id 作为 key。
    enabled: true,
    strategies: [
      {
        storage: localStorage, //将sessionStrorage 改为localStorage
        paths: ["routerArr", "routeInfo"], //加上之后只有该数据有数据持久化效果
      },
    ],
  },
  state: () => {
    //定义state的值
    return {
      routeInfo: {},
      routerArr: [], //存储路由信息公共页面展示
      index: "01_0",
      Sindex: "01_00_2",
      sum: 0,
    };
  },
  getters: {
    getIndex() {
      return [this.state.index + ""];
    },
    rArr() {
      return this.state.routerArr;
    },
  },
  actions: {
    setIndex(index, Sindex) {
      this.Sindex = Sindex;
      this.index = index;
      // console.log(this.Sindex,  this.index, "Sindex, index");
    },
    updateTitle(val) {
      //更新title的值
      this.routeInfo = val;
    },
    /**
     * 
     * @param {*} val 
     * 
     * function(total,currentValue, index,arr)	必需。用于执行每个数组元素的函数。
     * 函数参数:
参数	描述
total	必需。初始值, 或者计算结束后的返回值。
currentValue	必需。当前元素
currentIndex	可选。当前元素的索引
arr	可选。当前元素所属的数组对象。
initialValue	可选。传递给函数的初始值
     * 
     * 
     * 
     * 
     */
    updateRouteArr(val) {
      let obj = {};
      let isChange = false;
      isChange =
        this.routerArr.length &&
        this.routerArr.some((item) => item.name == val.name);
      if (isChange) return;
      this.routerArr.push(val);
      // array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
      let arr = this.routerArr.reduce((item, next) => {
        obj[next.name] ? "" : (obj[next.name] = true && item.push(next));
        return item;
      }, []);
      this.routerArr = arr;
    },
    deleteRouteArr(num) {
      if (this.routerArr.length <= 1) {
        return message.warn("最后一页了,不能再关闭了!");
      }
      let index = this.routerArr.findIndex((item) => item.sindex == num);
      this.routerArr.splice(index, 1);
      if (this.Sindex == num || this.index == num) {
        this.setIndex(
          this.routerArr[index - 1].index,
          this.routerArr[index - 1].sindex
        );
        this.updateTitle(this.routerArr[index - 1])
      }
    },
  },
});
