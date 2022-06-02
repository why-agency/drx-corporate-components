<template>
  <component
    ref="headline"
    :is="headlineTag"
    class="font-primary"
    :class="[$_headlineSize, $_headlineColor]"
  >
    <slot>
      <BaseHtmlParser tag="span" :content="text" />
    </slot>
  </component>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import BaseHtmlParser from './HtmlParser.vue'
import { gsap } from 'gsap'
import { useIntersectionObserver } from '../../composables/useIntersectionObserver'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  tag: {
    type: String,
    default: 'div'
  },
  size: {
    type: Number,
    default: 1
  },
  color: {
    type: String,
    default: 'dark'
  },
  fontWeight: {
    type: String,
    default: 'font-bold'
  }
})

const headlineTag = computed(() => props.tag || `h${props.size}`)

const $_headlineSize = computed(() => ({
  'text-h1': props.size === 1,
  'text-h2': props.size === 2,
  'text-h3': props.size === 3,
  'text-h4': props.size === 4,
  'text-h5': props.size === 5,
  'text-h6': props.size === 6
}))

const $_headlineColor = computed(() => ({
  'text-primary': props.color === 'dark',
  'text-sand': props.color === 'light',
  'text-secondary': props.color === 'turqoise'
}))

const headline = ref(0)
console.log(gsap)

const isVisible = useIntersectionObserver({ target: headline })

watch(isVisible, isVisible => {
  if (isVisible) {
    gsap.to(headline.value, {
      lineHeight: '3',
      duration: 2
    })
  }
})
</script>
