<template>
  <button
    :class="['flex items-center px-3 py-2 text-body3', $_color]"
    @click="$emit('click')"
  >
    <slot>
      {{ label }}
    </slot>
    <IconClose class="w-4 h-4 ml-2" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import IconClose from '../icons/Close.vue'

const props = defineProps({
  label: String,
  color: {
    type: String,
    default: 'sand'
  }
})

const emit = defineEmits(['click'])

const $_color = computed(() => ({
  'bg-sand': props.color === 'sand',
  'bg-white border border-sand': props.color === 'white'
}))
</script>
