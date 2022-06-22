<template>
  <section>
    <!-- START job market header -->
    <!-- END job market header -->

    <!-- START job market grid -->
    <div class="flex items-center justify-between">
      <BaseTextField
        v-model="query"
        label="Keep looking for jobs"
        hide-button
        hide-label
        placeholder="Find your dream job ✨"
      >
        <template #iconPrefix>
          <IconSearch />
        </template>
      </BaseTextField>
      <p class="text-body2 font-semibold font-primary">
        {{ jobsStore.count }} Jobs
      </p>
    </div>

    <div v-if="jobsStore.isRequestPending" class="grid grid-cols-1 gap-4 mt-6">
      <o-09-01-JobMarketCardSkeleton v-for="card in 10" />
    </div>

    <div v-else class="grid grid-cols-1 gap-4 mt-6">
      <o-09-01-JobMarketCard
        v-for="job in jobsStore.jobs.slice(0, 10)"
        v-bind="job"
      />
    </div>
    <!-- END job market grid -->

    <!-- START mobile filter bar -->
    <o09-01-JobMarketFilterbarMobile />
    <!-- END mobile filter bar -->

    <!-- START pagination -->
    <!-- END pagination -->
  </section>
</template>

<script setup lang="ts">
import { computed, onUnmounted } from 'vue'

// Hooks
import { useDebounceFn } from '@vueuse/core'
import { useJobs } from '../../stores/jobs'

// Components
import IconSearch from '../icons/Search.vue'

import BaseTextField from '../base/TextField.vue'

import O0901JobMarketCard from './o-09-01-JobMarketCard.vue'
import O0901JobMarketCardSkeleton from './o-09-01-JobMarketCardSkeleton.vue'
import O0901JobMarketFilterbarMobile from './o-09-01-JobMarketFilterbarMobile.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const jobsStore = useJobs()
jobsStore.count = props.data.allResultCount
jobsStore.url = props.data.currentSearch
jobsStore.persistJobs(props.data.documents)
jobsStore.persistFilters(props.data.facets)

const query = computed({
  get() {
    return jobsStore.query
  },
  set: useDebounceFn(value => {
    jobsStore.setQuery(value)
  }, 500)
})

const subscribedActions = ['setQuery', 'setActiveFilterOptions']
const unsubscribe = jobsStore.$onAction(({ name, after }) => {
  after(async () => {
    if (subscribedActions.includes(name)) {
      await jobsStore.getJobs()
    }
  })
})

onUnmounted(() => {
  unsubscribe()
})
</script>
