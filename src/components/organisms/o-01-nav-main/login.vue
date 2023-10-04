<template>
  <UseDynamicAction
    :to="to"
    :target="data.target"
    ref="wrapper"
    :class="textSize"
    class="flex space-x-2 hover:text-secondary font-bold my-auto"
  >
    <div ref="icon" class="mt-[3%]">
      <IconUser :height="iconHeight" :width="iconWidth" />
    </div>
    <BaseHtmlParser :content="text" tag="span" />
  </UseDynamicAction>
</template>
<script setup>
import UseDynamicAction from '../../organisms/UseDynamicAction.vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { ref, computed, onMounted, toRefs } from 'vue'
import BaseHtmlParser from '../../base/HtmlParser.vue'
import IconUser from '../../icons/User.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  },
  text: {
    type: String,
    default: 'Login'
  },
  textSize: {
    type: String,
    default: 'text-body1'
  },
  iconHeight: {
    type: [Number, String],
    default: 24
  },
  iconWidth: {
    type: [Number, String],
    default: 24
  }
})

const to = props.data?.url
</script>
