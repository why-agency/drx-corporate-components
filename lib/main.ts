import { defineCustomElement } from './localApiCustomElement'

import O9902Quote from '../src/components/organisms/o-99-02-quote.ce.vue'

const O9902QuoteElement  = defineCustomElement(O9902Quote, { shadowRoot: false })

export { O9902Quote }

export function register() {
  customElements.define('o-99-02-quote', O9902QuoteElement)
}
