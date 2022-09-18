# ref函数

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
