# toRef

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

  
