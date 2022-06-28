<template>
    <div class=" px-6 lg:px-0 lg:flex space-y-6 lg:space-y-0 lg:space-x-12 pt-10 lg:pt-16 pb-12 w-full h-content lg:h-52 bg-primary opacity-100 justify-center">
        <BaseButtonIcon variant="filled" class="hover:bg-gray-700 active:bg-gray-700" color="gray" size="lg"><BasePicture :images="icon" size="w-content h-6 mx-auto mt-[25%]" class="h-full"/></BaseButtonIcon>
        <BaseHeadline v-bind="headline" :animate="false"/>
        <BaseText class="text-sand max-w-[600px]" v-bind="text" :animate="false"/>
        <MActionBar
          v-if="action"
          :actions="action"
          position="left"
        />
    </div>
</template>
<script setup>
import BaseHeadline from '../../base/Headline.vue'
import BaseAction from '../../base/Action.vue'
import BasePicture from '../../base/Picture.vue'
import BaseText from '../../base/Text.vue'
import BaseButtonIcon from '../../base/ButtonIcon.vue'
import MActionBar from '../../molecules/ActionBar.vue'
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