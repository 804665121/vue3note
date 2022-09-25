  # Composition API的优势

1. #### Options API 存在的问题(vue2) 配置式

   使用传统的Options API 新增或者修改一个需求,就需要分别在data,methods,computed里修改

   ```
   export default{
      data(){},
      methods:{},
      computed:{}
   }
   ```

   

2. #### Composition API 的优势(vue3) 组合式

   我们可以更加优雅的组织我们的代码,函数.让相关功能更加有序的组织在一起.

   

   

  
  # 11.其它

  - data选项应始终被声明为一个函数。

  - 过度类名的更改：

    - Vue2.x写法

      ```css
      .v-enter,
      .v-leave-to {
        opacity: 0;
      }
      .v-leave,
      .v-enter-to {
        opacity: 1;
      }
      ```

    - Vue3.x写法

      ```css
      .v-enter-from,
      .v-leave-to {
        opacity: 0;
      }
      
      .v-leave-from,
      .v-enter-to {
        opacity: 1;
      }
      ```

  - <strong style="color:#DD5145">移除</strong>keyCode作为 v-on 的修饰符，同时也不再支持```config.keyCodes```

  - <strong style="color:#DD5145">移除</strong>```v-on.native```修饰符

    - 父组件中绑定事件

      ```vue
      <my-component
        v-on:close="handleComponentEvent"
        v-on:click="handleNativeClickEvent"
      />
      ```

    - 子组件中声明自定义事件

      ```vue
      <script>
        export default {
          emits: ['close']
        }
      </script>
      ```

  - <strong style="color:#DD5145">移除</strong>过滤器（filter）

    > 过滤器虽然这看起来很方便，但它需要一个自定义语法，打破大括号内表达式是 “只是 JavaScript” 的假设，这不仅有学习成本，而且有实现成本！建议用方法调用或计算属性去替换过滤器。

  - ......

  

