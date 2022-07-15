<template>
  <div>
    <form
      class="flex items-center border-b border-gray-200 dark:border-black"
      :class="{
        'border-secondary dark:border-secondary': isFocused
      }"
      @submit.prevent="redirectToSearch"
    >
      <div class="!mr-5 lg:!mr-8"><IconSearch class="w-6 lg:w-8 lg:h-8" /></div>
      <input
        ref="input"
        v-model="searchText"
        type="search"
        :placeholder="inputPlaceholder"
        class="w-full text-primary normal-case text-h5 pb-1 appearance-none focus:outline-none bg-transparent"
        :class="{ 'text-gray-500 ': !searchText }"
        v-on="inputListeners"
      />
      <div class="flex items-center -mr-3">
        <transition
          enter-class="opacity-0"
          enter-active-class="transition ease-out duration-500"
          enter-to-class="opacity-100 transform "
          leave-to-class="opacity-0 transform"
          leave-active-class="transition ease-in duration-300"
        >
          <BaseButtonIcon
            v-if="searchText.length"
            variant="transparent"
            color="black"
            :size="isLg ? 'lg' : 'base'"
            class="after:relative after:-right-2 lg:after:-right-1 after:w-0.5 after:bg-gray-500 after:h-4 lg:after:h-6"
            @click.prevent="clearSearch"
          >
            <IconClose class="w-6 lg:w-10 lg:h-10" />
          </BaseButtonIcon>
        </transition>
        <BaseButtonIcon
          variant="transparent"
          color="black"
          :size="isLg ? 'lg' : 'base'"
        >
          <IconArrowRightSmall class="w-5 lg:w-8 lg:h-8" />
        </BaseButtonIcon>
      </div>
    </form>
  </div>
</template>

<script>
import {
  useBreakpoints,
  breakpointsTailwind,
  useDebounceFn
} from '@vueuse/core'
import { computed } from 'vue'
import { useSearch } from '../../stores/search'

import IconSearch from '../icons/Search.vue'
import IconArrowRightSmall from '../icons/Arrow/RightFatShort.vue'
import IconClose from '../icons/Close.vue'
import BaseButtonIcon from '../base/ButtonIcon.vue'

export default {
  setup() {
    const searchStore = useSearch()

    const breakpoints = useBreakpoints(breakpointsTailwind)
    const isLg = breakpoints.greater('lg')

    const searchText = computed({
      get() {
        return searchStore.searchText
      },
      set: useDebounceFn(value => {
        searchStore.setSearchText(value)
      }, 500)
    })
    const inputPlaceholder = computed(() => searchStore.inputPlaceholder)

    const searchQuery = computed(
      () => `${searchStore.formAction}?tx_solr[q]=${searchText.value}`
    )

    const clearSearch = () => searchStore.setSearchText('')

    const redirectToSearch = () =>
      window.location.replace(`${searchStore.baseUrl}${searchQuery.value}`)

    return { isLg, searchText, clearSearch, inputPlaceholder, redirectToSearch }
  },
  components: {
    IconSearch,
    IconArrowRightSmall,
    IconClose,
    BaseButtonIcon
  },
  data() {
    return {
      isFocused: false
    }
  },
  computed: {
    inputListeners() {
      return {
        blur: () => {
          this.isFocused = false
        },
        focus: () => {
          this.isFocused = true
        },
        keydown: event => {
          if (event.key === 'Enter') {
            event.preventDefault()
            this.redirectToSearch()
          }
        }
      }
    }
  },
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<style>
input[type='search']::-webkit-search-decoration,
input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-results-button,
input[type='search']::-webkit-search-results-decoration {
  -webkit-appearance: none;
}
</style>
