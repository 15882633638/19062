import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'


import App from './App.vue'
//导入组件，为定义路由做准备
import HelloWorld from './components/HelloWorld'
import newworld from './components/newsorld'
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false
//定义路由，参数暂定为路由路径和组件名称
const routes = [
  {path:'/hello/:id/post/:postid',component:HelloWorld},
  {path:'/newworld',component:newworld}
]
//对路由的实例化
const router = new VueRouter({
    routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
