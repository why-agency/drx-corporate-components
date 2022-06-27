<template>
  <section>
    <div class="bg-primary pt-12 pl-[104px] pb-6">
      <BaseHeadline
        v-if="headline && headline.text"
        v-bind="headline"
        class="max-w-[55%]"
      />
      <div class="ml-auto max-w-[568px] mt-12 mr-[104px]">
        <BaseText v-if="text && text.text" v-bind="text" class="text-white" />
        <MActionBar
          v-if="actions"
          :actions="actions"
          position="left"
          class="mt-9"
        />
      </div>
    </div>
    <div class="relative">
      <BaseMedia :media="mediaContent" class="relative w-full" />
          <!-- Hotspots -->
      <BaseButtonIcon v-for="spot in hotspots" :key="spot" variant="filled" color="gray" size="lg" class="absolute" :style="hotspotPosition(spot.content.coordinates)"><BasePicture :images="spot.content.icon" size="w-content h-6 mx-auto mt-[25%]" class="h-full"/></BaseButtonIcon>
      <div
        class="bg-gradient-to-b from-primary w-full h-28 absolute top-0"
      ></div>
    </div>
    <O0609HotspotDetail class="hidden" />
  </section>
</template>

<script setup>
import { computed, onMounted, toRefs, ref } from 'vue'
import BaseHeadline from '../../base/Headline.vue'
import BaseText from '../../base/Text.vue'
import BaseMedia from '../../base/Media.vue'
import BasePicture from '../../base/Picture.vue'
import BaseButtonIcon from '../../base/ButtonIcon.vue'
import MActionBar from '../../molecules/ActionBar.vue'
import O0609HotspotDetail from '../../organisms/o-06-09-media-hotspot/hotspot-detail.ce.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
const {
  header: headline,
  text,
  media,
  actions,
  hotspots
} = toRefs(props.data.content)
const mediaContent =
  media.value.image.length !== 0 ? media.value.image : media.value.videos_stream

// const hotspotPosition = computed(() => ({
//   coordinates
// }))


function hotspotPosition(coordinates) {
  const coor = coordinates.split(';')
  return {left: coor[0] + '%', top: coor[1] + '%'}
}
</script>
