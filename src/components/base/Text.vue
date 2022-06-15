<template>
  <div
    ref="body"
    :class="[$_size, { 'translate-y-4 opacity-0': animate }]"
    class="antialiased"
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
    type: String,
    default: 'text-body1'
  },
  animate: {
    type: Boolean,
    default: true
  }
})

const $_size = computed(() => ({
  'text-body1': props.size === 'text-body1',
  'text-body2': props.size === 'text-body2',
  'text-body3': props.size === 'text-body3'
}))

const body = ref(0)

const isVisible = useIntersectionObserver({ target: body })

watch(isVisible, isVisible => {
  if (isVisible && props.animate) {
    gsap.to(body.value, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power2.easeOut
    })
  }
})
</script>
