<template>
  <section>
    <div :class="backgroundLeft" class="w-[654px] h-[936] left-0 top-0 bg-opacity-10">
      <BaseHeadline
        v-if="headline && headline.text"
        v-bind="headline"
        class="mb-6 lg:mb-8 "
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import BaseHeadline from '../base/Headline.vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const backgroundLeft = computed(() => ({
    color: props?.data?.content?.background === "yes" ? "bg-sand" : "bg-none"
}))

const headline = computed(() => ({
  ...props.data?.content?.header,
  color: props?.data?.content?.background_color === 'dark' || props?.data?.content?.background_color === 'gradient' ? 'sand' : "primary"
}))
</script>
