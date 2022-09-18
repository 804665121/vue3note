# reactive函数 

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

# vue2和vue3实现原理对比

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