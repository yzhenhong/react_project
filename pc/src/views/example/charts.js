import React, { Component } from "react";
import "./charts.less";
// 引入 echarts 主模块。
// import * as echarts from 'echarts'; // 使用 ES Module
// var echarts = require('echarts') // 使用 CommonJS

// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default class ChartsExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Charts">
        Charts
        <div id="echartsmain" className="echartsmain"></div>
      </div>
    );
  }
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("echartsmain"));

    // 指定图表的配置项和数据
    let option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    myChart.setOption(option);
  }
}
