<template>
  <div class="basis-0 space-y-3">
    <div class="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-3">
      <BaseText
        v-if="name"
        :text="name"
        size="text-body2"
        :class="color"
        class="font-bold max-w-[50%] lg:w-[160px]"
      />
      <div class="flex flex-row space-x-3">
        <BaseHeadline
          v-if="value"
          :text="value"
          :class="valueColor"
          :size="1"
          class="font-normal"
        />
        <BaseText
          v-if="unit"
          :text="unit"
          size="text-body2"
          :class="color"
          :animateOpacity="0.5"
          class="max-w-[72px]"
        />
      </div>
    </div>
    <BaseText
      v-if="description"
      :text="description"
      size="text-body3"
      :class="[color]"
    />
  </div>
</template>

<script setup>
import BaseHeadline from '../../base/Headline.vue'
import BaseText from '../../base/Text.vue'
import { ref, onMounted, computed, watch } from 'vue'
import { useElementSize } from '@vueuse/core'

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
  },
  valueColor: {
    type: String,
    default: 'text-primary'
  }
})
</script>
