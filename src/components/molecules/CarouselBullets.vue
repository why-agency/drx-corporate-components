<template>
  <div class="flex items-center text-body3">
    <div
      v-if="withSlideList"
      class="w-max flex items-center lg:justify-center space-x-2"
    >
      <button
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="h-0.5 transition-all"
        :class="[
          index === currentSlide
            ? 'bg-gray-300 w-14 lg:w-20'
            : 'bg-tertiary w-8 lg:w-16'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
        @click="$emit('slide-updated', `=${index}`)"
      />
    </div>
    <div v-else class="flex">
      <span class="text-gray-300">{{ currentSlide + 1 }}/{{ slideCount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: [Array, Number],
      required: true
    },
    currentSlide: {
      type: Number,
      default: 0
    },
    withSlideList: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    slideCount() {
      return this.slides.length || this.slides
    }
  }
}
</script>
