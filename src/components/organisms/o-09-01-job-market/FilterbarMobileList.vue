<template>
  <div
    class="fixed top-0 left-0 flex flex-col items-end justify-between w-screen h-full min-h-[stretch] px-6 py-8 overflow-y-scroll bg-white z-40"
  >
    <BaseButtonIcon @click="hideFilterBar">
      <IconClose />
    </BaseButtonIcon>

    <!-- START iterate over available filters -->
    <div class="flex-1 w-full flex flex-col gap-4 mt-12">
      <div
        v-for="filter in jobsStore.filters"
        :key="filter.name"
        class="w-full pb-6 border-b border-primary last-of-type:border-0"
      >
        <button
          class="flex justify-between w-full pb-2"
          @click="jobsStore.activeFilterView = filter"
        >
          <BaseHeadline :animate="false" :size="6" :text="filter.label" />
          <IconChevronUp class="rotate-90" />
        </button>

        <o-09-01-JobMarketActiveFilters
          :filter="filter"
          @placeholder-clicked="jobsStore.activeFilterView = filter"
        />
      </div>
    </div>
    <!-- END iterate over available filters -->

    <BaseAction
      class="mt-6 w-full"
      variant="block"
      block
      @click="hideFilterBar"
    >
      {{ jobsStore.count }} Ergebnisse anzeigen
    </BaseAction>
  </div>
</template>

<script setup lang="ts">
// Hooks
import { useJobs } from '../../../stores/jobs'
import { useScrollLock } from '../../../composables/useScrollLock'

// Components
import IconClose from '../../icons/Close.vue'
import IconChevronUp from '../../icons/ChevronUp.vue'

import BaseButtonIcon from '../../base/ButtonIcon.vue'
import BaseAction from '../../base/Action.vue'
import BaseHeadline from '../../base/Headline.vue'

import O0901JobMarketActiveFilters from './ActiveFilters.vue'

const jobsStore = useJobs()

const isLocked = useScrollLock()
const hideFilterBar = () => {
  jobsStore.isFilterBarActive = false
  isLocked.value = false
}
</script>
