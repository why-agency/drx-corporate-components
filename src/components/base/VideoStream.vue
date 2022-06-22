<template>
  <div class="overflow-hidden h-full">
    <div v-if="isPlaceholderVisible && !hasAutoplay" class="h-full">
      <BasePicture
        v-if="placeholderImage"
        :images="placeholderImage"
        class="h-full relative w-full object-cover"
      />
      <img
        v-else
        :src="youtubeThumbnail || vimeoThumbnail"
        class="h-full relative w-full object-cover"
      />
      <slot name="play-button">
        <BaseButtonIcon
          v-if="!streamSettings.autoplay"
          color="sand"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary z-40"
          @click="$emit('play-button-clicked')"
        >
          <IconPlay />
        </BaseButtonIcon>
      </slot>
    </div>
  </div>
  <div v-if="!isPlaceholderVisible" class="relative w-full h-full">
    <iframe
      v-if="!isPlaceholderVisible || hasAutoplay"
      class="relative w-full h-full"
      :name="videoName"
      :src="srcStream"
      allow="fullscreen;autoplay"
      :class="{
        'w-screen h-[56.25vw] min-h-screen min-w-[177.77vh] !absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2':
          fullScreen
      }"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BasePicture from '../base/Picture.vue'
import BaseButtonIcon from '../base/ButtonIcon.vue'
import IconPlay from '../icons/Play.vue'

const props = defineProps({
  media: {
    type: [Array, Object],
    required: true
  },
  streamSettings: {
    type: Object,
    default: () => ({
      autoplay: false,
      loop: false,
      muted: false
    })
  },
  fullScreen: {
    type: Boolean,
    default: false
  }
})

/** Video Stream */
const isPlaceholderVisible = ref(true)
const hasAutoplay = computed(() => props.streamSettings.autoplay)

const vimeoThumbnail = ref('')

const streamType = computed(
  () => props?.media?.video_stream?.[0].properties?.videoservice
)
const videoName = computed(
  () => props?.media?.video_stream?.[0].properties?.video_title
)
const isVimeo = computed(() => streamType.value === 'vimeo')
const url = computed(() =>
  isVimeo.value
    ? 'https://player.vimeo.com/video'
    : 'https://www.youtube.com/embed'
)

const id = ref(props?.media.video_stream?.[0].properties.video_id)
const start = ref(props?.media.video_stream?.[0].properties?.video_start)
const end = ref(props?.media.video_stream?.[0].properties?.video_end)
const srcStream = computed(() => {
  return `${url.value}/${id.value}?autoplay=1&start=${start.value}&end=${end.value}`
})
const placeholderImage = computed(() => {
  if (props?.media?.video_stream?.[0].properties?.video_poster_image) {
    return props?.media?.video_stream?.[0].properties?.video_poster_image
  }
  return ''
})
const youtubeThumbnail = computed(() => {
  if (isVimeo.value) {
    return ''
  } else {
    const hasParams = id.value.includes('?')
    return `https://img.youtube.com/vi/${
      hasParams ? id.value.slice(0, id.indexOf('?')) : id
    }/maxresdefault.jpg`
  }
})
onMounted(() => {
  if (isVimeo.value) {
    const url = `https://vimeo.com/api/v2/video/${id.value}.json`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        vimeoThumbnail.value = data[0].thumbnail_large
      })
  }
})

function playVideo() {
  isPlaceholderVisible.value = false
}
</script>
