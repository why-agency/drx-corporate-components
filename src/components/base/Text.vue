<template>
  <div
    class="antialiased transform translate-y-4 opacity-0"
    :class="size"
    ref="body"
  >
    <BaseHtmlParser tag="div" :content="text" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import BaseHtmlParser from './HtmlParser.vue'
import { gsap, Power2 } from 'gsap'
import { useIntersectionObserver } from '../../composables/useIntersectionObserver'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  size: {
    type: Number,
    default: 'text-body1'
  }
})

const body = ref(0)

const isVisible = useIntersectionObserver({ target: body })

watch(isVisible, isVisible => {
  if (isVisible) {
    gsap.to(body.value, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power2.easeOut
    })
  }
})
</script>
