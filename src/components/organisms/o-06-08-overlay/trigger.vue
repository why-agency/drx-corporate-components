<template>
  <BaseAction
    color="tertiary"
    class="text-left"
    @click="$emit('show-overlay')"
  >
    {{ triggerText }}
    <template #icon>
      <IconExpand />
    </template>
  </BaseAction>
</template>

<script setup>
import { computed } from 'vue'
import BaseAction from '../../base/Action.vue'
import IconExpand from '../../icons/Expand.vue'

const props = defineProps({
  overlay: {
    type: Array,
    default: null
  }
})

const triggerText = computed(() => props.overlay?.[0]?.content?.buttonText || 'Mehr erfahren')
</script>
