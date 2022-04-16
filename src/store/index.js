import piniaPluginPersist from "pinia-plugin-persist"; //开启数据持久化
import { createPinia } from "pinia";
const store = createPinia();
store.use(piniaPluginPersist);
export default store;
