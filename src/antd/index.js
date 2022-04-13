import { Layout, Card, Menu, Space,Tag } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

// 按需加载
const components = [Layout, Card, Menu, Space,Tag];
export function setupAntd(app) {
  components.forEach((component) => {
    app.use(component);
  });
}
