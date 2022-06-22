<template>
  <section>
    <!-- START job market header -->
    <div class="relative w-full h-96 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:bg-opacity-60">
      <BasePicture :images="data.image" size="w-full h-full" />

      <BaseHeadline color="light" :text="data.header.text" class="absolute z-20 bottom-12 left-6" :size="3" />
    </div>
    <!-- END job market header -->

    <!-- START job market grid -->
    <div class="flex items-center justify-between px-4 mt-12">
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
      <p class="text-body2 font-semibold font-primary ml-4">
        {{ jobsStore.count }} Jobs
      </p>
    </div>

    <div v-if="jobsStore.isRequestPending" class="grid grid-cols-1 gap-4 mt-6 px-4">
      <o-09-01-JobMarketCardSkeleton v-for="card in 10" />
    </div>

    <div v-else class="grid grid-cols-1 gap-4 mt-6 px-4">
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
import BasePicture from '../base/Picture.vue'
import BaseHeadline from '../base/Headline.vue'

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
