import { defineCustomElement } from './localApiCustomElement'

import O9902Quote from '../src/components/organisms/o-99-02-quote.ce.vue'
import O0304FullscreenMediaText from '../src/components/organisms/o-03-04-fullscreen-media-text.ce.vue'

const O9902QuoteElement = defineCustomElement(O9902Quote, { shadowRoot: false })
const FullscreenMediaTextElement = defineCustomElement(
  O0304FullscreenMediaText,
  { shadowRoot: false }
)

export { O9902Quote, O0304FullscreenMediaText }

export function register() {
  customElements.define('o-99-02-quote', O9902QuoteElement)
  customElements.define('fullscreen-media-text', FullscreenMediaTextElement)
}
