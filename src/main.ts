import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import index from './pages/index.vue'
import fullscreenMediaText from './pages/fullscreen-media-text.vue'

const app = createApp(App)

const routes = [
    { path: '/', component: index},
    { path: '/fullscreen-media-text', component: fullscreenMediaText }
  ]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  app.use(router)
  app.mount('#app')
