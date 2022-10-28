<template>
  <div
    style="padding: 2rem 1.5rem !important"
    class="fixed top-0 left-0 flex flex-col items-end justify-between w-screen h-full min-h-[stretch] overflow-y-scroll bg-white z-40"
  >
    <BaseButtonIcon @click="hideFilterBar">
      <IconClose />
    </BaseButtonIcon>

    <!-- START iterate over available filters -->
    <div class="flex-1 w-full flex flex-col gap-4 mt-12">
      <div
        v-for="filter in jobsStore.filters"
        :key="filter.name"
        style="padding-bottom: 1rem"
        class="w-full border-b border-primary last-of-type:border-0"
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

      <button
        v-if="jobsStore.activeFilterOptions.length > 0"
        class="text-left text-gray-700 text-button"
        @click="jobsStore.clearFilters"
      >
        {{ jobsStore.labels.clearAllFilters }}
      </button>
    </div>
    <!-- END iterate over available filters -->

    <BaseAction
      class="mt-6 w-full"
      variant="block"
      block
      @click="hideFilterBar"
    >
      {{ jobsStore.count }} {{ jobsStore.labels.showResultsButton }}
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
