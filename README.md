# 



**注意点:Vue2 和vue3 不建议混合使用语法结构**

1. 尽量不要与vue2.x配置混合 

   -   vue2配置中的 data,methods,computed 中可以访问到setup方法中的属性,方法
   - 但是在setup中 **不能访问**vue2配置中的(data,methods,computed)
   - 如何存在重名 则setup中有优先

2. setup不能是一个async函数,因为返回值不再是return对象,而是promise,模版看不到对象中的属性

   

   

     

# 1.ref函数

- 作用:定义一个响应式的数据

- 语法 

  ```
  const age=ref(initValue)
  ```

  -  创建一个包含响应式的**引用对象(reference)**
  - js中操作数据xx.value
  - 模版中读取数据不需要.value 直接与vue2 读取一致

- 备注:

  -  接收的数据可以是:基本数据类型,也可以是对象类型
  -  基本数据类型的数据:响应式依然是 使用 **Object.defineProperty()** 的**get**和**set**完成的
  - 对象类型的数据: 内部 使用了Vue3的一个新函数--------**-reactive**函数





# 2.reactive函数 

- 作用: 定义一个响应式对象类型数据

- 原理: 通过使用**Proxy**代理的方式实现响应式(数据劫持),并通过**Reflect**操作源对象内部的数据

- 语法

  ```
  let objInfo=reactive({
   name:"123",
   age:23,
   a:{
    b:{
    c:2323
    }
   }
  })
  ```

- 备注

  - 不可以定义基本数据类型

  - 在修改对象里面的值的时候不需要.value 可以直接修改

    ```
    objInfo.name=“王五”
    ```

  - 可以处理深层次结构的数据

    ```
    objInfo.a.b.c=898989 可以直接修改 无需借助其它api
    ```

# 3.vue2和vue3实现原理对比

### Vue2响应式

原理:运用Object.definePrototype进行数据代理给数据绑定 **get**和**set**方法

弊端: 

- 新增属性 和删除属性页面不会自动更新, 需要借助**this.$set()和 vue.set()**
- 直接对数组下标修改,页面不会自动更新   

```
        let person = {
            name: "章三"
        }
        let p = {}
        Object.defineProperty(p, "name", {
            get() {
                return person.name
            },
            set(value) {
                return p.name = value
            }
        })
```

#### Vue3响应式

- 实现原理

  - 通过Proxy(代理):拦截对象任意属性的变化:包括属性的 增 删 改 查.
  - 通过reflect(反射): 对被代理的对象属性进行操作

  ```
     /**
           *  vue3 实现方式
           * 使用 Proxy 代理的方式 运用set 和get 和deletePrototype 方法 
           * 解决了vue2中不能直接修改数组问题和删除数据不更新问题 
           * 和直接修改对象里面的值的问题
           * 运用Reflect 反射将处理的值返回
           * 
           */
    let person = {
              name: "账单",
              age: 24
          }
          let p = new Proxy(person, {
              get(target, name) {
                  console.log(target, name, 'target,name')
                  return Reflect.get(trage, name)
              },
              set(target, name, value) {
                  console.log("修改了", target, name, 'target,name')
                  return Reflect.set(trage, name)
              },
              deleteProperty(target, name) {
                  console.log("删除了", target, name, 'target,name')
                  // return delete target[name]
                  return Reflect.deleteProperty(target, name)
              }
  
          })
  ```

  

# 4.setup注意事项

- setup执行的时机

  在beforeCreate之前执行一次,this是undefined

- setup的参数

  - props :值为对象,包含组件外部传递过来的值,且组件内部声明接收了的属性
  - context:
    -  attrs: 值为对象,包含:组件外部传递过来,但没有在props配置中声明的属性,相当于 this.$attrs
    - Slots: 收到的插槽内容,相当于this.$slots
    - emit : 分发自定义事件的函数,相当于this.$emit

# 5.watch注意事项



- 监视**ref**定义的响应式数据,使用**watch监视一个值**

  ```
   let sum = ref(1);
   immediate:true 表示初始化的时候执行一次
    watch(
        sum,
        (newVal, oldVal) => {
          console.log(newVal, oldVal, "sum修改了");
        },
        { immediate: true }
      );
  ```

- 监控多个**ref**值的情况,**监视多个值**

  ```
  监视多个值的情况,watch的第一个值接收的是一个数据,返回的newval和oldVal也是一个数据
  
      let sum = ref(1);
      let msg = ref("hello");
      watch([sum, msg], (newVal, oldVal) => {
            console.log(newVal, oldVal, "sum修改了");
      });
  ```

  

- 监视**reactive** 定义的响应式数据的**全部属性**

  - 使用**watch**监测的时候无法准确监测到到**oldVal**.
  - 强制开启了**deep**深度监视(deep无法关闭)

  ```
  let person = reactive({
        name: "zangsan",
        age: 19,
        job: {
          j1: 20,
        },
      });
  watch(person, (newVal, oldVal) => {
     console.log(newVal, oldVal, "person 监视的值");
  });
  ```

  

- 监视**reactive** 定义的响应式数据的**某个属性**

  - 需要使用箭头函数的方式,才能监测要数据变化 ,直接写无法使用

  ```
   let person = reactive({
        name: "zangsan",
        age: 19,
        job: {
          j1: 20,
        },
      });
      watch(
        () => person.age,
        (newVal, oldVal) => {
          console.log(newVal, oldVal, "person.age 监视的值");
        }
      );
  ```

  

- 监视**reactive** 定义的响应式数据的**某些属性**

  与**ref**的响应式数据一致也是传递一个数组

  ```
  
    let person = reactive({
        name: "zangsan",
        age: 19,
        job: {
          j1: 20,
        },
      });
   watch([() => person.age, () => person.name], (newVal, oldVal) => {
        console.log(newVal, oldVal, "person.age 监视的值");
  });
  ```

  

- 特殊情况

  监视**reactive**定义的对象中的**某个属性**,开启**deep:true**有效

  ```
   let person = reactive({
        name: "zangsan",
        age: 19,
        job: {
          j1: 20,
        },
      });
     watch(
        () => person.job,
        (newVal, oldVal) => {
          console.log(newVal, oldVal, "person.job 监视的值");
        },
        { deep: true }
      );//此处由于监视的是reactive定义的对象中的某个属性,所有deep配置有效果
  ```

  在watch中,使用**ref**定一个的对象,在监视值的时候需要加上.value,

  ```
   let person1 = ref({
        name: "zangsan",
        age: 19,
        job: {
          j1: 20,
        },
      });
  //第一种方式
      watch(person1.value, (newVal, oldVal) => {
        console.log(newVal, oldVal, "oldVal");
      });
    //第二种方式
      watch(person1, (newVal, oldVal) => {
        console.log(newVal, oldVal, "oldVal");
      },{deep:true});
  ```

  

   

# 4.watchEffect函数

- **watch**使用:既要指明函数的属性,也要指明监视的回调

- **watchEffect**:不需要指明监视哪个属性,监视的回调中用到哪个属性,那就监视哪个属性

- **watchEffect**有点像**computed**:

  -  但是**computed**注重的是计算出来的值(**回调函数的返回值)**,所以必须要写返回值

  - 而**watchEffect**更注重的是过程(**回调函数的函数体**),所以不用写返回值.

    ```
    watchEffect所指定的回调中用到的数据只要发生改变,则直接执行回调
     watchEffect(() => {
          const x = person.age;
          console.log("回调执行了");
     });
    ```

    





# 5.生命周期

Vue3中也可以直接使用Vue2的生命周期

- **beforeDestroy**改名为**beforeUnmount**
- **destroyed**改名为**ummounted**

**选项式 API 的生命周期选项和组合式 API 之间的映射**

- `beforeCreate` -> 使用 `setup()`

- `created` -> 使用 `setup()`

- `beforeMount` -> `onBeforeMount`

- `mounted` -> `onMounted`

- `beforeUpdate` -> `onBeforeUpdate`

- `updated` -> `onUpdated`

- `beforeUnmount` -> `onBeforeUnmount`

- `unmounted` -> `onUnmounted`

- `errorCaptured` -> `onErrorCaptured`

- `renderTracked` -> `onRenderTracked`

- `renderTriggered` -> `onRenderTriggered`

- `activated` -> `onActivated`

- `deactivated` -> `onDeactivated`

  

![截屏2022-04-02 22.20.13](/Users/liulu/Desktop/截屏2022-04-02 22.20.13.png)

# 6.hook函数

- 什么是hook?-----本质上的一个函数,把setup函数中使用的Composition API进行了封装
- 类似于vue2.x中的mixin
- 自定义hook的优势:复用代码,让setup中的逻辑更清楚易懂

# 7.toRef

- 作用:创建一个**ref**对象,其**value**值指向另一个对象中的某个属性

- 语法

  ```
  const name=toRef(person,'name')
  ```

- 应用:要将响应式对象中的某个属性单独提供给外部使用

- 扩展:**toRef**和**toRefs**功能一致,但可以批量创建多个ref对象,语法:

  ```
  toRefs(person)
  ```

  

# 8.其它Composition API

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

  





# 9.Composition API的优势

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

   

   

# 10.新的组件



- #### Fragment

  - 在vue2中:组件必须有一个根元素
  - 在vue3中:组件可以没有根标签,内部会讲多个标签包含在一个Fragment虚拟元素中
  - 好处:减少标签层级,减少内存占用

- Teleport

  - 可以将组件里面嵌套很深的组件,移动到body里面

  - 实现代码:**teleport**

    ```
    <teleport to="body">
        <div class="panel" v-if="isShow" @click="closeDialog">
          <div class="box">
            这是一个弹框
            <div>这是一些内容</div>
            <button >关闭弹框</button>
          </div>
        </div>
      </teleport>
    ```

    

- #### Suspense

  - 等待异步组件时渲染一些额外内容,让应用有更好的用户体验

  - 使用步骤

    -  异步引入组件

      ```
      
      import { defineAsyncComponent } from "vue";
      const Child = defineAsyncComponent(() => import("../components/Child.vue")); //异步引入
      ```

    - 使用**suspense**包裹组件,并配置好**default**和**fallback**

      ```
      <Suspense>
          <template v-slot:default>
            <Child></Child>
          </template>
          <template v-slot:fallback>
            <span>....加载中</span>
          </template>
        </Suspense>
      ```

      

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

  

