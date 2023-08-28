<template>
  <Listbox v-model="selectedOptions" multiple nullable v-slot="{ open }">
    <div class="relative mt-1">
      <ListboxButton
        style="margin-left: 1rem; margin-right: 1rem"
        class="relative w-full cursor-default bg-white py-2 text-left focus:border-secondary focus:ring-0 focus:outline-none text-h5-regular"
        :class="{ 'border-b border-b-primary': !open, 'shadow-2xl': open }"
      >
        <span class="block truncate">
          {{ props.label }}
          <span
            v-if="selectedOptions.length > 0"
            style="font-size: 12px"
            class="relative inline-flex justify-center items-center bottom-1 left-1 w-5 h-5 bg-secondary text-white font-bold py-1"
          >
            {{ selectedOptions.length }}
          </span>
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center"
        >
          <IconChevronDown class="h-6 w-6 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <ListboxOptions
        :unmount="false"
        v-show="open"
        style="margin-left: 1rem"
        class="absolute max-h-60 w-full overflow-auto bg-white py-2 text-base focus:outline-none shadow-2xl"
      >
        <li style="margin-left: 1rem; margin-right: 1rem">
          <BaseTextField
            v-model="query"
            label="Keep looking for jobs"
            hide-button
            hide-label
            placeholder="Type to filter"
            class="bg-sand text-primary placeholder:text-gray-500 my-2"
          >
            <template #iconPrefix>
              <IconSearch />
            </template>
          </BaseTextField>
        </li>
        <ListboxOption
          v-slot="{ active, selected }"
          v-for="option in filteredOptions"
          :key="option.value"
          :value="option.value"
          as="template"
        >
          {{ selected }}
          <li
            style="padding-left: 1rem; padding-right: 1rem"
            :class="[
              'relative cursor-default select-none py-2',
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
        </ListboxOption>
      </ListboxOptions>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { useJobs } from '../../stores/jobs'

// Components
import IconChevronDown from '../icons/ChevronDown.vue'
import IconSearch from '../icons/Search.vue'

import BaseTextField from './TextField.vue'

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
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
</script>
