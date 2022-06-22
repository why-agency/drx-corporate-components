<template>
  <div class="w-screen h-screen">
    <BaseMedia
      v-if="media"
      :media="media"
      media-style="w-full h-screen absolute"
      gradient="dark"
      full-screen
      class="!absolute !h-screen"
    />
    <div
      class="frame-content-default grid lg:grid-cols-2 lg:grid-rows-1 h-full content-end relative z-30 text-white pb-10 lg:pb-20"
    >
      <div class="lg:self-center">
        <BaseHeadline
          v-if="headline && headline.text"
          v-bind="headline"
          class="mb-6 lg:mb-8"
        />
        <MActionBar v-if="action" :actions="[action]" position="left" />
      </div>
      <BaseText
        v-if="bodytext.text"
        v-bind="bodytext"
        class="mt-10 lg:self-end"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseMedia from '../base/Media.vue'
import BaseHeadline from '../base/Headline.vue'
import BaseText from '../base/Text.vue'
import MActionBar from '../molecules/ActionBar.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const headline = computed(() => ({
  ...props.data?.content?.header,
  color: 'light'
}))

const bodytext = computed(() => ({
  text: props.data?.content?.bodytext,
  size: 'text-body2'
}))

const action = ref(props.data?.content?.actions)

const media = ref(props.data?.content?.media)
</script>
