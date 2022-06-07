<template>
  <div :class="$_textSize" ref="body">
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
    default: 1
  }
})

const $_textSize = computed(() => ({
  'text-body1-mobile lg:text-body1': props.size === 1,
  'text-body2-mobile lg:text-body2': props.size === 2,
  'text-body3-mobile lg:text-body3': props.size === 3
}))

const body = ref(0)

const isVisible = useIntersectionObserver({ target: body })

watch(isVisible, isVisible => {
  if (isVisible) {
    gsap.fromTo(
      body.value,
      {
        y: '15px',
        opacity: 0
      },
      {
        y: '0px',
        opacity: 1,
        duration: 1.5,
        ease: Power2.easeOut
      }
    )
  }
})
</script>
