<template>
  <BaseAction color="tertiary" @click="showOverlay">
    {{ triggerText }}
    <template #icon>
      <IconExpand />
    </template>
  </BaseAction>
</template>

<script setup>
import BaseAction from '../../base/Action.vue'
import IconExpand from '../../icons/Expand.vue'
import { useUiStore } from '../../../stores/ui.js'
import { defineProps } from 'vue'

const props = defineProps({
  overlay: {
    type: Array,
    default: null
  }
})

const triggerText = 'Learn more'

const ui = useUiStore()
const showOverlay = () => ui.setOverlay(props.overlay)
</script>
