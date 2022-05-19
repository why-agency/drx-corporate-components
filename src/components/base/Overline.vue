<template>
  <component :is="overlineTag" class="font-secondary" :class="$_textStyle">
    <slot>
      <BaseHtmlParser tag="div" :content="text" />
    </slot>
  </component>
</template>

<script setup>
import { computed } from 'vue'
import BaseHtmlParser from './HtmlParser.vue'
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  layout: {
    type: Number,
    default: 1
  },
  tag: {
    type: String,
    default: 'div'
  }
})

const $_textStyle = computed(() => ({
  'font-secondary text-overline1-mobile md:text-overline1 font-medium uppercase':
    props.layout === 1,
  'font-secondary md:text-overline2 font-medium uppercase': props.layout === 2,
  'font-secondary md:text-overline3 font-medium uppercase': props.layout === 3
}))

const overlineTag = computed(() => props.tag || `h${props.layout}`)
</script>
