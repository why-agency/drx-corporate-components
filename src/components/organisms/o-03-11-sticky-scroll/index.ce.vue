<template>
  <section class="viewport lg:flex">
    <div
      :class="[backgroundLeft, backgroundLeftOpacity]"
      class="w-full h-content left-0 top-0 pl-6 pt-20 lg:pt-[150px] lg:pl-20 lg:w-[45%] lg:h-screen relative lg:sticky"
    >
      <BaseHeadline
        v-if="headline && headline.text"
        v-bind="headline"
        :color="$_headlineColor"
        class="max-w-[512px] mr-16 lg:uppercase"
        :size="isLg ? headline.size : 3"
      />
      <MActionBar
        v-if="actions"
        :actions="actions"
        position="left"
        :stack="true"
        class="mt-[87px] pb-12 lg:mt-[152px] lg:pb-0"
      />
    </div>
    <div class="sticky overflow-hidden">
      <div ref="scrollref" class="mt-[72px] lg:mt-[168px] !mx-6 lg:!ml-28">
        <StickyScrollRightField
          v-for="field in fields"
          :key="field"
          :color="$_headlineColor"
          :text="field.content.text.text"
          :textSize="field.content.text.size"
          :icon="field.content.icon"
          :headline="field.content.headline"
          :actions="field.content.actions"
          class="mb-32"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, toRefs } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'

import gsap from 'gsap'

import BaseHeadline from '../../base/Headline.vue'
import MActionBar from '../../molecules/ActionBar.vue'
import StickyScrollRightField from '../../organisms/o-03-11-sticky-scroll/StickyScrollRightField.vue'
import { useIntersectionObserver } from '@vueuse/core'

gsap.registerPlugin(ScrollTrigger)
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
const {
  header: headline,
  box_background: boxBackground,
  scroll_items: fields,
  actions,
  background
} = toRefs(props.data.content)

const backgroundLeft = computed(() =>
  boxBackground.value === 'yes' ? 'bg-sand' : 'bg-none'
)
const backgroundLeftOpacity = computed(() =>
  background.value === 'dark' || background.value === 'gradient'
    ? 'bg-opacity-10'
    : ''
)

const $_headlineColor = computed(() =>
  background.value === 'dark' || background.value === 'gradient'
    ? 'light'
    : 'dark'
)

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')
const scrollref = ref(null)
const targetIsVisible = ref(false)

const { stop } = useIntersectionObserver(
  scrollref,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
  }
)

// Start Scroll Animation
onMounted(() => {
  const scroller = {
    target: scrollref.value,
    ease: 0.02, // scroll speed
    endY: 0,
    y: 0,
    scrollRequest: 0
  }
  let requestId = null
  document.addEventListener('scroll', onScroll)

  function onScroll() {
    scroller.scrollRequest++
    if (!requestId) {
      requestId = requestAnimationFrame(updateScroller)
    }
  }
  //Check if module is visible

  function updateScroller() {
    if (targetIsVisible.value) {
      scroller.y += (scrollY - scroller.y) * scroller.ease
      const animateValue = isLg.value ? -scroller.y / 3 : -scroller.y / 6
      gsap.set(scroller.target, {
        y: animateValue
      })
      requestId =
        scroller.scrollRequest > 0
          ? requestAnimationFrame(updateScroller)
          : null
    }
  }
})
</script>
