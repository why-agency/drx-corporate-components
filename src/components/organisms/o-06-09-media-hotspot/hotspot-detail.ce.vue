<template>
  <div
    class="px-6 pt-10 space-y-6 xl:px-0 lg:grid lg:grid-cols-[48px,20%,40%,250px] 3xl:grid-cols-[48px,296px,704px,250px] lg:gap-x-7 2xl:gap-x-12 lg:space-y-0 lg:pt-6 xl:pt-10 2xl:pt-16 pb-12 w-full bg-primary opacity-100 justify-center"
  >
    <BaseButtonIcon
      v-if="icon"
      class="hover:bg-gray-700 active:bg-gray-700"
      color="gray"
      size="lg"
    >
      <BasePicture :images="icon" size="h-6" class="w-auto" />
    </BaseButtonIcon>
    <BaseHeadline
      v-if="headline && headline.text"
      v-bind="headline"
      :animate="!isLg"
    />
    <BaseText
      v-if="text && text.text"
      class="text-sand"
      v-bind="text"
      :animate="!isLg"
    />
    <MActionBar v-if="action" :actions="action" position="left" />
  </div>
</template>
<script setup>
import BaseHeadline from '../../base/Headline.vue'
import BaseAction from '../../base/Action.vue'
import BasePicture from '../../base/Picture.vue'
import BaseText from '../../base/Text.vue'
import BaseButtonIcon from '../../base/ButtonIcon.vue'
import MActionBar from '../../molecules/ActionBar.vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')

const props = defineProps({
  icon: {
    type: Object,
    default: () => ({})
  },
  headline: {
    type: Object,
    default: () => ({})
  },
  text: {
    type: Object,
    default: () => ({})
  },
  action: {
    type: Object,
    default: () => ({})
  }
})
</script>
