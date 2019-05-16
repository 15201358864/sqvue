// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Element from 'element-ui'
import './element-variables.scss'

//页面配置
import Home from './components/Home'
// import Menu from './components/Menu'
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
// import PersonName from './components/about/contact/PersonName'
// import Phone from './components/about/contact/Phone'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Element, { size: 'small' })
/* 路由配置 和懒加载 */
const routes = [
  { path: '/', name: "homeLink", component: Home },
  { path: '/menu', name: "menuLink", component: resolve => require(['./components/Menu'],resolve)},
  { path: '/admin', name: "adminLink", component: Admin },
  { path: '/about', name: "aboutLink",redirect:'/about/contact', component: About ,children:[
    {path:'/about/contact',name:'contactLink',redirect:'/personMame',component:Contact,children:[
      {path:'/phone',name:'phone',component: resolve => require(['./components/about/contact/Phone'], resolve)}, 
      {path:'/personMame',name:'personName',component:resolve => require(['./components/about/contact/PersonName'], resolve)}
    ]},
    {path:'/dellvery',name:'deliveryLink',component:Dellvery},
    {path:'/history',name:'historyLink',component:History},
    {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
  ]},
  { path: '/login', name: "loginLink", component: Login },
  { path: '/register', name: "registerLink", component: Register },
  { path: '*', redirect: '/' }//设置无页面 跳转到 首页
]
//引入element-ui
import {
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Autocomplete)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
Vue.use(TimeSelect)
Vue.use(TimePicker)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Alert)
Vue.use(Slider)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Upload)
Vue.use(Progress)
Vue.use(Badge)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(Cascader)
Vue.use(ColorPicker)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

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
