<template>
  <div class="frame-content-default mt-10">
    <div class="flex gap-10 items-end">
      <BaseFilter
        v-for="filter in jobsStore.filters"
        :key="filter.name"
        :label="filter.label"
        :filter="filter"
        class="grow-0 shrink-1 basis-64"
      />
    </div>

    <!-- START active filters -->
    <transition-group
      enter-active-class="transition ease-out duration-500 delay-500"
      enter-class="opacity-0"
      leave-active-class="transition ease-in duration-75"
      leave-to-class="opacity-0"
      tag="div"
      class="flex flex-wrap w-full gap-2 mt-10"
    >
      <BaseChip
        v-for="option in jobsStore.activeFilterOptions"
        :key="option.value"
        @click="jobsStore.clearFilterOption(option)"
      >
        {{ option.label }}
      </BaseChip>
      <BaseChip v-if="jobsStore.query" @click="clearInputTextField">
        {{ jobsStore.query }}
      </BaseChip>
      <BaseChip
        v-if="jobsStore.activeFilterOptions.length > 0 || jobsStore.query"
        color="white"
        @click="jobsStore.clearFilters"
      >
        {{ jobsStore.labels.clearAllFilters }}
      </BaseChip>
    </transition-group>
    <!-- END active filters -->
  </div>
</template>

<script setup lang="ts">
// Hooks
import { useJobs } from '../../../stores/jobs'

// Components
import BaseFilter from '../../base/Filter.vue'
import BaseChip from '../../base/Chip.vue'

const jobsStore = useJobs()

const clearInputTextField = () => {
  jobsStore.setQuery('')
}
</script>
