<template>
  <section class="viewport lg:flex">
    <div
      :class="[backgroundLeft, backgroundLeftOpacity]"
      class="w-full h-content left-0 top-0 pl-6 pt-20 lg:pt-[150px] lg:pl-20 lg:w-[45%] lg:h-screen lg:sticky"
    >
      <BaseHeadline
        v-if="headline && headline.text"
        v-bind="headline"
        class="max-w-[512px] mr-16 lg:uppercase"
        :layout="isLg ? headline.size : 3"
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
      <div
        id="scroll-container"
        class="space-y-[120px] mt-[72px] lg:mt-[168px] mx-6 lg:ml-28"
      >
        <StickyScrollRightField
          :key="field"
          v-for="field in fields"
          :color="headline.color"
          :text="field.content.text.text"
          :textSize="field.content.text.size"
          :icon="field.content.icon"
          :headline="field.content.headline"
          :actions="field.content.actions"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ref, computed, onMounted } from 'vue'
import BaseHeadline from '../../base/Headline.vue'
import MActionBar from '../../molecules/ActionBar.vue'
import StickyScrollRightField from '../../organisms/o-03-11-sticky-scroll/StickyScrollRightField.vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const backgroundLeft = computed(() =>
  props?.data?.content?.box_background === 'yes' ? 'bg-sand' : 'bg-none'
)
const backgroundLeftOpacity = computed(() =>
  props?.data?.content?.background === 'dark' ||
  props?.data?.content?.background === 'gradient'
    ? 'bg-opacity-10'
    : ''
)

const headline = computed(() => ({
  ...props.data?.content?.header,
  color:
    props?.data?.content?.background === 'dark' ||
    props?.data?.content?.background === 'gradient'
      ? 'light'
      : 'dark'
}))

const actions = ref(props?.data?.content?.actions)

const fields = computed(() => ({
  ...props.data?.content?.scroll_items
}))

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')

// Start Scroll Animation

onMounted(() => {
  const scroller = {
    target: document.querySelector('#scroll-container'),
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

  function updateScroller() {
    scroller.y += (scrollY - scroller.y) * scroller.ease
    const animateValue = isLg.value ? -scroller.y / 3 : -scroller.y / 6
    gsap.set(scroller.target, {
      y: animateValue
    })
    requestId =
      scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null
  }
})
</script>
