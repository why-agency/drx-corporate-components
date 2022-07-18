<template>
  <section ref="container" class="bg-primary py-8 lg:pb-10 -mt-2.5 lg_old:-mt-[170px]">
    <div
      v-if="header && header.text"
      :style="{ marginLeft: spacingX }"
      class="mb-10 xl:mb-16"
    >
      <BaseHeadline :text="header.text" :size="2" color="light" />
      <BaseHeadline
        v-if="header && header.additionalText"
        :text="header.additionalText"
        :size="2"
        color="light"
      />
    </div>
    <MCarousel
      v-bind="settings"
      @change="onChange"
      :style="{ marginLeft: spacingX }"
    >
      <MCard
        v-for="(card, index) in cards"
        :key="card.id"
        v-bind="card"
        :is-active="currentSlide === index"
      />
      <template #bullets="{ go, slidesCount }">
        <CarouselBullets
          :slides="slidesCount"
          :current-slide="currentSlide"
          :with-slide-list="withSlideList"
          @slide-updated="go"
        />
      </template>
      <template #controls="{ go }">
        <CarouselControls
          class="justify-end translate-y-4"
          :style="{ marginRight: spacingX }"
          :go="go"
        />
      </template>
    </MCarousel>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  useBreakpoints,
  breakpointsTailwind,
  useElementSize
} from '@vueuse/core'
import BaseText from '../base/Text.vue'
import MActionBar from '../molecules/ActionBar.vue'
import MCarousel from '../molecules/Carousel.vue'
import MCard from '../molecules/Card.vue'
import CarouselControls from '../molecules/CarouselControls.vue'
import CarouselBullets from '../molecules/CarouselBullets.vue'
import BaseHeadline from '../base/Headline.vue'

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const cards = computed(() =>
  props.data?.map(card => ({
    id: card.id,
    header: { ...card.content?.title, size: 4, fontWeight: 'font-bold' },
    overline: { text: card.content?.date, color: 'text-white' },
    text: { ...card.content?.teaser },
    media: card.content?.image,
    mediaFormat: 'mobile',
    date: card.content?.date,
    actions: {
      content: {
        link: {
          url:
            card.content?.detailLink &&
            `${document.location.origin}${card.content?.detailLink}`
        }
      }
    }
  }))
)

/** slider settings */
const settings = {
  gap: 0,
  bullets: true,
  animationTimingFunc: 'cubic-bezier(0.23, 1, 0.32, 1)',
  animationDuration: 700,
  slideWidth: { mobile: 264, desktop: 424 }
}
/** should slider "DOTS" display? */
const withSlideList = computed(
  () =>
    !!(
      (isXl.value && cards.value?.length < 7) ||
      (!isXl.value && cards.value?.length < 5)
    )
)

/** UPDATE CURRENT SLIDE */
const currentSlide = ref(0)
const onChange = payload => {
  currentSlide.value = payload
}

/** CALCULATE SPACING LEFT AND RIGHT BASED ON DEFAULT FRAME */
const breakpoints = useBreakpoints({
  ...breakpointsTailwind,
  '2xl': 1440,
  '3xl': 1536,
  '4xl': 1920
})
const isXl = breakpoints.greater('xl')
const is2xl = breakpoints.greater('2xl')
const is3xl = breakpoints.greater('3xl')
const is4xl = breakpoints.greater('4xl')
const container = ref(null)
const { width } = useElementSize(container)

const frameMaxWidth = computed(() =>
  is4xl.value ? 1720 : is3xl.value ? 1440 : is2xl.value ? 1280 : 1024
)
const spacingX = computed(() =>
  !isXl.value ? '24px' : (width.value - frameMaxWidth.value) / 2 + 'px'
)

// SLIDER HEADER
const header = ref(props.data?.[0]?.content?.header)
</script>
