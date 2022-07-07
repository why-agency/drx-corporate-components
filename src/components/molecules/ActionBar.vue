<template>
  <div
    v-if="actions.length > 0 || hasSlot"
    class="flex flex-col gap-4 md:gap-y-4 md:gap-x-8 md:flex-wrap"
    :class="[$_position, { 'md:flex-row': !stack }]"
  >
    <slot />
    <BaseAction
      v-for="action in actions"
      :key="action.id"
      :to="action.content.link.url"
      :variant="variant ? variant : action.content.variant"
      :color="action.content.color"
      :size="action.content.size"
      :target="action.content.link.target"
    >
      <BaseHtmlParser :content="action.content.text" tag="span" />
      <template #icon>
        <IconArrowRight />
      </template>
    </BaseAction>
  </div>
</template>

<script setup>
import { useSlots, computed } from 'vue'

import BaseAction from '../base/Action.vue'
import BaseHtmlParser from '../base/HtmlParser.vue'
import IconArrowRight from '../icons/Arrow/Right.vue'

const props = defineProps({
  actions: {
    type: Array,
    default: () => []
  },
  position: {
    type: String,
    default: 'center'
  },
  variant: {
    type: String,
    default: ''
  },
  stack: {
    type: Boolean
  }
})

const $_position = computed(() => ({
  'items-start justify-start md:justify-start': props.position === 'left',
  'items-center md:justify-center': props.position === 'center',
  'items-end md:justify-end': props.position === 'right',
  'justify-between': props.position === 'between'
}))

const slots = useSlots()
const hasSlot = slots && !!slots.default
</script>
