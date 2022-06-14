<template>
  <section>
    <div :class="[frame, bg, { 'h-screen': hasQuoteContent }]">
      <div class="mx-24">
        <BaseMedia
          v-if="isMedia"
          :media="media"
          :video-settings="{ autoplay: true }"
          :gradient="gradient.value"
          class="!absolute !h-screen"
        />
        <BaseHeadline
          v-if="headline"
          v-bind="headline"
          :class="{
            'text-sand': background !== 'light',
            'text-primary': background === 'light'
          }"
          class="pt-28"
        />
        <BaseHeadline
          v-if="quote"
          v-bind="quote"
          :size="4"
          :class="$_textColor"
          class="font-normal pt-20 max-w-[616px] float-right"
        />
        <O0607KpiFullscreenKpiFact
          :name="cardContent.name"
          :value="cardContent.value"
          :unit="cardContent.unit"
          :description="cardContent.description"
          :color="$_textColor"
        />
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

const cardContent = ref(cards).value[0].content
console.log(cardContent.description)

const $_headlineSize = 'text-' + ref(headline).value.tag
const $_textColor = computed(() => {
  return background === 'light' ? 'text-primary' : 'text-sand'
})
const bg = useBackgroundColor(background.value)
const hasQuoteContent = computed(() => {
  return headline || quote
})

// const bg = computed(() => {
//   'bg-'
// })

/** media set true */
const isMedia = false /** muss noch weg!! */
</script>
