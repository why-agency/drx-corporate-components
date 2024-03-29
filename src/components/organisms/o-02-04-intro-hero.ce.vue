<template>
  <section
    ref="triggerContainer"
    class="w-full md:h-screen relative"
    :class="contentNoOverflow && isDefaultVariant ? '!h-screen' : 'h-max'"
  >
    <div
      v-if="media"
      ref="stickyImage"
      class="w-full absolute"
      :class="{
        'relative lg:absolute': !isDefaultVariant,
        'h-full': isDefaultVariant
      }"
    >
      <BaseMedia
        :media="media"
        :gradient="gradient"
        class="overflow-hidden"
        :class="
          isDefaultVariant
            ? '!h-screen before:!h-screen'
            : 'h-[100vw] lg:!h-[70%]'
        "
        full-screen
        :mediaStyle="
          isDefaultVariant
            ? 'h-screen w-[100vw] object-cover'
            : 'h-[100vw] lg:!h-full w-[100vw] object-cover'
        "
      />
    </div>
    <div
      ref="content"
      class="flex flex-col justify-end frame-content-default relative z-30 pb-16 pt-[136px] lg:pt-[0px]"
      :class="[
        isDefaultVariant ? 'h-max lg:h-full' : 'h-[70%] hidden lg:flex',
        {
          'lg:flex-row lg:justify-between lg:items-end':
            isDefaultVariant && shouldButtonsStack
        }
      ]"
    >
      <!-- If it is the default variant -->
      <div
        v-if="isDefaultVariant"
        class="lg:mb-6 h-max lg:max-w-[45%] lg:min-h-[432px] flex flex-col"
        :class="[
          !subheadline && !bodytext.text ? 'mb-72' : 'mb-11',
          {
            invisible: hideContent,
            'lg:h-auto lg:pb-16': shouldButtonsStack && isVideo
          }
        ]"
      >
        <div class="my-auto">
          <BaseHeadline
            v-if="headline && headline.text"
            v-bind="headline"
            class="!font-normal !pb-7 lg:!pb-12 !mb-0 break-words"
          />
          <!-- Subline -->
          <BaseHeadline
            v-if="subheadline"
            :text="subheadline"
            tag="h4"
            :size="4"
            :color="$_textColor === 'text-primary' ? 'dark' : 'light'"
            class="w-[60%]"
          />
          <!-- Bodytext -->
          <BaseText
            v-if="bodytext && bodytext.text"
            :text="bodytext.text"
            :class="[$_textColor, $_bodytextSize]"
            class="leading-7 pt-24 lg:pt-5"
          />
        </div>
      </div>
      <MActionBar
        v-if="actions"
        :actions="actions"
        :position="isLg ? 'right' : 'left'"
        variant="large"
        :class="{
          invisible: hideContent,
          'lg:gap-x-4': shouldButtonsStack,
          'ml-16': shouldButtonsStack && !isDefaultVariant
        }"
      />
      <BaseButtonIcon
        v-if="media && isVideo"
        variant="outline"
        color="gray"
        size="lg"
        class="!mt-6 lg:mt-0 lg:absolute"
        @click="hideContent = !hideContent"
        :class="{ 'hidden lg:flex': !isDefaultVariant }"
      >
        <IconPlay v-if="!hideContent" class="w-5" />
        <IconArrowLeft v-if="hideContent" class="w-5 pt-[15%]" />
      </BaseButtonIcon>
    </div>
    <!-- If it is the headline_large version -->
    <div class="py-10 lg:py-0 frame-content-default" v-if="!isDefaultVariant">
      <BaseHeadline
        v-if="headline && headline.text"
        v-bind="headline"
        class="text-deco1 !font-normal lg:mt-[2%] break-words text-left mb-16"
      />
      <!-- The mobile version of the headline_large version -->
      <MActionBar
        v-if="actions"
        :actions="actions"
        :position="isLg ? 'right' : 'left'"
        variant="large"
        :class="[
          { 'lg:hidden': !isDefaultVariant },
          { invisible: hideContent }
        ]"
      />
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
import BaseButtonIcon from '../base/ButtonIcon.vue'
import IconPlay from '../icons/Play.vue'
import IconArrowLeft from '../icons/Arrow/Left.vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const {
  variant,
  background,
  header,
  subheadline,
  bodytext,
  media,
  gradient,
  actions
} = toRefs(props.data.content)

const breakpoints = useBreakpoints({ ...breakpointsTailwind, '2xl': 1440 })
const isLg = breakpoints.greater('lg')
const is2xl = breakpoints.greater('2xl')
gsap.registerPlugin(ScrollTrigger)

const $_bodytextSize = computed(() => ({
  'text-body1': bodytext.value.layout === '1',
  'text-body2': bodytext.value.layout === '2',
  'text-body3': bodytext.value.layout === '3'
}))

const isDefaultVariant = computed(() => variant.value === 'default')

const isVideo = computed(
  () => media.value?.[0]?.[0]?.properties?.type === 'video'
)

const $_textColor = computed(() => {
  if (media.value) {
    return gradient.value === 'light' ? 'text-primary' : 'text-sand'
  }
  return background.value === 'light' || background.value === 'none'
    ? 'text-primary'
    : 'text-sand'
})

const headline = computed(() => ({
  text: header.value?.text,
  size: header.value?.layout && Number(header.value?.layout),
  fontWeight: header.value?.fontWeight,
  tag: header.value?.tag,
  color: header.value?.color
}))

const hideContent = ref(false)

const triggerContainer = ref(null)
const stickyImage = ref(null)
const content = ref(null)
const contentNoOverflow = ref(false)
onMounted(() => {
  contentNoOverflow.value = content.value.clientHeight < window.innerHeight
  if (isDefaultVariant.value && stickyImage.value) {
    //scrollTrigger for the mobile sticky background
    const scroll = ScrollTrigger.create({
      trigger: triggerContainer.value,
      start: 'top top',
      end: 'bottom bottom',
      pin: stickyImage.value
    })
  }
})

// special styles for lg and xl breakpoints in case of 3-4 actions
const shouldButtonsStack = computed(
  () => isLg.value && !is2xl.value && actions?.value?.length >= 3
)
</script>
