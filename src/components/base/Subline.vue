<template>
  <div class="uppercase" :class="$_textStyle">
    <BaseHtmlParser tag="div" :content="text" />
  </div>
</template>

<script>
import { ref } from "vue";
import BaseHtmlParser from "./HtmlParser.vue";
export default {
  components: { BaseHtmlParser },
  props: {
    text: {
      type: String,
      default: "",
    },
    layout: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    $_textStyle() {
      return {
        "text-body1-mobile lg:text-body1": this.layout === 1,
        "text-body2-mobile lg:text-body2": this.layout === 2,
        "text-body3-mobile lg:text-body3": this.layout === 3,
      };
    },
  }
};
</script>
