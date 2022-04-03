import { onMounted, onUnmounted, reactive } from "vue";
export default function () {
  let point = reactive({
    x: 0,
    y: 0,
  });

  function savePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
  }

  //通过组合式api的形式
  onMounted(() => {
    window.addEventListener("click", savePoint);
  });
  onUnmounted(() => {
    window.removeEventListener("click", savePoint);
  });

  return point;
}
