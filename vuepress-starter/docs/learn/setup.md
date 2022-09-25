# setup注意事项

- setup执行的时机

  在beforeCreate之前执行一次,this是undefined

- setup的参数

  - props :值为对象,包含组件外部传递过来的值,且组件内部声明接收了的属性
  - context:
    -  attrs: 值为对象,包含:组件外部传递过来,但没有在props配置中声明的属性,相当于 this.$attrs
    - Slots: 收到的插槽内容,相当于this.$slots
    - emit : 分发自定义事件的函数,相当于this.$emit
