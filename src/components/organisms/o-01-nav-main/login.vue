<template>
  <button
    ref="wrapper"
    :class="[textSize, $_textColor]"
    class="flex space-x-2 hover:text-secondary text-primary font-bold my-auto"
    @click="clicked = !clicked"
  >
    <div ref="icon" class="mt-[3%]">
      <IconUser />
    </div>
    <BaseHtmlParser :content="text" tag="span" />
  </button>
</template>
<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { ref, computed, onMounted, toRefs } from 'vue'
import BaseHtmlParser from '../../base/HtmlParser.vue'
import IconUser from '../../icons/User.vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  textSize:{
      type: String,
      default: 'text-body1'
  }
})

const clicked = ref(false)

const $_textColor = computed(() => ({
    'text-primary': !clicked.value,
    'text-secondary': clicked.value
}))

</script>
