# watch注意事项



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

    





  

   
