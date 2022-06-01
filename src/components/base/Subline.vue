<template>
  <div :class="$_textStyle">
    <BaseHtmlParser tag="div" :content="text" />
  </div>
</template>

<script>
import { ref } from 'vue'
import BaseHtmlParser from './HtmlParser.vue'
export default {
  components: { BaseHtmlParser },
  props: {
    text: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 1
    }
  },
  computed: {
    $_textStyle() {
      return {
        'text-body1-mobile lg:text-body1': this.size === 1,
        'text-body2-mobile lg:text-body2': this.size === 2,
        'text-body3-mobile lg:text-body3': this.size === 3
      }
    }
  }
}
</script>
