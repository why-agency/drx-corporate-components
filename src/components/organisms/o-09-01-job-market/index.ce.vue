<template>
  <section>
    <!-- START job market header -->
    <div
      class="relative w-full h-96 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:bg-opacity-60"
    >
      <BasePicture v-if="data.image" :images="data.image" size="w-full h-full" />

      <div class="absolute z-20 bottom-12 left-4 xl:left-10">
        <BaseHeadline v-if="data.header && data.header.text" color="light" :text="data.header.text" :size="3" />
        <BaseTextField
          v-model="query"
          label="Keep looking for jobs"
          hide-button
          hide-label
          placeholder="Find your dream job ✨"
          class="hidden lg:block bg-transparent border-sand text-sand placeholder:text-sand"
        >
          <template #iconPrefix>
            <IconSearch />
          </template>
        </BaseTextField>
      </div>
    </div>
    <!-- END job market header -->

    <!-- START desktop filter bar -->
    <o-09-01-JobMarketFilterbar v-if="isLgAndLarger" />
    <!-- END desktop filter bar -->

    <!-- START job market grid -->
    <div style="margin: 0 1rem;" class="flex items-center justify-between lg:justify-end mt-12 xl:mx-10">
      <BaseTextField
        v-model="query"
        label="Keep looking for jobs"
        hide-button
        hide-label
        placeholder="Find your dream job ✨"
        class="flex-1 lg:hidden"
      >
        <template #iconPrefix>
          <IconSearch />
        </template>
      </BaseTextField>
      <p
        v-if="jobsStore.count > 0"
        style="margin-bottom: 0 !important;"
        class="text-body2 font-semibold font-primary ml-4"
      >
        {{ jobsStore.count }} Jobs
      </p>
    </div>

    <div style="margin: 1.5rem 1rem" class="xl:mx-10">
      <div v-if="jobsStore.isRequestPending" class="grid grid-cols-1 gap-4">
        <o-09-01-JobMarketCardSkeleton v-for="card in 10" />
      </div>

      <div v-else-if="jobsStore.count === 0">
        <p class="text-body2 font-semibold font-primary">
          We couldn't find jobs that match the selected filter criteria.
        </p>
        <BaseAction class="mt-4" @click.native="jobsStore.clearFilters">
          Clear filters
        </BaseAction>
      </div>

      <div v-else class="grid grid-cols-1 gap-4">
        <o-09-01-JobMarketCard
          v-for="job in jobsStore.jobsToDisplay"
          v-bind="job"
        />
      </div>
    </div>
    <!-- END job market grid -->

    <!-- START mobile filter bar -->
    <o09-01-JobMarketFilterbarMobile v-if="!isLgAndLarger" />
    <!-- END mobile filter bar -->

    <!-- START pagination -->
    <MPagination
      style="margin-right: 1rem"
      class="mt-16 xl:mr-10"
      :pages="jobsStore.numberOfPages"
      :current-page="jobsStore.currentPage"
      @change="onPageChange"
    />
    <!-- END pagination -->
  </section>
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue'

// Hooks
import {
  useDebounceFn,
  useBreakpoints,
  breakpointsTailwind
} from '@vueuse/core'
import { useJobs } from '../../../stores/jobs'

// Components
import IconSearch from '../../icons/Search.vue'

import BaseTextField from '../../base/TextField.vue'
import BasePicture from '../../base/Picture.vue'
import BaseHeadline from '../../base/Headline.vue'
import BaseAction from '../../base/Action.vue'

import MPagination from '../../molecules/Pagination.vue'

import O0901JobMarketCard from './Card.vue'
import O0901JobMarketCardSkeleton from './CardSkeleton.vue'
import O0901JobMarketFilterbarMobile from './FilterbarMobile.vue'
import O0901JobMarketFilterbar from './Filterbar.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const breakpoints = useBreakpoints(breakpointsTailwind)
const isLgAndLarger = breakpoints.greater('lg')

const jobsStore = useJobs()
jobsStore.count = props.data.jobsProcessed?.allResultCount || props.data.allResultCount
jobsStore.url = props.data.jobsProcessed?.currentSearch || props.data.currentSearch
jobsStore.persistJobs(props.data.jobsProcessed?.documents || props.data.documents)
jobsStore.persistFilters(props.data.jobsProcessed?.facets || props.data.facets)

const query = computed({
  get() {
    return jobsStore.query
  },
  set: useDebounceFn(value => {
    jobsStore.setQuery(value)
  }, 500)
})

const subscribedActions = [
  'setQuery',
  'setActiveFilterOptions',
  'clearFilterOption',
  'clearFilters'
]
const unsubscribe = jobsStore.$onAction(({ name, after }) => {
  after(async () => {
    if (subscribedActions.includes(name)) {
      await jobsStore.getJobs()
    }
  })
})

const onPageChange = (page: number): void => {
  jobsStore.currentPage = page
}

onUnmounted(() => {
  unsubscribe()
})
</script>
