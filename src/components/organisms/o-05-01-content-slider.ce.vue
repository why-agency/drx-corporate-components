<template>
  <section>
    <MCarousel v-bind="settings" @change="onChange">
      <MCard
        v-for="(card, index) in cards"
        :key="card.id"
        v-bind="card"
        :is-active="currentSlide === index"
      />
    </MCarousel>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseText from '../base/Text.vue'
import MActionBar from '../molecules/ActionBar.vue'
import MCarousel from '../molecules/Carousel.vue'
import MCard from '../molecules/Card.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const cards = computed(() =>
  props.data?.content?.cards.map(card => ({
    id: card.id,
    ...card.content
  }))
)

/** slider settings */
const settings = {
  gap: 0,
  bullets: true,
  animationTimingFunc: 'cubic-bezier(0.23, 1, 0.32, 1)',
  animationDuration: 700,
  slideWidth: { mobile: 264, desktop: 424 }
}

/** UPDATE CURRENT SLIDE */
const currentSlide = ref(0)
const onChange = payload => {
  currentSlide.value = payload
}
</script>
