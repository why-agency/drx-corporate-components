import { createApp } from 'vue'
import * as VueRouter from 'vue-router'

import { createPinia } from 'pinia'

import App from './App.vue'

// Pages
import index from './pages/index.vue'
import fullscreenMediaText from './pages/fullscreen-media-text.vue'
import multiMediaText from './pages/multimedia-text.vue'
import stickyScroll from './pages/sticky-scroll.vue'
import contentSlider from './pages/content-slider.vue'
import mediaHotspot from './pages/media-hotspot.vue'
import kpiFullscreen from './pages/kpi-fullscreen.vue'
import newsSlider from './pages/news-slider.vue'
import introHero from './pages/intro-hero.vue'
import JobMarket from './pages/job-market.vue'
import JobDetail from './pages/job-detail.vue'

const app = createApp(App)

const routes = [
  { path: '/', component: index },
  { path: '/fullscreen-media-text', component: fullscreenMediaText },
  { path: '/multimedia-text', component: multiMediaText },
  { path: '/sticky-scroll', component: stickyScroll },
  { path: '/content-slider', component: contentSlider },
  { path: '/media-hotspot', component: mediaHotspot },
  { path: '/kpi-fullscreen', component: kpiFullscreen },
  { path: '/news-slider', component: newsSlider },
  { path: '/job-market', component: JobMarket },
  { path: '/job-detail', component: JobDetail },
  { path: '/intro-hero', component: introHero }
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes // short for `routes: routes`
})

app.use(router)
app.use(createPinia())
app.mount('#app')
