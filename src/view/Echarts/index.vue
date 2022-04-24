<template>
  <h1>Echarts</h1>

  <div id="main" style="width: 300px; height: 190px"></div>
</template>

<script>
import * as echarts from "echarts";
import { option } from "./bar";
import { onMounted } from "vue-demi";

export default {
  setup() {
    onMounted(() => {
      getEcharts();
    });
    const getEcharts = () => {
      var chartDom = document.getElementById("main");
      var myChart = echarts.init(chartDom);
      myChart.setOption(option);
    };
  },
};
</script>

<style>
</style>