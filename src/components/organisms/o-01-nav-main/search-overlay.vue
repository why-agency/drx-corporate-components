<template>
  <div
    ref="overlay"
    class="absolute left-0 w-full bg-white h-[calc(100%-56px)] xl:h-[698px] !pt-9"
  >
    <div class="frame-content-default pt-12">
      <SearchForm />
      <!-- START RESULTS -->
      <div v-if="hasResults" class="!my-8">
        <div class="flex justify-between">
          <BaseText
            :text="searchStore.topResultsLabel"
            size="text-body2"
            class="font-bold mb-12"
          />
          <BaseText
            :v-if="searchStore.resultCount"
            size="text-body2"
            class="text-secondary"
          >
            <span class="font-bold">{{ searchStore.resultCount }}</span>
            <span class="!pl-2">{{ searchResultsLabel }}</span>
          </BaseText>
        </div>
        <div
          v-if="suggestions && suggestions.length"
          class="flex flex-col space-y-8"
        >
          <BaseText
            v-for="suggestion in suggestions"
            :key="suggestion"
            :text="highlight(suggestion)"
            class="!pl-4 border-l-2"
          />
        </div>
        <div
          v-if="searchResults && searchResults.length"
          class="flex flex-col space-y-10 !mt-8"
        >
          <UseDynamicAction
            v-for="result in searchResults"
            :key="result.link"
            :to="result.link"
            class="!pl-4 border-l-2 border-secondary"
          >
            <BaseText
              v-if="result.title"
              :text="highlight(result.title)"
              class="!mb-2 font-bold"
            />
            <BaseText
              v-if="result.content"
              :text="result.content"
              size="text-body3"
              class="line-clamp-2 text-gray-700"
            />
          </UseDynamicAction>
        </div>
      </div>
      <!-- END RESULTS -->
    </div>
  </div>
</template>

<script setup>
import {
  onClickOutside,
  useBreakpoints,
  breakpointsTailwind
} from '@vueuse/core'
import { ref, computed } from 'vue'
import { useSearch } from '../../../stores/search'
import SearchForm from '../../molecules/SearchForm.vue'
import BaseText from '../../base/Text.vue'
import UseDynamicAction from '../UseDynamicAction.vue'

const breakpoints = useBreakpoints(breakpointsTailwind)
const isXl = breakpoints.greater('xl')

const overlay = ref(null)
const searchStore = useSearch()
const suggestions = computed(() => searchStore.displayedSuggestions)
const searchResults = computed(() => searchStore.displayedSearchResults)
const hasResults = computed(
  () => suggestions.value?.length || searchResults.value.length
)
const searchText = computed(() => searchStore.searchText)

const searchResultsLabel = computed(() =>
  searchStore.resultCount === 1
    ? searchStore.resultsLabelSingle
    : searchStore.resultsLabel
)
onClickOutside(overlay, () => {
  if (isXl.value) {
    searchStore.toggleSearchOverlay(false)
  }
})

const highlight = text => {
  if (!searchText.value) return

  const regexp = new RegExp(searchText.value, 'i')
  const searchTextPosition = text.match(regexp)?.index
  if (searchTextPosition === undefined) {
    return text
  }

  const highlightedText = text.substr(
    searchTextPosition,
    searchText.value.length
  )
  const textBefore = text.slice(0, searchTextPosition)
  const textAfter = text.slice(searchTextPosition + searchText.value.length)

  return `<span class="text-primary">${textBefore}</span><span class="text-secondary">${highlightedText}</span><span class="text-primary">${textAfter}</span>`
}
</script>
