<template>
  <div>
    <button
      ref="wrapper"
      :class="[textSize, $_textColor]"
      class="flex space-x-2 hover:text-secondary font-bold my-auto items-end"
      @click="$emit('clicked'), toggle()"
    >
      <BaseHtmlParser :content="text" tag="span" />
      <div ref="icon">
        <IconChevronUp v-if="!clickedButton && !isXl" />
        <IconChevronDown v-if="clickedButton || isXl" />
      </div>
    </button>
    <div v-if="clickedButton"><slot /></div>
  </div>
</template>

<script setup>
import {
  onClickOutside,
  useBreakpoints,
  breakpointsTailwind
} from '@vueuse/core'
import { ref, computed, onMounted, toRefs } from 'vue'
import BaseAction from '../base/Action.vue'
import BaseHtmlParser from '../base/HtmlParser.vue'
import IconChevronUp from '../icons/ChevronUp.vue'
import IconChevronDown from '../icons/ChevronDown.vue'
import UseDynamicAction from '../organisms/UseDynamicAction.vue'
import { useNav } from '../../stores/nav'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  textSize: {
    type: String,
    default: 'text-body1'
  },
  color: {
    type: String,
    default: 'text-primary'
  },
  link: {
    type: String,
    default: ''
  }
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isXl = breakpoints.greater('xl')

const navStore = useNav()
const activeCategory = computed(() => navStore.activeCategory)

const isActive = computed(
  () =>
    activeCategory.value?.link === props.link &&
    activeCategory.value?.title === props.text
)

const $_textColor = computed(() => ({
  'text-secondary': isActive.value
}))

const clickedButton = ref(false)
const wrapper = ref(null)

function toggle() {
  clickedButton.value = !!navStore.activeCategory
}

onClickOutside(wrapper, () => (clickedButton.value = false))
</script>
