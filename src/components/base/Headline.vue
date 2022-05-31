<template>
  <component
    :is="headlineTag"
    class="font-semibold font-primary min-h-safari"
    :class="[$_headlineStyle, $_headlineColor]"
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
  layout: {
    type: Number,
    default: 1
  },
  color: {
    type: String,
    default: 'dark'
  }
})

const headlineTag = computed(() => props.tag || `h${props.layout}`)

const $_headlineStyle = computed(() => ({
  'text-h1': props.layout === 1,
  'text-h2': props.layout === 2,
  'text-h3': props.layout === 3,
  'text-h4': props.layout === 4,
  'text-h5': props.layout === 5,
  'text-h6': props.layout === 6
}))

const $_headlineColor = computed(() => ({
  'text-primary': props.color === 'dark',
  'text-sand': props.color === 'light',
  'text-secondary': props.color === 'turqoise'
}))
</script>
