<template>
  <div class="mt-4 lg:mt-0">
    <div
      v-if="!relevantActiveFilterOptions.length"
      class="text-left text-gray-500 text-body2-mobile cursor-pointer"
      role="button"
      @click="$emit('placeholder-clicked')"
    >
      {{ filter.placeholder }}
    </div>

    <!-- START active filters -->
    <transition-group
      enter-active-class="transition ease-out duration-500 delay-500"
      enter-class="opacity-0"
      leave-active-class="transition ease-in duration-75"
      leave-to-class="opacity-0"
      tag="div"
      class="flex flex-wrap w-full gap-2"
    >
      <BaseChip
        v-for="filterOption in relevantActiveFilterOptions"
        :key="filterOption.value"
        @click="jobsStore.clearFilterOption(filterOption)"
      >
        {{ filterOption.label }}
      </BaseChip>
    </transition-group>
    <!-- END active filters -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Hooks
import { useJobs } from '../../stores/jobs'

// Components
import BaseChip from '../base/Chip.vue'

const props = defineProps({
  filter: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['placeholder-clicked'])

const jobsStore = useJobs()
const relevantActiveFilterOptions = computed(() =>
  jobsStore.activeFilterOptions.filter(
    filterOption => filterOption.parent === props.filter.name
  )
)
</script>
