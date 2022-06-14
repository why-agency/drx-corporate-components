<template>
  <section>
    <div :class="frame">
      <div v-if="isMedia">
        <BaseMedia
          v-if="isMedia"
          :media="media"
          :video-settings="{ autoplay: true }"
          :gradient="gradient.value"
        />
      </div>
      <div v-else>
        <BaseHeadline
          v-bind="headline"
          :class="{
            'text-sand': background !== 'light',
            'text-primary': background === 'light'
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, toRefs, ref } from 'vue'
import BaseHeadline from '../../base/Headline.vue'
import BaseMedia from '../../base/Media.vue'

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
  background,
  gradient,
  media,
  kpicards: cards
} = toRefs(props.data.content)

/** media set true */
const isMedia = true /** muss noch weg!! */
</script>
