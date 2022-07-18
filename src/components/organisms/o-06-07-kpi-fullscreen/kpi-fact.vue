<template>
  <div class="basis-0 lg:basis-auto 2xl:basis-0 space-y-3">
    <div
      class="flex flex-col xl:flex-row space-y-3 lg:space-y-0 lg:space-x-0 xl:space-x-3"
    >
      <BaseText
        v-if="name"
        :text="name"
        size="text-body2"
        :class="color"
        class="font-bold max-w-[50%] xl:w-[160px]"
      />
      <div class="flex flex-row space-x-3">
        <BaseHeadline
          v-if="value"
          :text="value"
          :class="valueColor"
          :size="headlineSize"
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
      class="lg:w-80 xl:w-[376px] 2xl:w-[472px]"
      :class="[color]"
    />
  </div>
</template>

<script setup>
import BaseHeadline from '../../base/Headline.vue'
import BaseText from '../../base/Text.vue'
import { ref, onMounted, computed, watch } from 'vue'
import { useBreakpoints } from '@vueuse/core'

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

const breakpoints = useBreakpoints({ xl: 1280, '2xl': 1440 })
const isXl = breakpoints.greater('xl')
const is2xl = breakpoints.greater('2xl')
const headlineSize = computed(() => (isXl.value && !is2xl.value ? 2 : 1))
</script>
