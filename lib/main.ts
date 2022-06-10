import { defineCustomElement } from './localApiCustomElement'

import O0304FullscreenMediaText from '../src/components/organisms/o-03-04-fullscreen-media-text.ce.vue'
import O0312MultiMediaText from '../src/components/organisms/o-03-12-multi-media-text.ce.vue'
import O0311StickyScroll from '../src/components/organisms/o-03-11-sticky-scroll.ce.vue'

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

export {
  O9902Quote,
  O0304FullscreenMediaText,
  O0312MultiMediaText,
  O0311StickyScroll
}

export function register() {
  customElements.define('fullscreen-media-text', FullscreenMediaTextElement)
  customElements.define('o-03-12-multi-media-text', O0312MultiMediaTextElement)
  customElements.define('o-03-11-sticky-scroll', O0311StickyScrollElement)
}
