import { defineCustomElement } from './localApiCustomElement'

import O0204IntroHero from '../src/components/organisms/o-02-04-IntroHero.ce.vue'

const O0204IntroHeroElement = defineCustomElement(O0204IntroHero)

export { O0204IntroHeroElement }

export function register() {
  customElements.define('o-02-04-intro-hero', O0204IntroHeroElement)
}
