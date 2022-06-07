<template>
  <section>
    <div
      :class="backgroundLeft"
      class="w-5/12 h-screen left-0 top-0 bg-opacity-10"
    >
      <BaseHeadline
        v-if="headline && headline.text"
        v-bind="headline"
        class="max-w-[512px] pt-[150px] pl-20"
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

const backgroundLeft = computed(
  () =>
    props?.data?.content?.box_background === 'yes' ? 'bg-sand' : 'bg-none'
)

const headline = computed(() => ({
  ...props.data?.content?.header,
  color:
    props?.data?.content?.background === 'dark' ||
    props?.data?.content?.background === 'gradient'
      ? 'light'
      : 'dark'
}))
</script>
