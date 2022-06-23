<template>
  <BaseHeadline
    v-if="quote && quote.text"
    v-bind="quote"
    :size="4"
    class="font-normal w-full lg:max-w-[616px] lg:ml-auto"
    :class="[textColor, isHeadline ? 'pt-20' : 'pt-[312px]']"
  >
    <div ref="splittext">
      <component :is="tag" v-html="quote.text" class="html-parser" />
    </div>
  </BaseHeadline>
</template>

<script setup>
import { ref, onMounted, watch, onUpdated } from 'vue'
import BaseHeadline from '../../base/Headline.vue'
import BaseHtmlParser from '../../base/HtmlParser.vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(SplitText, ScrollTrigger)

const props = defineProps({
  quote: {
    type: Object,
    default: () => ({})
  },
  textColor: {
    type: String,
    default: ''
  },
  isHeadline: {
    type: String,
    default: ''
  }
})
const tag = 'span'

const splittext = ref(null)

watch(splittext, splittext => {
  const newSplit = splittext.innerHTML

  // console.log(splittext.parentElement.style.opacity)

  const animateText = () => {
    const splitText = new SplitText(splittext, {
      type: 'words, chars'
    })
    const chars = splitText.chars

    if (chars) {
      let i = 0
      let newColor = '#ff0004'
      function changeColor(i) {
        gsap.to(chars[i], { css: { color: newColor }})
      }
      const triggerParentElement = splittext.parentElement.parentElement.parentElement
      // console.log(triggerParentElement.offsetTop)
      // console.log(chars.length)
      // console.log('stop: ' + triggerParentElement.offsetTop + chars.length)
      // console.log(triggerParentElement.offsetTop + chars.length)
      const scroll = ScrollTrigger.create({
        trigger: triggerParentElement,
        // pin:true,
        start: 'top top',
        markers: true,
        onUpdate: self => {
          self.direction === 1
            ? (newColor = '#ff0004')
            : (newColor = '#ffffff'),
            changeColor(i),
            self.direction === 1
              ? ((i += 1), (newColor = '#ff0004'))
              : ((i -= 1), (newColor = '#ffffff')),
            console.log('scroll + ' + window.scrollY)
        }
      })
    }
  }

  animateText()
})
</script>
