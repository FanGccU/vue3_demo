// 引入一个createApp的工厂函数
import { createApp } from 'vue'
// 引入所有组件的外壳组件（类似于父亲）
import App from './App.vue'
// 调用createApp工厂函数，将App外壳组件传入进去，挂载ID选择器为“app”的属性
createApp(App).mount('#app')
