<template>
  <section class="grid gap-y-10 xl:gap-y-24" :class="{ dark: isDark }">
    <div
      class="grid gap-y-10 xl:grid-flow-col xl:gap-y-0 xl:gap-x-20 xl:justify-between dark:text-sand"
      :class="{ 'order-last': isTextBelow, 'frame-default': hasFrameFull }"
    >
      <BaseHeadline v-if="headline && headline.text" v-bind="headline" />
      <BaseText
        v-if="text && text.text"
        v-bind="text"
        class="xl:max-w-[400px]"
      />
      <MActionBar
        v-if="actions"
        :actions="actions"
        position="left"
        :class="{ 'self-end': !text || !text.text }"
      />
    </div>
    <div class="relative h-fit">
      <BaseMedia
        v-if="media"
        :media="media"
        :format="format"
        :video-settings="{ autoplay: false }"
        :gradient="gradient"
      />
      <div
        v-if="subline && subline.text"
        class="uppercase mt-6 xl:mt-0 xl:w-full xl:absolute xl:bottom-8 z-20"
        :class="{
          'frame-default xl:left-1/2 xl:-translate-x-1/2': hasFrameFull,
          'xl:ml-8': !hasFrameFull
        }"
      >
        <BaseHeadline
          v-bind="subline"
          class="dark:text-sand max-w-[768px]"
          :class="{
            'xl:text-sand': gradient !== 'light',
            'xl:dark:text-primary': gradient === 'light'
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import BaseMedia from '../base/Media.vue'
import BaseHeadline from '../base/Headline.vue'
import BaseText from '../base/Text.vue'
import MActionBar from '../molecules/ActionBar.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

/** settings */

const hasFrameFull = ref(props.data?.appearance?.frameClass === 'full')

const isTextBelow = computed(() => props.data?.content?.variant === 'textbelow')

const isDark = computed(
  () =>
    props.data?.content?.background !== 'light' &&
    props.data?.content?.background !== 'none'
)

/** atoms */

const media = ref(props.data?.content?.media)

const headline = ref(props.data?.content?.header)

const text = ref(props.data?.content?.text)

const subline = computed(() => ({
  text: props.data?.content?.subline,
  layout: 5
}))

const actions = ref(props.data?.content?.actions)

/** media format */
const breakpoints = useBreakpoints(breakpointsTailwind)
const isLg = breakpoints.greater('lg')
const format = computed(() => {
  if (!isLg.value) {
    return '4:3'
  }
  return hasFrameFull.value ? '9:4' : '5:2'
})

/** media gradient */
const gradient = ref(props.data?.content?.gradient)
</script>
