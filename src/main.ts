import {createApp} from 'vue'
import messages from "@intlify/unplugin-vue-i18n/messages"
import {createI18n} from "vue-i18n"
import * as VueRouter from 'vue-router'

import {createPinia} from 'pinia'

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
import navMainDark from './pages/nav-main-dark.vue'
import navMainLight from './pages/nav-main-light.vue'
import JobDetail from './pages/job-detail.vue'

const lang = document.documentElement.getAttribute('lang')
const currentLang = lang ? lang.substring(0, 2).toLowerCase() : "de"; // fallback to "de" also here to prevent "null" case

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: currentLang,
    fallbackLocale: "de",
    messages: messages,
});

const app = createApp(App)

const routes = [
    {path: '/', component: index},
    {path: '/fullscreen-media-text', component: fullscreenMediaText},
    {path: '/multimedia-text', component: multiMediaText},
    {path: '/sticky-scroll', component: stickyScroll},
    {path: '/content-slider', component: contentSlider},
    {path: '/media-hotspot', component: mediaHotspot},
    {path: '/kpi-fullscreen', component: kpiFullscreen},
    {path: '/news-slider', component: newsSlider},
    {path: '/intro-hero', component: introHero},
    {path: '/job-market', component: JobMarket},
    {path: '/nav-main-dark', component: navMainDark},
    {path: '/nav-main-light', component: navMainLight},
    {path: '/job-detail', component: JobDetail}
]

const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes // short for `routes: routes`
})

app.use(router)
app.use(i18n)
app.use(createPinia())
app.mount('#app')
