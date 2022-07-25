<template>
  <div
    style="padding: 2rem 1.5rem !important;"
    class="fixed top-0 left-0 flex flex-col w-screen h-full min-h-screen bg-white z-50"
  >
    <button class="flex mb-12" @click="jobsStore.activeFilterView = null">
      <IconChevronUp class="-rotate-90" />
      <p class="ml-4 text-button font-bold text-primary uppercase">
        {{ jobsStore.labels.returnToFilters }}
      </p>
    </button>

    <BaseHeadline :animate="false" :size="5">
      {{ jobsStore.activeFilterView?.label }}
    </BaseHeadline>

    <!-- START filterable options -->
    <div style="margin-top: 2rem;" class="w-full flex-1 py-1 pl-1 overflow-scroll grid grid-cols-1 gap-8 mask">
      <BaseCheckbox
        v-for="filter in relevantFilterOptions"
        :key="filter.value"
        v-model="filters"
        :value="filter.value"
        class="last:mb-16"
      >
        {{ filter.label }}
      </BaseCheckbox>
    </div>
    <!-- END filterable options -->

    <div class="flex flex-col justify-center pt-4">
      <button class="text-button text-tertiary" @click="jobsStore.activeFilterView = null">
        {{ jobsStore.labels.returnToFilters }}
      </button>
      <BaseAction
        style="margin-top: 1.5rem;"
        class="w-full"
        variant="block"
        block
        @click="hideFilterBar"
      >
        {{ jobsStore.count }} {{ jobsStore.labels.showResultsButton }}
      </BaseAction>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Hooks
import { useScrollLock } from '../../../composables/useScrollLock'
import { useJobs } from '../../../stores/jobs'

// Components
import IconChevronUp from '../../icons/ChevronUp.vue'
import BaseCheckbox from '../../base/Checkbox.vue'
import BaseAction from '../../base/Action.vue'
import BaseHeadline from '../../base/Headline.vue'

// Types
import { FilterOption } from '../../../../types'

const jobsStore = useJobs()

const relevantFilterOptions = computed(() =>
  jobsStore.filterOptions.filter(
    option => option.parent === jobsStore.activeFilterView?.name
  )
)

const filters = computed({
  get() {
    return jobsStore.activeFilterOptions.map(
      (filter: FilterOption) => filter.value
    )
  },
  set(value: String[]) {
    const activeFilterOptions = jobsStore.filterOptions.filter(option =>
      value.includes(option.value)
    )

    jobsStore.setActiveFilterOptions(activeFilterOptions)
  }
})


const isLocked = useScrollLock()
const hideFilterBar = () => {
  isLocked.value = false
  jobsStore.isFilterBarActive = false
  setTimeout(() => {
    jobsStore.activeFilterView = null
  }, 300)
}
</script>

<style scoped>
.mask {
  -webkit-mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}
</style>
