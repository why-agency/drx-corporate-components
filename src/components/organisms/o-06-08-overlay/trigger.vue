<template>
  <BaseAction color="tertiary" @click="$emit('show-overlay')">
    {{ triggerText }}
    <template #icon>
      <IconExpand />
    </template>
  </BaseAction>
</template>

<script setup>
import BaseAction from '../../base/Action.vue'
import IconExpand from '../../icons/Expand.vue'

const props = defineProps({
  overlay: {
    type: Array,
    default: null
  }
})

const triggerText = 'Learn more'
</script>
