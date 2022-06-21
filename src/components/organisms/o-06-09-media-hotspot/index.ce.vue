<template>
  <section>
    <div class="bg-primary pt-12 pl-[104px] pb-[72px]">
      <BaseHeadline
        v-if="headline && headline.text"
        v-bind="headline"
        class="max-w-[55%]"
      />
      <div class="ml-auto max-w-[568px] mt-12 mr-[104px]">
        <BaseText v-if="text && text.text" v-bind="text" class="text-white" />
        <MActionBar :actions="actions" position="left" class="mt-9"/>
      </div>
    </div>
    <BaseMedia :media="mediaContent" class="h-[928px]"/>
    <O0609HotspotDetail class="hidden" />
  </section>
</template>

<script setup>
import { computed, onMounted, toRefs } from 'vue'
import BaseHeadline from '../../base/Headline.vue'
import BaseText from '../../base/Text.vue'
import BaseMedia from '../../base/Media.vue'
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
const mediaContent = media.value.image.length !== 0 ? media.value.image : media.value.videos_stream
</script>
