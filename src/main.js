// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

//页面配置
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Dellvery from './components/about/Dellvery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

//三级路由
import PersonName from './components/about/contact/PersonName'
import Phone from './components/about/contact/Phone'
Vue.config.productionTip = false
Vue.use(VueRouter)
/* 路由配置 */
const routes = [
  { path: '/', name: "homeLink", component: Home },
  { path: '/menu', name: "menuLink", component: Menu },
  { path: '/admin', name: "adminLink", component: Admin },
  { path: '/about', name: "aboutLink",redirect:'/about/contact', component: About ,children:[
    {path:'/about/contact',name:'contactLink',redirect:'/personMame',component:Contact,children:[
      {path:'/phone',name:'phone',component:Phone},
      {path:'/personMame',name:'personName',component:PersonName}
    ]},
    {path:'/dellvery',name:'deliveryLink',component:Dellvery},
    {path:'/history',name:'historyLink',component:History},
    {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
  ]},
  { path: '/login', name: "loginLink", component: Login },
  { path: '/register', name: "registerLink", component: Register },
  { path: '*', redirect: '/' }//设置无页面 跳转到 首页
]
/* 路径配置 去掉 # */
const router = new VueRouter(
  {
    routes,
    mode: 'history'
  }
)
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
