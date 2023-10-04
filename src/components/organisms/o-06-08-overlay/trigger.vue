<template>
  <BaseAction
    ref="target"
    color="tertiary"
    class="text-left"
    :class="{ 'translate-y-4 opacity-0': animate }"
    @click="$emit('show-overlay')"
  >
    {{ triggerText }}
    <template #icon>
      <IconExpand />
    </template>
  </BaseAction>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import BaseAction from '../../base/Action.vue'
import IconExpand from '../../icons/Expand.vue'
import { useIntersectionObserver } from '../../../composables/useIntersectionObserver'
import { gsap, Power2 } from 'gsap'

const props = defineProps({
  overlay: {
    type: Array,
    default: null
  },
  animate: {
    type: Boolean,
    default: false
  }
})

const triggerText = computed(
  () => props.overlay?.[0]?.content?.buttonText || 'Mehr erfahren'
)

//overlay trigger reveal animation
const target = ref(null)
const isVisible = useIntersectionObserver({
  target
})
watch(isVisible, isVisible => {
  if (isVisible && props.animate && target.value?.$el) {
    gsap.to(target.value?.$el, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: Power2.easeOut
    })
  }
})
</script>
