<template>
  <section class="viewport lg:flex">
    <div
      ref="scrollRefSec"
      :class="[backgroundLeft, backgroundLeftOpacity]"
      class="w-full h-content left-0 top-0 pl-6 pt-20 lg:pt-[150px] lg:pl-20 lg:w-[45%] lg:h-screen relative lg:sticky"
    >
      <BaseHeadline
        v-if="headline && headline.text"
        v-bind="headline"
        :color="$_headlineColor"
        class="!pb-20 max-w-[512px] mr-16 lg:uppercase"
        :size="isLg ? headline.size : 3"
      />
      <MActionBar
        v-if="actions"
        :actions="actions"
        position="left"
        :stack="true"
        class="pb-12 lg:mt-[152px] lg:pb-0"
      />
    </div>
    <div class="overflow-hidden">
      <div
        :id="sectionID.value"
        ref="scrollref"
        class="!mt-20 lg:mt-[168px] !mx-6 lg:!ml-28"
      >
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
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ref, computed, onMounted, toRefs } from 'vue'
import BaseHeadline from '../../base/Headline.vue'
import MActionBar from '../../molecules/ActionBar.vue'
import StickyScrollRightField from '../../organisms/o-03-11-sticky-scroll/StickyScrollRightField.vue'
import { useIntersectionObserver } from '@vueuse/core'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

const sectionID = ref(props.data.id)
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
const scrollRefSec = ref(null)
const targetIsVisible = ref(false)

//Check if module is visible
const { stop } = useIntersectionObserver(
  scrollRefSec,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
  },
  { threshold: 1 }
)

// Start Scroll Animation
onMounted(() => {
  // let height
  // function setHeight() {
  //   height = scrollref.value.clientHeight
  //   document.body.style.height = height + 'px'
  // }
  // ScrollTrigger.addEventListener("refreshInit", setHeight);
  // function scrollSmooth() {
  //   gsap.to(scrollref.value, { y: () => -(height - document.documentElement.clientHeight)})
  // }
  // console.log(document.documentElement.clientHeight)
  // let scroll = ScrollTrigger.create({
  //   trigger: scrollref.value,
  //   pin: scrollRefSec.value,
  //   start: 'top top',
  //   end: 'bottom bottom',
  //   onToggle: scrollSmooth,
  //   onUpdate: scrollSmooth
  // })

  const scroller = {
    target: scrollref.value,
    ease: 0.02, // scroll speed
    endY: 0,
    y: 0,
    scrollRequest: 0,
    startScroll: window.pageYOffset
  }
  let requestId = null

  document.addEventListener('scroll', onScroll)

  function onScroll() {
    if (targetIsVisible.value) {
      scroller.scrollRequest++
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller)
      }
    }
  }

  // check the position of the current module (relative to the document)
  function offset(cont) {
    var rect = cont.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop
    return {
      top: rect.top + scrollTop,
      bottom: rect.top + scrollTop + scrollRefSec.value.clientHeight
    }
  }

  var divOffset = offset(scrollRefSec.value)

  function updateScroller() {
    var scrollY = 0
    let animateValue = divOffset.top
    if (
      window.scrollY < divOffset.top + 10 || window.scrollY > divOffset.top
    ) {
      scrollY = window.pageYOffset - divOffset.top
      scroller.y += (scrollY - scroller.y) * scroller.ease
      animateValue = -scroller.y / 3
      console.log(animateValue)
      scroller.endY = scrollY
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
