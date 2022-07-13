<template>
  <div>
    <button
      ref="wrapper"
      :class="[textSize, $_textColor]"
      class="flex space-x-2 hover:text-secondary text-primary font-bold my-auto items-end"
      @click="$emit('clicked'), toggle()"
    >
      <BaseHtmlParser :content="text" tag="span" />
      <div ref="icon">
        <IconChevronUp v-if="!clickedButton" />
        <IconChevronDown v-else />
      </div>
    </button>
    <div v-if="clickedButton"><slot /></div>
  </div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
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
  }
})

const $_textColor = computed(() => ({
  [props.color]: !props.clicked,
  'text-secondary': props.clicked
}))

const navStore = useNav()
const clickedButton = ref(false)
const wrapper = ref(null)

function toggle() {
  clickedButton.value = navStore.clicked
}

onClickOutside(wrapper, () => (clickedButton.value = false))
</script>
