<template>
  <a
    :href="url"
    style="padding: 1rem 1.5rem;text-decoration: none;"
    class="grid grid-cols-2 lg:grid-cols-8 grid-rows-[auto,1fr,auto] lg:grid-rows-[auto] lg:items-center gap-y-4 lg:gap-6 3xl:gap-8 justify-between h-56 lg:h-[88px] cursor-pointer bg-sand hover:!bg-primary hover:!text-white"
  >
    <div class="flex items-center text-overline lg:text-body3">
      <IconPin class="w-4 h-4 mr-2" />
      <span class="lg:hidden">
        {{ locationString }}
      </span>
      <span class="hidden lg:block flex-1">
        {{ city }}
      </span>
    </div>

    <div class="hidden lg:flex justify-center xl:justify-start">
      {{ country }}
    </div>

    <div
      class="flex lg:order-last items-center text-overline lg:text-body3 justify-end lg:justify-start"
    >
      <IconUser v-if="shifttype" class="w-4 h-4 mr-2" />
      {{ shifttype }}
    </div>

    <!-- START title -->
    <div
      class="col-span-2 lg:col-span-4 text-body2 font-bold line-clamp-3 lg:line-clamp-2 lg:order-first"
    >
      <span
        v-if="isNew"
        class="text-white bg-secondary px-1 py-[2px] text-[12px] mr-1"
      >
        <span>NEU</span>
      </span>
      {{ title }}
    </div>
    <!-- END title -->

    <!-- START footer -->
    <div
      class="col-span-2 lg:col-span-1 flex justify-between lg:justify-start lg:items-center text-body3"
    >
      {{ department }}
      <IconArrowRight class="lg:hidden" />
    </div>
    <!-- END footer -->
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import IconPin from '../../icons/Pin.vue'
import IconUser from '../../icons/User.vue'
import IconArrowRight from '../../icons/Arrow/Right.vue'

interface Location {
  city: string
  country: string
}

const props = defineProps({
  title: String,
  department: String,
  city: String,
  country: String,
  shifttype: String,
  url: { type: String, default: '' },
  isNew: Boolean
})

const locationString = computed(() => {
  if (props.city && props.country) {
    return props.city + ' | ' + props.country
  }
  return props.city || props.country || ''
})
</script>
