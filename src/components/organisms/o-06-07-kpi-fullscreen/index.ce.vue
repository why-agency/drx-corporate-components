<template>
  <section>
    <div
      :class="[
        frame,
        {
          'lg:h-screen': hasQuoteContent,
          [$_backgroundColor]: !isMedia
        }
      ]"
      ref="triggerContainer"
    >
      <div v-if="isMedia" ref="stickyImage" class="h-full w-full absolute">
        <BaseMedia
          :media="media.type === 'image' ? media.image : media.video_stream"
          :video-settings="{ autoplay: true }"
          :gradient="gradient"
          mediaStyle="h-screen w-[100vw] object-cover"
        />
      </div>
      <div class="z-50 mx-6 lg:mx-24 flex flex-col h-full">
        <BaseHeadline
          v-if="headline && headline.text"
          v-bind="headline"
          :class="[
            $_headlineSize,
            {
              'text-sand':
                (background !== 'light' && background !== 'none' && !isMedia) ||
                (gradient === 'dark' && isMedia),
              'text-primary':
                (background === 'none' && !isMedia) ||
                (background === 'light' && !isMedia) ||
                (gradient === 'light' && isMedia)
            }
          ]"
          class="pt-16 lg:pt-28 font-normal"
        />
        <BaseHeadline
          v-if="quote && quote.text"
          v-bind="quote"
          :size="4"
          class="font-normal w-full lg:max-w-[616px] lg:ml-auto"
          :class="[
            $_textColor,
            headline && headline.text ? 'pt-20' : 'pt-[312px]'
          ]"
        />
        <div
          v-if="cards && cards[0]"
          class="z-50 flex flex-col lg:flex-row w-full border-t-[1px] border-sand border-opacity-20 pt-7 pb-16 space-y-16 lg:space-y-0 lg:justify-between"
          :class="$_marginTop"
        >
          <O0607KpiFullscreenKpiFact
            v-for="card in cards"
            :key="card"
            :name="card.content.name"
            :value="card.content.value"
            :unit="card.content.unit"
            :description="card.content.description"
            :color="$_textColor"
            :valueColor="$_valueColor"
          />
          <div v-if="$_isTwoFacts" class="hidden lg:block invisible w-[256px]"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, toRefs, ref } from 'vue'
import { useBackgroundColor } from '../../../composables/useBackgroundColor'
import BaseHeadline from '../../base/Headline.vue'
import BaseMedia from '../../base/Media.vue'
import BaseText from '../../base/Text.vue'
import O0607KpiFullscreenKpiFact from '../../organisms/o-06-07-kpi-fullscreen/kpi-fact.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const frameClass = ref(props.data?.appearance?.frameClass)
const frame = 'frame-' + frameClass.value

/** quote atoms */
const {
  header: headline,
  quote,
  background,
  gradient,
  media,
  kpicards: cards
} = toRefs(props.data.content)

const isMedia = computed(() => {
  return media.value?.image !== null || media.value?.video_stream?.length !== 0
})

const $_headlineSize = computed(() => `text-${headline.value.tag}`)
const $_textColor = computed(() => {
  if (isMedia.value) {
    return gradient.value === 'light' ? 'text-primary' : 'text-sand'
  }
  return background.value === 'light'
    ? 'text-primary'
    : background.value === 'none'
    ? 'text-primary'
    : 'text-sand'
})

const $_isTwoFacts = computed(() => cards.value.length < 3)

const $_backgroundColor = useBackgroundColor(background.value)
const hasQuoteContent = computed(() => {
  return headline.value.text || quote.value.text
})
const $_valueColor = computed(() => {
  return hasQuoteContent.value ? $_textColor.value : 'text-secondary'
})

const $_marginTop = computed(() => {
  return headline.value.text || quote.value.text ? 'mt-14 lg:mt-auto' : 'mt-10'
})

const triggerContainer = ref(null)
const stickyImage = ref(null)
onMounted(() => {
  //scrollTrigger for the mobile sticky background
  console.log(triggerContainer.value)
  const scroll = ScrollTrigger.create({
    trigger: triggerContainer.value,
    start: 'top top',
    end: 'bottom bottom',
    pin: stickyImage.value,
    onToggle: self => console.log("toggled, isActive:"),
  })
  console.log(scroll)
})
</script>