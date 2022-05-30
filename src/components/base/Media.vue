<template>
  <div :class="$_gradient">
    <BasePicture
      v-if="isImage"
      :images="media"
      :size="mediaStyle"
      :srcsets="srcsets"
      :breakpoints="breakpoints"
      :format="format"
      :fit="fit"
    />
    <BaseVideo
      v-if="videoUrl"
      :src="videoUrl"
      v-bind="videoSettings"
      :class="mediaStyle"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BasePicture from '../base/Picture.vue'
import BaseVideo from '../base/Video.vue'
const props = defineProps({
  media: {
    type: Array,
    required: true
  },
  mediaStyle: {
    type: String,
    default: 'w-full h-full'
  },
  srcsets: {
    type: Object,
    default: () => ({
      mobileSrc: ['?tr=w-375 375w', '?tr=w-640 640w'],
      tabletSrc: ['?tr=w-768 768w'],
      desktopSrc: [
        '?tr=w-1024 1024w',
        '?tr=w-1280 1280w',
        '?tr=w-1536 1536w',
        '?tr=w-1920 1920w'
      ]
    })
  },
  breakpoints: {
    type: Object,
    default: () => ({
      tablet: 768,
      desktop: 1024
    })
  },
  format: {
    type: String,
    default: undefined
  },
  fit: {
    type: String,
    default: 'object-cover'
  },
  videoSettings: {
    type: Object,
    default: () => ({
      autoplay: true,
      loop: true,
      muted: true
    })
  },
  gradient: {
    type: String,
    default: ''
  }
})
const mediaType = computed(() => props?.media?.[0]?.[0]?.properties?.type)
const isImage = computed(() => mediaType.value === 'image')
const videoUrl = computed(
  () => mediaType.value === 'video' && props?.media?.[0]?.[0]?.publicUrl
)
const overlay =
  "before:block before:content-[''] before:w-full before:absolute before:z-20"
const $_gradient = computed(
  () => props.gradient && `${overlay} ${props.gradient}`
)
</script>
