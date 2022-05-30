<template>
  <div class="w-screen h-screen">
    <div
      class="before:block before:content-[\'\'] before:w-full before:h-screen before:absolute before:z-20 before:bg-gradient-to-b before:from-transparent before:via-black/30 before:to-black/75"
    >
      <BasePicture
        v-if="image"
        :images="image"
        size="w-full h-screen"
        class="absolute"
      />
      <BaseVideo
        v-if="video"
        :src="video"
        autoplay
        loop
        class="w-full h-screen absolute"
      />
    </div>
    <div
      class="frame-default grid lg:grid-cols-2 lg:grid-rows-1 h-full content-end relative z-30 text-white pb-10 lg:pb-20"
    >
      <div class="lg:self-center">
        <BaseHeadline
          v-if="headline && headline.text"
          v-bind="headline"
          class="mb-6 lg:mb-8"
        />
        <MActionBar v-if="action" :actions="[action]" position="left" />
      </div>
      <BaseSubline
        v-if="bodytext.text"
        v-bind="bodytext"
        class="mt-10 lg:self-end"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAction } from '../../composables/useAction'
import BasePicture from '../base/Picture.vue'
import BaseVideo from '../base/Video.vue'
import BaseHeadline from '../base/Headline.vue'
import BaseSubline from '../base/Subline.vue'
import MActionBar from '../molecules/ActionBar.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const headline = ref(props.data?.content?.header)

const bodytext = computed(() => ({
  text: props.data?.content?.bodytext,
  layout: 2
}))

const action = computed(
  () =>
    props?.data?.content?.actions?.buttonlink &&
    useAction(props?.data?.content?.actions)
)

const mediaType = computed(
  () => props?.data?.content?.media?.[0]?.[0]?.properties?.type
)
const image = computed(
  () => mediaType.value === 'image' && props?.data?.content?.media
)
const video = computed(
  () =>
    mediaType.value === 'video' &&
    props?.data?.content?.media?.[0]?.[0]?.publicUrl
)
</script>
