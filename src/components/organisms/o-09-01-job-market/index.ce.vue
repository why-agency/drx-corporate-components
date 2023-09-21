<template>
  <section>
    <!-- START job market header -->
    <div
      class="relative w-full h-96 xl:h-[432px] 2xl:h-[592px] 4xl:h-[640px] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-primary after:bg-opacity-25"
    >
      <BasePicture
        v-if="data.image01"
        :images="data.image01"
        size="absolute top-0 left-0 w-full h-full"
      />

      <picture v-else>
        <source
          :srcset="'https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_3x4_GSXse86SO?tr=w-375,ar-3-4,f-auto 1x, https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_3x4_GSXse86SO?tr=w-750,ar-3-4,f-auto,fo-face 2x'"
          media="(max-width: 375px)"
        />
        <source
          :srcset="'https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_3x4_GSXse86SO?tr=w-640,ar-4-3,f-auto 1x, https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_3x4_GSXse86SO?tr=w-1280,ar-4-3,f-auto,fo-face 2x'"
          media="(max-width: 640px)"
        />
        <source
          :srcset="'https://ik.imagekit.io/v2bbhazxb/dev/_processed_/9/a/csm_28-06-2018_Puebla_Photoshoot__13__fb6e90140c.jpg?tr=w-1024,ar-2-1,f-auto,fo-face 1x, https://ik.imagekit.io/v2bbhazxb/dev/_processed_/9/a/csm_28-06-2018_Puebla_Photoshoot__13__fb6e90140c.jpg?tr=w-2048,ar-2-1,f-auto,fo-face 2x'"
          media="(max-width: 1024px)"
        />
        <source
          :srcset="'https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_1440x432_2lz8YbKJL?tr=w-1280,f-auto,fo-face 1x, https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_1440x432_2lz8YbKJL?tr=w-2560,f-auto,fo-face 2x'"
          media="(max-width: 1280px)"
        />
        <source
          :srcset="'https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_1440x432_2lz8YbKJL?tr=w-1440,f-auto,fo-face 1x, https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_1440x432_2lz8YbKJL?tr=w-2880,f-auto,fo-face 2x'"
          media="(max-width: 1440px)"
        />
        <source
          :srcset="'https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_1536x592_D1ONojzFo?tr=w-1536,h-592,f-auto,fo-face 1x, https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_1536x592_D1ONojzFo?tr=w-3072,f-auto,fo-face 2x'"
          media="(max-width: 1536px)"
        />
        <source
          :srcset="'https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_1920x640_6_QiCLbkb?tr=w-1920,ar-3-1,f-auto,fo-face 1x, https://ik.imagekit.io/v2bbhazxb/DRX_job_market_fallback_1920x640_6_QiCLbkb?tr=w-3840,ar-3-1,f-auto,fo-face 2x'"
          media="(max-width: 1920px)"
        />
        <img
          class="absolute top-0 left-0 w-full h-full object-cover"
          src="https://ik.imagekit.io/v2bbhazxb/dev/_processed_/9/a/csm_28-06-2018_Puebla_Photoshoot__13__fb6e90140c.jpg?tr=f-auto,fo-face"
          width="1920"
          height="640"
          alt="Job market image"
        />
      </picture>

      <div
        class="relative flex flex-col justify-end z-20 frame-content-default pb-12 h-full"
      >
        <BaseHeadline
          color="light"
          :text="data.header"
          :size="isLgAndLarger ? 2 : 3"
          tag="h1"
          class="max-w-md xl:max-w-xl lg:mb-10 2xl:mb-20"
        />

        <BaseTextField
          v-model="query"
          id="findJobs"
          label="Keep looking for jobs"
          hide-button
          hide-label
          :placeholder="jobsStore.labels.searchInputPlaceholder"
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
    <div
      style="margin-top: 1.5rem; margin-bottom: 1.5rem"
      class="frame-content-default flex items-center justify-between lg:justify-end xlmt-12"
    >
      <BaseTextField
        v-model="query"
        label="Keep looking for jobs"
        hide-button
        hide-label
        :placeholder="jobsStore.labels.searchInputPlaceholder"
        class="flex-1 lg:hidden"
      >
        <template #iconPrefix>
          <IconSearch />
        </template>
      </BaseTextField>
      <p
        v-if="jobsStore.count > 0"
        style="margin-bottom: 0 !important; color: black !important"
        class="text-body2 font-semibold font-primary ml-4"
      >
        {{ jobsStore.count }} {{ jobsStore.labels.jobsCount }}
      </p>
    </div>

    <div class="frame-content-default">
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
      class="frame-content-default mt-16"
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
jobsStore.count =
  props.data.jobsProcessed?.allResultCount || props.data.allResultCount
jobsStore.url =
  props.data.jobsProcessed?.currentSearch || props.data.currentSearch
jobsStore.persistJobs(
  props.data.jobsProcessed?.documents || props.data.documents
)
jobsStore.persistFilters(props.data.jobsProcessed?.facets || props.data.facets)
console.log(props.data.facets)
jobsStore.persistLabels(props.data)

jobsStore.setActiveFilterOptions(props.data.activeFilters || [])
console.log(props.data.activeFilters)
console.log(jobsStore.activeFilterOptions)

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
