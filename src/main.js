import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'//引入element-ui库
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false//阻止显示生产模式的消息。

Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
