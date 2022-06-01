<template>
  <component
    :is="headlineTag"
    class="font-primary"
    :class="[$_headlineSize, $_headlineColor, $_headlineWeight]"
  >
    <slot>
      <BaseHtmlParser tag="span" :content="text" />
    </slot>
  </component>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseHtmlParser from './HtmlParser.vue'

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

const $_headlineWeight = computed(() => ({
  'font-normal': props.weight === 'regular',
  'font-bold': props.weight === 'bold'
}))
</script>
