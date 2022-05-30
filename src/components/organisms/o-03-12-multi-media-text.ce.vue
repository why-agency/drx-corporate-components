<template>
  <section class="grid">
    <div :class="{ 'order-last': isTextBelow }"></div>
    <BaseMedia v-if="media" :media="media" />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseMedia from '../base/Media.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const internalFrame = ref(props.data?.appearance?.frameClass)

const isTextBelow = computed(() => props.data?.content?.variant === 'textbelow')

const media = ref(props.data?.content?.media)
</script>
