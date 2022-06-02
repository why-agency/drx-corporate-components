<template>
  <component
    ref="headline"
    :is="headlineTag"
    class="font-primary min-h-safari"
    :class="[$_headlineSize, $_headlineColor, fontWeight]"
  >
    <slot>
      <BaseHtmlParser tag="span" :content="text" />
    </slot>
  </component>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import BaseHtmlParser from './HtmlParser.vue'
import { gsap, Power2 } from 'gsap'
import { useIntersectionObserver } from '../../composables/useIntersectionObserver'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

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

const startHeight = () => {
  if (props.size === 1 || props.size === 3) {
    return '130%'
  } else if (props.size === 2 && !isSm) {
    return '135%'
  } else if (props.size === 2 && isSm) {
    return '130%'
  } else if (props.size === 4 && !isSm) {
    return '140%'
  } else if (props.size === 4 && isSm) {
    return '120%'
  } else if (props.size === 5 && props.fontWeight !== 'font-bold' && !isSm) {
    return '165%'
  } else if (props.size === 5 && props.fontWeight === 'font-bold' && !isSm) {
    return '130%'
  } else if (props.size === 5 && isSm) {
    return '120%'
  }
}

const endHeight = () => {
  if (props.size === 1 || props.size === 3) {
    return '110%'
  } else if (props.size === 2 && !isSm) {
    return '115%'
  } else if (props.size === 2 && isSm) {
    return '110%'
  } else if (props.size === 4 && !isSm) {
    return '120%'
  } else if (props.size === 4 && isSm) {
    return '100%'
  } else if (props.size === 5 && props.fontWeight !== 'font-bold' && !isSm) {
    return '145%'
  } else if (props.size === 5 && props.fontWeight === 'font-bold' && !isSm) {
    return '110%'
  } else if (props.size === 5 && isSm) {
    return '100%'
  }
}

gsap.set(headline.value, { lineHeight: startHeight, y: '15px' })

watch(isVisible, isVisible => {
  if (isVisible) {
    gsap.fromTo(
      headline.value,
      {
        lineHeight: startHeight,
        y: '15px'
      },
      {
        lineHeight: endHeight,
        y: '0px',
        duration: 1,
        ease: Power2.easeOut
      }
    )
  }
})

/** breakpoints */
const breakpoints = useBreakpoints(breakpointsTailwind)
const isSm = breakpoints.greater('sm')
</script>
