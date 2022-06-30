import { defineCustomElement } from './localApiCustomElement'

import O0304FullscreenMediaText from '../src/components/organisms/o-03-04-fullscreen-media-text.ce.vue'
import O0312MultiMediaText from '../src/components/organisms/o-03-12-multi-media-text.ce.vue'
import O0311StickyScroll from '../src/components/organisms/o-03-11-sticky-scroll/index.ce.vue'
import O0501ContentSlider from '../src/components/organisms/o-05-01-content-slider.ce.vue'
import O0609MediaHotspot from '../src/components/organisms/o-06-09-media-hotspot/index.ce.vue'
import O0607KpiFullscreen from '../src/components/organisms/o-06-07-kpi-fullscreen/index.ce.vue'
import O0502NewsSlider from '../src/components/organisms/o-05-02-news-slider.ce.vue'

const FullscreenMediaTextElement = defineCustomElement(
  O0304FullscreenMediaText,
  { shadowRoot: false }
)

const O0312MultiMediaTextElement = defineCustomElement(O0312MultiMediaText, {
  shadowRoot: false
})

const O0311StickyScrollElement = defineCustomElement(O0311StickyScroll, {
  shadowRoot: false
})

const O0501ContentSliderElement = defineCustomElement(O0501ContentSlider, { shadowRoot: false })

const O0609MediaHotspotElement = defineCustomElement(O0609MediaHotspot, {
  shadowRoot: false
})
const O0607KpiFullscreenElement = defineCustomElement(O0607KpiFullscreen, {
  shadowRoot: false
})
const O0502NewsSliderElement = defineCustomElement(O0502NewsSlider, { shadowRoot: false })

export {
  O0304FullscreenMediaText,
  O0312MultiMediaText,
  O0311StickyScroll,
  O0501ContentSlider,
  O0609MediaHotspot,
  O0607KpiFullscreen,
  O0502NewsSlider
}

export function register() {
  customElements.define('fullscreen-media-text', FullscreenMediaTextElement)
  customElements.define('o-03-12-multi-media-text', O0312MultiMediaTextElement)
  customElements.define('o-03-11-sticky-scroll', O0311StickyScrollElement)
  customElements.define('o-05-01-content-slider', O0501ContentSliderElement)
  customElements.define('o-06-09-media-hotspot', O0609MediaHotspotElement)
  customElements.define('o-06-07-kpi-fullscreen', O0607KpiFullscreenElement)
  customElements.define('o-05-02-news-slider', O0502NewsSliderElement)
}
