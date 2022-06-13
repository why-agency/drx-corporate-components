<template>
  <section ref="container" class="bg-primary py-8 lg:pb-8">
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

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const cards = computed(() =>
  props.data?.content?.cards.map(card => ({
    id: card.id,
    ...card.content
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
</script>
