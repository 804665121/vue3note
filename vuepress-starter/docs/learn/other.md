# 其它Composition API

- #### shallowReactive和shallowRef

  - **shallowReactive**:只处理对象最外层的响应式(浅响应式)
  - **shallowRef**: 只处理基本数据类型的响应式,不进行对象的响应式
  - 什么时候使用?
    -   如果又一个对象数据,结构比较深,但变卦时只是外层属性变化====>**shallowReactive**
    - 如果有一个对象数据,后续功能不会修改该对象中的属性,而是生新的对象来替代====>**shallowRefÏ**  

- #### readonly和shallowReadonly

  - readonly:让一个响应式的数据变为只读(深只读)
  - shallowReadonly:让一个响应式数据变为只读的(浅只读)
  - 应用场景:不希望数据被修改时

- #### toRaw与markRaw

  - toRew
    -  作用:讲一个有**reactive**生成的**响应式数据**转为**普通对象**
    - 使用场景:用于读取响应式对象对应的普通对象,对这个普通对象的所有操作,不会引起页面的更新
  - markRaw
    -  作用:标记一个对象,使其**永远不会变成响应式对象**
    - 应用场景:
      -  有些值不应该被响应式的,例如复杂的第三方库
      - 当渲染具有不可变数据源的大列表的时候,跳过响应式转换可以提高性能

- #### customRef

  - 作用:创建一个自定义的ref,并对其依赖项跟踪和更新触发进行显示控制

  - 实现防抖效果

    ```
    <template>
      <h1>自定义ref</h1>
      <div>
        <input type="text" v-model="keyword" />
        <span>{{ keyword }}</span>
      </div>
    </template>
    
    <script>
    import { customRef } from "@vue/reactivity";
    export default {
      setup() {
        // 防抖函数的实现
        function useCustomRef(value, delay = 2000) {
          return customRef((track, trigger) => {
            let timer;
            return {
              get() {
                console.log(value, "get");
                track();
                return value;
              },
              set(newVal) {
                console.log(newVal, "值被修改l1111");
                clearTimeout(timer);
                timer = setTimeout(() => {
                  //默认等待2s之后再执行
                  value = newVal;
                  trigger();
                }, delay);
              },
            };
          });
        }
        let keyword = useCustomRef("hello", 1000);
        return {
          keyword,
        };
      },
    };
    </script>
    
    <style>
    </style>
    ```

    

- #### provide与inject

  - 作用:实现**祖孙之间**的通信Ï

  - 套路:父组件有一个**provide**选项来提供数据,孙组件有**inject**选项来使用这些数据

  - 具体写法

    - 祖组件写法

      ```
      import { reactive,toRefs, provide } from "vue"; //引入provide
       setup() {
          let person = reactive({
            name: "章三",
            age: 24,
            job: 20,
          });
      
          provide("user", person);
      
          return {
            ...toRefs(person),
          };
        },
      ```

      

    - 孙组件接收

      ```
      import { inject } from "vue";
      setup() {
          let person = inject("user");
          return {
            person,
          };
        },
      ```

      

  - 

    

    

- #### 响应式数据的判断

  -  **isRef**:检查一个值是否是**ref**对象
  - **isReactive**:检查一个对象是否是由**reactive**创建的响应式对象
  - **isReadonly**:检查一个对象是否是由**readonly**创建的只读代理
  - **isProxy**:检查一个对象是否是由**reactive**或者**readonly**方法创建的代理对象

  




