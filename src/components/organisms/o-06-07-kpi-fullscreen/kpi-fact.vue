<template>
  <div>
      <BaseText
          v-if="name"
          v-bind="name"
          size="text-body2"
          :class="color"
        />
      <BaseHeadline
          v-if="value"
          v-bind="value"
          :class="color"
          :size="1"
        />
      <BaseText
          v-if="unit"
          v-bind="unit"
          size="text-body2"
          :class="color"
        />
      <BaseText
          v-if="description"
          v-bind="description"
          size="text-body2"
          :class="color"
        />
  </div>
</template>

<script setup>
import BaseHeadline from '../../base/Headline.vue'
import BaseText from '../../base/Text.vue'

const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  value: {
      type: String,
      default: ''
  },
  unit: {
      type: String,
      default: ''
  },
  description: {
      type: String,
      default: ''
  },
  color: {
      type: String,
      default: 'text-primary'
  }
})
</script>
