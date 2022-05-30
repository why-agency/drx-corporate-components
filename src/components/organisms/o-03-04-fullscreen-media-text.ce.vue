<template>
  <div class="w-screen h-screen">
    <BaseMedia
      v-if="media"
      :media="media"
      media-style="w-full h-screen absolute"
      gradient="before:h-screen before:bg-gradient-to-b before:from-transparent before:via-black/30 before:to-black/75"
    />
    <div
      class="frame-default grid lg:grid-cols-2 lg:grid-rows-1 h-full content-end relative z-30 text-white pb-10 lg:pb-20"
    >
      <div class="lg:self-center">
        <BaseHeadline
          v-if="headline && headline.text"
          v-bind="headline"
          class="mb-6 lg:mb-8"
        />
        <MActionBar v-if="action" :actions="[action]" position="left" />
      </div>
      <BaseSubline
        v-if="bodytext.text"
        v-bind="bodytext"
        class="mt-10 lg:self-end"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useAction } from '../../composables/useAction'
import BaseMedia from '../base/Media.vue'
import BaseHeadline from '../base/Headline.vue'
import BaseSubline from '../base/Subline.vue'
import MActionBar from '../molecules/ActionBar.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const headline = ref(props.data?.content?.header)

const bodytext = computed(() => ({
  text: props.data?.content?.bodytext,
  layout: 2
}))

const action = computed(
  () =>
    props?.data?.content?.actions?.buttonlink &&
    useAction(props?.data?.content?.actions)
)

const media = ref(props.data?.content?.media)
</script>
