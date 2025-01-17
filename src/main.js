import { createApp } from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import ElementPlus from 'element-plus'
import './styles/element-variables.scss'
import enLang from 'element-plus/es/locale/lang/en'// 如果使用中文语言包请默认支持，无需额外引入，请删除该依赖

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import icons from './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

createApp(App).use(store).use(router).use(ElementPlus, {
  size: Cookies.get('size') || 'default',
  locale: enLang // 如果使用中文，无需设置，请删除
}).use(icons).mount('#app')
