<template>
  <BaseHeadline
    ref="splittext"
    v-if="quote && quote.text"
    v-bind="quote"
    :size="4"
    class="font-normal w-full lg:max-w-[616px] lg:ml-auto"
    :class="[textColor, isHeadline ? 'pt-20' : 'pt-[312px]']"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BaseHeadline from '../../base/Headline.vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

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

onMounted(() => {
  const splittext = ref(null)
  console.log(splittext.value)

  const animateText = () => {
    const splitText = new SplitText(splittext.value, {
      type: 'words, chars'
    })
    const chars = splitText.chars

    const tl = gsap.timeline({ defaults: { opacity: 0 } })
    if (chars) {
      tl.from(chars, {
        y: -50,
        duration: 0.5,
        stagger: 0.12
      })
    }
  }

  animateText()
})
</script>
