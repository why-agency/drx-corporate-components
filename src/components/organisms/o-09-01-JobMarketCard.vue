<template>
  <a
    :href="url"
    class="grid grid-cols-2 lg:grid-cols-8 grid-rows-[auto,1fr,auto] lg:grid-rows-[auto] lg:items-center gap-y-4 lg:gap-6 3xl:gap-8 justify-between px-6 py-5 lg:py-4 h-56 lg:h-[88px] cursor-pointer bg-sand"
  >
    <div class="flex items-center text-overline lg:text-body3">
      <IconPin class="w-4 h-4 mr-2" />
      <span class="lg:hidden">
        {{ locationString }}
      </span>
      <span class="hidden lg:block">
        {{ location.city }}
      </span>
    </div>

    <div class="hidden lg:flex justify-center xl:justify-start">
      {{ location.country }}
    </div>

    <div class="flex lg:order-last items-center text-overline lg:text-body3 justify-end lg:justify-start">
      <IconUser class="w-4 h-4 mr-2" />
      {{ degree }}
    </div>

    <!-- START title -->
    <div class="col-span-2 lg:col-span-4 text-body2 font-bold line-clamp-3 lg:line-clamp-2 lg:order-first">
      <span
        v-if="isNew"
        class="text-white bg-secondary px-1 py-[2px] text-[12px] mr-1"
      >
        NEU
      </span>
      {{ title }}
    </div>
    <!-- END title -->

    <!-- START footer -->
    <div class="col-span-2 lg:col-span-1 flex justify-between lg:justify-start lg:items-center text-body3">
      {{ category }}
      <IconArrowRight class="lg:hidden" />
    </div>
    <!-- END footer -->
  </a>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

import IconPin from '../icons/Pin.vue'
import IconUser from '../icons/User.vue'
import IconArrowRight from '../icons/Arrow/Right.vue'

interface Location {
  city: string
  country: string
}

const props = defineProps({
  title: String,
  category: String,
  location: {
    type: Object as PropType<Location>,
    default: { city: '', country: '' }
  },
  degree: String,
  url: { type: String, required: true },
  isNew: Boolean
})

const locationString = computed(() => {
  if (props.location.city && props.location.country) {
    return props.location.city + ' | ' + props.location.country
  }
  return props.location.city + props.location.country
})
</script>
