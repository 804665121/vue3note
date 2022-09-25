(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{286:function(e,t,a){"use strict";a.r(t);var s=a(13),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"reactive函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reactive函数"}},[e._v("#")]),e._v(" reactive函数")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("作用: 定义一个响应式对象类型数据")])]),e._v(" "),t("li",[t("p",[e._v("原理: 通过使用"),t("strong",[e._v("Proxy")]),e._v("代理的方式实现响应式(数据劫持),并通过"),t("strong",[e._v("Reflect")]),e._v("操作源对象内部的数据")])]),e._v(" "),t("li",[t("p",[e._v("语法")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('let objInfo=reactive({\n name:"123",\n age:23,\n a:{\n  b:{\n  c:2323\n  }\n }\n})\n')])])])]),e._v(" "),t("li",[t("p",[e._v("备注")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("不可以定义基本数据类型")])]),e._v(" "),t("li",[t("p",[e._v("在修改对象里面的值的时候不需要.value 可以直接修改")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("objInfo.name=“王五”\n")])])])]),e._v(" "),t("li",[t("p",[e._v("可以处理深层次结构的数据")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("objInfo.a.b.c=898989 可以直接修改 无需借助其它api\n")])])])])])])]),e._v(" "),t("h1",{attrs:{id:"vue2和vue3实现原理对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue2和vue3实现原理对比"}},[e._v("#")]),e._v(" vue2和vue3实现原理对比")]),e._v(" "),t("h3",{attrs:{id:"vue2响应式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue2响应式"}},[e._v("#")]),e._v(" Vue2响应式")]),e._v(" "),t("p",[e._v("原理:运用Object.definePrototype进行数据代理给数据绑定 "),t("strong",[e._v("get")]),e._v("和"),t("strong",[e._v("set")]),e._v("方法")]),e._v(" "),t("p",[e._v("弊端:")]),e._v(" "),t("ul",[t("li",[e._v("新增属性 和删除属性页面不会自动更新, 需要借助"),t("strong",[e._v("this.$set()和 vue.set()")])]),e._v(" "),t("li",[e._v("直接对数组下标修改,页面不会自动更新")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('        let person = {\n            name: "章三"\n        }\n        let p = {}\n        Object.defineProperty(p, "name", {\n            get() {\n                return person.name\n            },\n            set(value) {\n                return p.name = value\n            }\n        })\n')])])])])}),[],!1,null,null,null);t.default=n.exports}}]);