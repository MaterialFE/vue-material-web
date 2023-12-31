import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入@material/web组件
import '@material/web/divider/divider.js'
import '@material/web/button/filled-button.js'
import '@material/web/button/outlined-button.js'
import '@material/web/button/text-button.js'
import '@material/web/button/elevated-button.js'
import '@material/web/button/filled-tonal-button.js'
import '@material/web/checkbox/checkbox.js'
import '@material/web/elevation/elevation.js'
import '@material/web/iconbutton/icon-button.js'
import '@material/web/iconbutton/filled-icon-button.js'
import '@material/web/icon/icon.js'
import '@material/web/list/list.js'
import '@material/web/list/list-item.js'
import '@material/web/menu/menu.js'
import '@material/web/menu/menu-item.js'
import '@material/web/radio/radio.js'
// 引入代码高亮highlight.js
import 'highlight.js/styles/stackoverflow-light.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from "@highlightjs/vue-plugin"
// 引入国际化
import i18n from './i18n'

createApp(App)
  .use(router)
  .use(hljsVuePlugin)
  .use(i18n)
  .mount('#app')
