<template>
  <Combobox
    as="div"
    nullable
    multiple
    v-model="selectedOptions"
    class="bg-gray-100"
  >
    <ComboboxLabel class="block text-h5-regular text-primary pt-6 px-4">
      {{ label }}
    </ComboboxLabel>
    <div class="relative mt-1 bg-gray-100">
      <ComboboxInput
        class="w-full bg-gray-100 border-0 border-b-2 border-primary py-2 pl-4 pr-10 focus:border-secondary focus:ring-0 focus:outline-none sm:text-sm"
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
          :key="option.id"
          :value="option"
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
import { computed, ref } from 'vue'

import IconArrowDownFat from '../icons/Arrow/DownFat.vue'

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxLabel,
  ComboboxOption,
  ComboboxOptions
} from '@headlessui/vue'

interface FilterOption {
  id: number
  label: string
  value: string
  parent: string
}

const props = defineProps({
  label: {
    type: String,
    default: 'Land'
  },
  filterOptions: {
    type: Array,
    default: () => [
      { id: 1, label: 'Germany', value: 'de', parent: 'country' },
      { id: 2, label: 'Austria', value: 'at', parent: 'country' },
      { id: 3, label: 'Mexico', value: 'mx', parent: 'country' },
      { id: 4, label: 'France', value: 'fr', parent: 'country' },
      {
        id: 5,
        label: 'United States of America',
        value: 'us',
        parent: 'country'
      },
      { id: 6, label: 'Peru', value: 'pr', parent: 'country' },
      { id: 7, label: 'Bangladesh', value: 'ba', parent: 'country' },
      { id: 8, label: 'Nw Zealand', value: 'nz', parent: 'country' }
    ]
  }
})

const query = ref('')
const selectedOptions = ref([])
const filteredOptions = computed(() =>
  query.value === ''
    ? props.filterOptions
    : props.filterOptions.filter((option: FilterOption) => {
        return option.label.toLowerCase().includes(query.value.toLowerCase())
      })
)

const displayLastValue = (options: FilterOption[]) => {
  if (options && options.length) {
    return options.at(-1)?.label
  }

  return ''
}
</script>
