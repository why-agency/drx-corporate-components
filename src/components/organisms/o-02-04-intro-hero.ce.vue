<template>
  <section>
    <div
      ref="triggerContainer"
      class="w-full lg:h-screen"
      :class="$_backgroundColor"
    >
      <div v-if="media" ref="stickyImage" class="h-full w-full absolute">
        <BaseMedia
          v-if="media"
          :media="media"
          :gradient="gradient"
          class="overflow-hidden"
          :class="isDefaultVariant ? '!h-screen before:!h-screen' : '!h-[70%]'"
          full-screen
          :mediaStyle="
            isDefaultVariant
              ? 'h-screen w-[100vw] object-cover'
              : '!h-full w-[100vw] object-cover'
          "
        />
      </div>
      <div
        class="flex flex-col justify-end frame-content-default relative z-30 pb-16 pt-[136px] lg:pt-[0px]"
        :class="isDefaultVariant ? 'h-content lg:h-full' : 'h-[70%]'"
      >
        <!-- If it is the default variant -->
        <div
          v-if="isDefaultVariant"
          class="lg:mb-6 h-content lg:max-w-[40%] lg:h-[432px] flex flex-col"
          :class="!subheadline && !bodytext.text ? 'mb-72' : 'mb-11'"
        >
          <div class="my-auto">
            <BaseHeadline
              v-if="headline && headline.text"
              v-bind="headline"
              class="!font-normal pb-7 lg:pb-12 break-words"
            />
            <!-- Subline -->
            <BaseHeadline
              v-if="subheadline"
              :text="subheadline"
              tag="h4"
              :size="4"
              :color="$_textColor === 'text-primary' ? 'dark' : 'light'"
              class="w-[70%]"
            />
            <!-- Bodytext -->
            <BaseText
              v-if="bodytext && bodytext.text"
              :text="bodytext.text"
              :size="$_bodytextSize"
              :class="$_textColor"
              class="leading-7 pt-24 lg:pt-5"
            />
          </div>
        </div>
        <MActionBar
          v-if="actions"
          :actions="actions"
          :position="isLg ? 'right' : 'left'"
          variant="large"
        />
      </div>
      <div class="w-full">
        <BaseHeadline
          v-if="headline && headline.text && !isDefaultVariant"
          v-bind="headline"
          class="text-deco1 text-center !font-normal mt-[2%]"
        />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, computed, toRefs, onMounted } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import BaseMedia from '../base/Media.vue'
import BaseHeadline from '../base/Headline.vue'
import BaseText from '../base/Text.vue'
import MActionBar from '../molecules/ActionBar.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

// ÜBERARBEITEN
const {
  variant,
  background,
  header: headline,
  subheadline,
  bodytext,
  media,
  gradient,
  actions
} = toRefs(props.data.content)

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')
gsap.registerPlugin(ScrollTrigger)

const $_bodytextSize = computed(() => {
  return 'text-body' + bodytext.value.layout
})

const $_backgroundColor = computed(() => {
  return 'bg-' + background.value
})

const isDefaultVariant = computed(() => {
  return variant.value === 'default'
})

const $_textColor = computed(() => {
  if (media.value) {
    return gradient.value === 'light' ? 'text-primary' : 'text-sand'
  }
  return background.value === 'light'
    ? 'text-primary'
    : background.value === 'none'
    ? 'text-primary'
    : 'text-sand'
})

const triggerContainer = ref(null)
const stickyImage = ref(null)
onMounted(() => {
  //scrollTrigger for the mobile sticky background
  const scroll = ScrollTrigger.create({
    trigger: triggerContainer.value,
    start: 'top top',
    end: 'bottom bottom',
    pin: stickyImage.value,
    onToggle: self => console.log('toggled, isActive:')
  })
})
</script>
