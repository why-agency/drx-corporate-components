<template>
  <div>
    <!-- START filter detail view -->
    <transition
      enter-from-class="transform translate-x-full"
      enter-active-class="transition ease-out duration-300"
      enter-to-class="transform translate-x-0"
      leave-to-class="transform translate-x-full"
      leave-active-class="transition ease-in duration-300"
    >
      <o-09-01-JobMarketFilterbarMobileDetail
        v-if="jobsStore.activeFilterView"
      />
    </transition>
    <!-- START filter` detail view -->

    <!-- START active filter bar -->
    <transition
      enter-from-class="transform translate-y-full"
      enter-active-class="transition ease-out duration-300"
      enter-to-class="transform translate-y-0"
      leave-to-class="transform translate-y-full"
      leave-active-class="transition ease-in duration-300"
    >
      <o-09-01-JobMarketFilterbarMobileList
        v-if="jobsStore.isFilterBarActive"
      />
    </transition>
    <!-- END active filter bar -->

    <button
      v-if="!jobsStore.isFilterBarActive"
      class="fixed flex w-full px-6 bottom-10 z-60 drop-shadow-2xl"
      @click="showFilterBar"
    >
      <p
        class="flex items-center flex-1 px-4 h-12 bg-primary text-sand text-button"
      >
        Jetzt Filter auswählen
        <span
          v-if="jobsStore.numberOfActiveFilterOptions > 0"
          class="flex items-center justify-center ml-2 w-4 h-4 text-[10px] bg-secondary text-white"
        >
          {{ jobsStore.numberOfActiveFilterOptions }}
        </span>
      </p>
      <div
        class="flex items-center justify-center w-12 h-12 bg-sand text-primary"
      >
        <IconFilter
          :class="{ 'text-secondary': jobsStore.numberOfActiveFilterOptions }"
        />
      </div>
    </button>
  </div>
</template>

<script setup lang="ts">
// Components
import IconFilter from '../../icons/Filter.vue'
import O0901JobMarketFilterbarMobileList from './FilterbarMobileList.vue'
import O0901JobMarketFilterbarMobileDetail from './FilterbarMobileDetail.vue'

// Hooks
import { useJobs } from '../../../stores/jobs'
import { useScrollLock } from '../../../composables/useScrollLock'

const jobsStore = useJobs()

const isLocked = useScrollLock()
const showFilterBar = () => {
  jobsStore.isFilterBarActive = true
  isLocked.value = true
}
</script>
