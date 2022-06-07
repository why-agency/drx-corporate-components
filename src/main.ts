import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import index from './pages/index.vue'
import fullscreenMediaText from './pages/fullscreen-media-text.vue'
import multiMediaText from './pages/multimedia-text.vue'
import Base from './pages/base.vue'

const app = createApp(App)

const routes = [
  { path: '/', component: index },
  { path: '/fullscreen-media-text', component: fullscreenMediaText },
  { path: '/multimedia-text', component: multiMediaText },
  { path: '/base', component: Base }
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes // short for `routes: routes`
})

app.use(router)
app.mount('#app')
