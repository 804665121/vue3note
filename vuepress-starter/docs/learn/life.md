# 生命周期

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
