<template>
  <div class="relative h-full w-full" :class="$_gradient">
    <slot name="picture">
      <BasePicture
        v-if="isImage"
        :images="media"
        :size="mediaStyle"
        :srcsets="srcsets"
        :breakpoints="breakpoints"
        :format="format"
        :fit="fit"
      />
    </slot>
    <div v-if="videoUrl" class="relative">
      <BaseVideo
        :src="videoUrl"
        v-bind="videoSettings"
        :class="[mediaStyle, aspectRatio]"
        class="object-cover"
      />
      <slot name="play-button">
        <BaseButtonIcon
          v-if="videoUrl && !videoSettings.autoplay"
          color="sand"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary z-20"
          @click="showLightbox"
        >
          <IconPlay />
        </BaseButtonIcon>
      </slot>
    </div>
    <!-- VIDEOSTREAM -->
    <div v-if="videoStream">
      <div v-if="isPlaceholderVisible" class="relative aspect-w-16 aspect-h-9">
        <div>
          <BasePicture
            v-if="placeholderImage"
            :image="placeholderImage"
            class="w-full h-full"
          />
          <BasePicture
            v-else
            :src="youtubeThumbnail || vimeoThumbnail"
            class="w-full h-full"
          />
          <slot name="play-button">
            <BaseButtonIcon
              v-if="videoUrl && !videoSettings.autoplay"
              color="sand"
              class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary z-20"
              @click="showLightbox"
            >
              <IconPlay />
            </BaseButtonIcon>
          </slot>
        </div>
      </div>
      <div v-if="!isPlaceholderVisible" class="aspect-w-16 aspect-h-9">
        <iframe
          class="w-full h-full"
          :name="video.video_title"
          :src="srcstream"
          v-bind="$attrs"
          allow="autoplay;fullscreen"
        />
      </div>
    </div>

    <slot />
    <BaseLightbox v-if="videoUrl && isLightboxVisible" @close="hideLightbox">
      <div class="flex justify-center w-full">
        <BaseVideo
          :src="videoUrl"
          autoplay
          muted
          controls
          class="w-full lg:object-cover"
        />
      </div>
    </BaseLightbox>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import BasePicture from '../base/Picture.vue'
import BaseVideo from '../base/Video.vue'
import BaseButtonIcon from '../base/ButtonIcon.vue'
import IconPlay from '../icons/Play.vue'
import BaseLightbox from '../base/Lightbox.vue'

const props = defineProps({
  media: {
    type: Array,
    required: true
  },
  mediaStyle: {
    type: String,
    default: 'w-full'
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
const videoStream = computed(() => mediaType.value === 'video-stream')

const $_gradient = computed(
  () =>
    props.gradient && [
      "before:block before:content-[''] before:h-full before:w-full before:absolute before:z-20 before:bg-gradient-to-b before:from-transparent ",
      {
        'before:via-black/40 before:to-black/75': props.gradient === 'dark',
        'before:via-white/40 before:to-white/75': props.gradient === 'light',
        [props.gradient]:
          props.gradient !== 'dark' && props.gradient !== 'light'
      }
    ]
)

/** Lightbox */
const isLightboxVisible = ref(false)
const showLightbox = () => (isLightboxVisible.value = true)
const hideLightbox = () => (isLightboxVisible.value = false)

const aspectRatio = computed(() => ({
  'aspect-[5/2]': props.format === '5:2',
  'aspect-[9/4]': props.format === '9:4',
  'aspect-[4/3]': props.format === '4:3'
}))

/** Video Stream */
const isPlaceholderVisible = true
const vimeoThumbnail = ''

const streamType = computed(
  () => props?.media?.[0]?.[0]?.properties?.videoservice
)
const isVimeo = computed(() => streamType.value === 'vimeo')
const url = computed(() =>
  isVimeo ? 'https://player.vimeo.com/video' : 'https://www.youtube.com/embed'
)
const srcstream = computed(() => {
  const {
    video_id: id,
    video_start: start,
    video_end: end
  } = props?.media?.[0]?.[0]?.properties
  return `${this.url}/${id}?autoplay=1&start=${start}&end=${end}`
})
const placeholderImage = computed(() => {
  if (props?.media?.[0]?.[0]?.properties?.video_poster_image) {
    return props?.media?.[0]?.[0]?.properties?.video_poster_image
  }
  return ''
})
const youtubeThumbnail = computed(() => {
  if(isVimeo){
    return ''
  } else {
    
  }
})
</script>
