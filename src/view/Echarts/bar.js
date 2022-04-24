export const option = {
    backgroundColor: '#0e202d',
    "grid": {
        "top": "middle",
        "bottom":20,
        left:70,
        right:70,
        "containLabel":true,
    },
    "tooltip": {},
    "xAxis": {
        "data": ["关井数", "开井数", "不在线"],
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            interval:0,
            textStyle: {
                color:  '#beceff',
                fontSize:15,
            },
        }
    },
    "yAxis": {
        "splitLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLine": {
            "show": false
        },
        "axisLabel": {
            "show": false
        }
    },
    "series": [{
        "name": "",
        "type": "pictorialBar",
        "symbolSize": [60, 30],
        "symbolOffset": [0, -20],
        "z": 13,
        "data": [{
            "name": "关井数",
            "value": "150",
            "symbolPosition": "end",
            "itemStyle": {
                "normal": {
                    "color": "#00fff5"  //圆柱顶部颜色
                    
                }
            }
        }, {
            "name": "开井数",
            "value": "200",
            "symbolPosition": "end",
            "itemStyle": {
                "normal": {
                    "color": "#ffcc00" //圆柱顶部颜色
                }
            }
        }, {
            "name": "不在线",
            "value": "100",
            "symbolPosition": "end",
            "itemStyle": {
                "normal": {
                    "color": "#b9b7ff" //圆柱顶部颜色
                }
            }
        }]
    },  {
        "type": "bar",
        "silent": true,
        "barWidth": 60,
        "barGap": "-100%",
        z:10,
        "data": [{
            "name": "关井数",
            "value": "150",
            "label": {
            "normal": {
                "show": true,
                "position": "top",
                "distance": 25,
                "textStyle": {
                    "color": "#00fff5", //柱子对应数值颜色
                    "fontSize": 12
                }
            }
        },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                            "offset": 0,
                            "color": "rgba(0,255,245,0.5)"
                        }, {
                            "offset": 1,
                            "color": "#43bafe" //底部渐变颜色
                        }]
                    }
                }
            }
        }, {
            "name": "开井数",
            "value": "200",
            "z":20,
            "label": {
            "normal": {
                "show": true,
                "position": "top",
                "distance": 25,
                "textStyle": {
                    "color": "#ffcc00", //柱子对应数值颜色
                    "fontSize": 12
                }
            }
        },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                            "offset": 0,
                            "color": "rgba(255,204,0,0.5)"
                        }, {
                            "offset": 1,
                            "color": "#ff7800" //底部渐变颜色
                        }]
                    }
                }
            }
        }, {
            "name": "不在线",
            "value": "100",
            "label": {
            "normal": {
                "show": true,
                "position": "top",
                "distance": 25,
                "textStyle": {
                    "color": "#b9b7ff", //柱子对应数值颜色
                    "fontSize": 12
                }
            }
        },
            "itemStyle": {
                "normal": {
                    "color": {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                            "offset": 0,
                            "color": "rgba(185,183,255,0.5)"
                        }, {
                            "offset": 1,
                            "color": "#e9a5ff" //底部渐变颜色
                        }]
                    }
                }
            }
        }]
    }]
}