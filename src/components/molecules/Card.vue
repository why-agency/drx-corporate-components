<template>
  <div ref="card" class="invisible glide__slide !h-[389px] lg:!h-[624px]">
    <UseDynamicAction
      :to="link"
      :tag="link ? 'a' : 'div'"
      :target="target"
      class="flex flex-col justify-end relative h-full group"
      @mouseenter.native="isHovered = true"
      @mouseleave.native="isHovered = false"
    >
      <!-- START IMAGE -->
      <BaseMedia
        v-if="media"
        :media="media"
        :format="mediaFormat"
        gradient="dark"
        :srcsets="srcsets"
        class="!absolute group-hover:before:from-black/20 group-hover:before:via-black/75 group-hover:before:to-black/80"
        :class="{
          'before:from-black/20 before:via-black/75 before:to-black/80':
            isActive && !isLg
        }"
      />
      <!-- END IMAGE -->

      <!-- START TEXT CONTENT -->
      <div class="text-white !pb-8 !px-4 lg:px-10 relative z-20">
        <!-- START DEFAULT VISIBLE CONTENT -->
        <BaseText
          v-if="overline && overline.text"
          ref="headline"
          size="text-body2"
          :text="overline.text"
          :animate="false"
          class="font-bold mb-2"
          :class="overline.color || 'text-secondary'"
        />
        <BaseHeadline
          v-if="header && header.text"
          ref="headline2"
          :size="header.size || 3"
          :text="header.text"
          :animate="false"
          :font-weight="header.fontWeight || 'font-regular'"
          :class="{ '!mb-6 lg:!mb-10': !header2 || !header2.text }"
          class="!text-white"
        />
        <BaseHeadline
          v-if="header2 && header2.text"
          ref="headline3"
          :size="3"
          :text="header2.text"
          :animate="false"
          font-weight="font-regular"
          class="!text-white !mb-6 lg:!mb-10"
        />
        <!-- END DEFAULT VISIBLE CONTENT-->

        <!-- START CONTENT VISIBLE ON HOVER -->
        <div
          ref="reveal"
          class="invisible opacity-0 translate-y-28 absolute bottom-8 flex flex-col"
        >
          <BaseText
            v-if="text.text"
            size="text-body3"
            :text="text.text"
            :animate="false"
            class="line-clamp-4 !pr-4 lg:!pr-8"
          />
          <div class="h-8 !mt-8 lg:!mt-12">
            <BaseButtonIcon
              v-if="link"
              variant="outline"
              color="white"
              size="sm"
            >
              <IconArrowRightSmall class="w-5" />
            </BaseButtonIcon>
          </div>
        </div>
        <!-- END CONTENT VISIBLE ON HOVER -->
      </div>
      <!-- END TEXT CONTENT -->
    </UseDynamicAction>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { gsap, Power1 } from 'gsap'
import UseDynamicAction from '../organisms/UseDynamicAction.vue'
import BaseMedia from '../base/Media.vue'
import BaseHeadline from '../base/Headline.vue'
import BaseText from '../base/Text.vue'
import BaseButtonIcon from '../base/ButtonIcon.vue'
import IconArrowRightSmall from '../icons/Arrow/RightSmall.vue'

const props = defineProps({
  header: {
    type: Object,
    default: undefined
  },
  header2: {
    type: Object,
    default: undefined
  },
  icon: {
    type: String,
    default: ''
  },
  actions: {
    type: [Object, String],
    default: undefined
  },
  overline: {
    type: Object,
    default: undefined
  },
  text: {
    type: Object,
    default: undefined
  },
  media: {
    type: Array,
    default: undefined
  },
  mediaFormat: {
    type: String,
    default: 'desktop'
  },
  isActive: {
    type: Boolean,
    default: false
  },
  srcsets: {
    type: Object,
    default: () => ({
      mobileSrc: ['?tr=w-264 375w'],
      tabletSrc: ['?tr=w-264 768w'],
      desktopSrc: ['?tr=w-424 1024w']
    })
  }
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')

/** HOVER ANIMATION */
const isHovered = ref(false)
const headline = ref(null)
const headline2 = ref(null)
const headline3 = ref(null)
const reveal = ref(null)
const card = ref(null)
const headlines = computed(() =>
  [headline.value?.$el, headline2.value?.$el, headline3.value?.$el].filter(
    el => el
  )
)
const tl = gsap.timeline({ paused: true })

const initTimeline = () => {
  tl.to(headlines.value, {
    duration: 0.6,
    y: -160,
    ease: Power1.easeInOut
  }).to(
    reveal.value,
    {
      opacity: 1,
      autoAlpha: 1,
      y: 0,
      duration: 0.6,
      ease: Power1.easeInOut
    },
    0.025
  )
}
const toggleHeadline = value => {
  if (value) {
    tl.play()
  } else {
    tl.reverse()
  }
}

onMounted(async () => {
  initTimeline()
  await gsap.from(card.value, { opacity: 0, autoAlpha: 0, duration: 0.5 })
  if (props.isActive && !isLg.value) {
    toggleHeadline(props.isActive)
  }
})

watch(isHovered, isHovered => {
  if (isLg.value) {
    toggleHeadline(isHovered)
  }
})

watch(
  () => props.isActive,
  isActive => {
    toggleHeadline(isActive && !isLg.value)
  }
)

// set/unset slide active state on browser resize
watch(isLg, (isLgNew, isLgOld) => {
  toggleHeadline(!isLgNew && isLgOld && props.isActive)
})

const link = computed(() => props.actions?.content?.link?.url)
const target = computed(() => props.actions?.content?.link?.target)
</script>
