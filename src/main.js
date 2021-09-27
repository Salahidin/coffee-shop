import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/fonts/fonts.css'
import { Button, Row, Col, Icon, Cell, Image as VanImage } from 'vant';

createApp(App).use(router).use(Button).use(Row).use(Col).use(Icon).use(Cell).use(VanImage).mount('#app')


// 修改特面title
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})