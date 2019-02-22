// polyfill
import 'babel-polyfill'
// Vue
import Vue from 'vue'

import App from './App'
// store
import store from '@/store/index'
// 模拟数据
import '@/mock'
// 多国语
import i18n from './i18n'
// 核心插件
import d2Admin from '@/plugin/d2admin'

// [ 可选插件组件 ]D2-Crud
import D2Crud from '@d2-projects/d2-crud'

// 菜单和路由设置
import router from './router'
import menuHeader from '@/menu/header'
import menuAside from '@/menu/aside'
import { frameInRoutes } from '@/router/routes'
// 引入animate.css
// import animate from 'animate.css'
//  引入Echarts
import echarts from 'echarts'
//  引入Vcharts
import VCharts from 'v-charts'
// 引入vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入vueStar
import VueStar from 'vue-star'
// 核心插件
Vue.use(d2Admin)
// vue - awesome - swiper
Vue.use(VueAwesomeSwiper)
// 可选插件组件
Vue.use(D2Crud)
Vue.use(VCharts)
Vue.prototype.$echarts = echarts
// vue - star
Vue.component('VueStar', VueStar)
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
  created () {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('d2admin/page/init', frameInRoutes)
    // 设置顶栏菜单
    this.$store.commit('d2admin/menu/headerSet', menuHeader)
    // 设置侧边栏菜单
    this.$store.commit('d2admin/menu/asideSet', menuAside)
    // 初始化菜单搜索功能
    this.$store.commit('d2admin/search/init', menuHeader)
  },
  mounted () {
    // 展示系统信息
    this.$store.commit('d2admin/releases/versionShow')
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('d2admin/fullscreen/listen')
  }
}).$mount('#app')
