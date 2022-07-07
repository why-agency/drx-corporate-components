<template>
  <section ref="target">
    <div class="bg-primary !px-6 pt-12 pb-12 lg:pl-[104px] lg:pb-6">
      <BaseHeadline
        v-if="headline && headline.text"
        v-bind="headline"
        class="w-full lg:max-w-[55%]"
      />
      <div class="w-full mt-12 lg:max-w-[568px] lg:ml-auto lg:mr-[104px]">
        <BaseText v-if="text && text.text" v-bind="text" class="text-white" />
        <MActionBar
          v-if="actions"
          :actions="actions"
          position="left"
          class="!mt-9"
        >
          <OverlayTrigger
            v-if="overlays && overlays.length"
            @show-overlay="isOverlayVisible = true"
          />
        </MActionBar>
      </div>
    </div>
    <div class="relative">
      <div @click="closeDetail" class="relative w-full">
        <BaseMedia
          v-if="mediaContent"
          :media="mediaContent"
          format="16:9"
          class="pointer-events-none"
        />
      </div>
      <!-- Hotspots -->
      <div v-if="hotspots && hotspots.length">
        <BaseButtonIcon
          v-for="spot in hotspots"
          :key="spot"
          variant="filled"
          color="gray"
          :size="isLg ? 'lg' : 'sm'"
          class="absolute"
          :style="hotspotPosition(spot.content.coordinates)"
          @click="showHotspotDetail(spot.content)"
        >
          <BasePicture
            :images="spot.content.icon"
            :size="$_picSize"
            class="h-auto w-auto"
          />
        </BaseButtonIcon>
      </div>
      <!-- Gradient -->
      <div
        class="bg-gradient-to-b from-primary w-full h-8 lg:h-28 absolute top-0"
      ></div>
    </div>
    <div ref="hotspotDetail" class="w-full lg:fixed z-10">
      <OHotspotDetail
        v-if="hotspotContentShow"
        :icon="hotspotContent.icon"
        :headline="hotspotContent.headline"
        :text="hotspotContent.text"
        :action="hotspotContent.actions"
        class="lg:opacity-90"
      />
    </div>
    <Overlay
      v-if="overlays && overlays.length && isOverlayVisible"
      :overlay="overlays"
      @hide-overlay="isOverlayVisible = false"
    />
  </section>
</template>

<script setup>
import { computed, onMounted, toRefs, ref, watch } from 'vue'
import BaseHeadline from '../../base/Headline.vue'
import BaseText from '../../base/Text.vue'
import BaseMedia from '../../base/Media.vue'
import BasePicture from '../../base/Picture.vue'
import BaseButtonIcon from '../../base/ButtonIcon.vue'
import MActionBar from '../../molecules/ActionBar.vue'
import OHotspotDetail from '../../organisms/o-06-09-media-hotspot/hotspot-detail.ce.vue'
import { useIntersectionObserver } from '@vueuse/core'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import {
  useBreakpoints,
  breakpointsTailwind,
  useElementVisibility,
  useElementSize
} from '@vueuse/core'
import OverlayTrigger from '../o-06-08-overlay/trigger.vue'
import Overlay from '../o-06-08-overlay/index.vue'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
const {
  header: headline,
  text,
  media,
  actions,
  hotspots
} = toRefs(props.data.content)

const mediaContent = media.value?.videos_stream?.[0]
  ? { type: 'video-stream', video_stream: media.value?.videos_stream }
  : media.value?.image

const $_picSize = computed(() => `${isLg.value ? ' h-6' : ' h-4'}`)

function hotspotPosition(coordinates) {
  const coor = coordinates.split(';')
  return { left: coor[0] + '%', top: coor[1] + '%' }
}
const hotspotContentShow = ref(false)
const hotspotContent = ref({})
const hotspotDetail = ref(null)
const hotspotIsOpen = ref(false)

gsap.registerPlugin(ScrollToPlugin)

const { height } = useElementSize(hotspotDetail)

function showHotspotDetail(content) {
  if (hotspotIsOpen.value && hotspotContent.value === content) {
    closeDetail()
  }
  hotspotContent.value = content
  if (!hotspotContentShow.value && !hotspotIsOpen.value) {
    hotspotContentShow.value = true
    if (isLg.value) {
      slideDetailUp(content)
    } else {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: hotspotDetail.value, offsetY: 500 }
      })
    }
  }
}

function slideDetailUp(content) {
  const interval = setInterval(() => {
    if (height.value) {
      clearInterval(interval)
      gsap.set(hotspotDetail.value, { bottom: -height.value })
      gsap.to(hotspotDetail.value, {
        y: -height.value,
        duration: 1,
        ease: 'power3.out',
        onComplete: function () {
          hotspotIsOpen.value = true
        }
      })
    }
  })
}

async function closeDetail() {
  if (hotspotContentShow.value) {
    if (isLg.value) {
      await gsap.to(hotspotDetail.value, {
        y: 0,
        duration: 1,
        ease: 'power1.in',
        onComplete: function () {
          hotspotIsOpen.value = false
        }
      })
    }
    hotspotContentShow.value = false
  }
}

//hide hotspot detail if module is no longer visible
const target = ref(null)
const { stop } = useIntersectionObserver(
  target,
  () => {
    if (hotspotContentShow.value) {
      closeDetail()
    }
  },
  {
    rootMargin: '0px 0px -15% 0px',
    threshold: 0.5
  }
)
watch(isLg, isLg => {
  if (!isLg) {
    hotspotIsOpen.value = false
    hotspotContentShow.value = false
  }
})

/** overlay */
const isOverlayVisible = ref(false)
const overlays = ref(props.data?.content?.overlays)
</script>
