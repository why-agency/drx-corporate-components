<template>
  <component
    ref="headline"
    :is="headlineTag"
    class="font-primary antialiased"
    :class="[
      $_headlineSize,
      $_headlineColor,
      fontWeight,
      { 'translate-y-4 opacity-0': animate }
    ]"
  >
    <slot>
      <BaseHtmlParser tag="span" :content="text" />
    </slot>
  </component>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import BaseHtmlParser from './HtmlParser.vue'
import { gsap, Power2 } from 'gsap'
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
  },
  animate: {
    type: Boolean,
    default: true
  }
})

const headlineTag = computed(() => props.tag || `h${props.size}`)

const $_headlineSize = computed(() => ({
  'text-h1 leading-[110%]': props.size === 1,
  'text-h2 leading-[110%] md:leading-[115%]': props.size === 2,
  'text-h3 leading-[110%]': props.size === 3,
  'text-h4 leading-[100%] md:leading-[120%]': props.size === 4,
  'text-h5 leading-[100%] md:leading-[145%]': props.size === 5,
  'uppercase leading-[100%] md:leading-[110%]':
    props.size === 5 && props.fontWeight === 'font-bold',
  'text-h6': props.size === 6
}))

const $_headlineColor = computed(() => ({
  'text-primary': props.color === 'dark',
  'text-sand': props.color === 'light',
  'text-secondary': props.color === 'turqoise' || props.color === 'turquoise'
}))

const headline = ref(0)

const isVisible = useIntersectionObserver({ target: headline })

watch(isVisible, isVisible => {
  if (isVisible && props.animate) {
    // @ts-ignore
    gsap.to(headline.value, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power2.easeOut
    })
  }
})
</script>
