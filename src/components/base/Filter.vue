<template>
  <Combobox as="div" nullable multiple v-model="selectedOptions">
    <ComboboxLabel class="block text-h5-regular text-primary pt-6 px-4">
      {{ label }}
    </ComboboxLabel>
    <div class="relative mt-1">
      <ComboboxInput
        class="w-full border-0 border-b-2 border-primary py-2 pl-4 pr-10 focus:border-secondary focus:ring-0 focus:outline-none sm:text-sm"
        @change="query = $event.target.value"
        :display-value="displayLastValue"
      />
      <ComboboxButton
        class="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
      >
        <IconArrowDownFat class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </ComboboxButton>

      <ComboboxOptions
        v-if="filteredOptions.length > 0"
        class="absolute z-10 max-h-60 w-full overflow-auto bg-gray-100 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      >
        <ComboboxOption
          v-for="option in filteredOptions"
          :key="option.value"
          :value="option.value"
          as="template"
          v-slot="{ active, selected }"
        >
          <li
            :class="[
              'relative cursor-default select-none py-2 pl-4 pr-9',
              active ? 'bg-primary text-white' : 'text-primary'
            ]"
          >
            <div class="flex items-center">
              <span
                class="inline-flex items-center justify-center h-4 w-4 border border-gray-700 bg-white flex-shrink-0"
                aria-hidden="true"
              >
                <span v-if="selected" class="h-[10px] w-[10px] bg-secondary" />
              </span>
              <span :class="['ml-3 truncate', selected && 'font-semibold']">
                {{ option.label }}
              </span>
            </div>
          </li>
        </ComboboxOption>
      </ComboboxOptions>
    </div>
  </Combobox>
</template>

<script setup lang="ts">
import { computed, ref, WritableComputedRef } from 'vue'

import { useJobs } from '../../stores/jobs'

import IconArrowDownFat from '../icons/Arrow/DownFat.vue'
import BaseDropdown from '../base/Dropdown.vue'

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/vue'

import { Filter, FilterOption } from '../../../types'

interface Props {
  label?: string
  filter: Filter
}

const props = defineProps<Props>()

const jobsStore = useJobs()

const query = ref('')

const relevantFilterOptions = computed(() =>
  jobsStore.filterOptions.filter(option => option.parent === props.filter.name)
)
const filteredOptions = computed(() =>
  query.value === ''
    ? relevantFilterOptions.value
    : relevantFilterOptions.value.filter((option: FilterOption) => {
        return option.label.toLowerCase().includes(query.value.toLowerCase())
      })
)

const selectedOptions = computed({
  get() {
    return jobsStore.activeFilterOptions
      .filter(option => option.parent === props.filter.name)
      .map(option => option.value)
  },
  set(value: string[]) {
    const filterOptions = jobsStore.activeFilterOptions.filter(
      (filterOption: FilterOption) => filterOption.parent !== props.filter.name
    )
    const newOptions = relevantFilterOptions.value.filter(
      (option: FilterOption) => value.includes(option.value)
    )
    jobsStore.setActiveFilterOptions([...filterOptions, ...newOptions])
  }
})

const displayLastValue = (options: any) => {
  if (options && options.length) {
    return options.at(-1)?.label
  }

  return ''
}
</script>
