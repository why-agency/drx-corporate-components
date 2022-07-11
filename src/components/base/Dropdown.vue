<template>
    <button
      ref="wrapper"
      :class="[textSize, $_textColor]"
      class="flex space-x-2 hover:text-secondary text-primary font-bold my-auto"
      @click="clicked = !clicked"
    >
        <BaseHtmlParser :content="text" tag="span"/>
        <div
          ref="icon"
          class="mt-[3%]"
        >
          <IconChevronUp v-if="!clicked"/>
          <IconChevronDown v-else/>
        </div>
    </button>
    <div v-if="clicked"><slot /></div>
</template>

<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { ref, computed, onMounted, toRefs } from 'vue'
import BaseAction from '../base/Action.vue'
import BaseHtmlParser from '../base/HtmlParser.vue'
import IconChevronUp from '../icons/ChevronUp.vue'
import IconChevronDown from '../icons/ChevronDown.vue'
import UseDynamicAction from '../organisms/UseDynamicAction.vue'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  textSize:{
      type: String,
      default: 'text-body1'
  },
  options: {
    type: Array,
    required: true
  }
})

const clicked = ref(false)

const $_textColor = computed(() => ({
    'text-primary': !clicked.value,
    'text-secondary': clicked.value
}))

</script>
