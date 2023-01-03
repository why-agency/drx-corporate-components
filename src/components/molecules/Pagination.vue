<template>
  <div class="bg-white py-3 flex items-center justify-between">
    <!-- START mobile pagination -->
    <div class="flex-1 flex justify-between items-center sm:hidden">
      <BaseButtonIcon @click="goToPreviousTrack">
        <span class="sr-only">Previous</span>
        <IconChevronUp class="-rotate-90 h-6 w-6" aria-hidden="true" />
      </BaseButtonIcon>

      <p style="margin-bottom: 0 !important">{{ trackCounter + 1 }}</p>

      <BaseButtonIcon @click="goToNextTrack">
        <span class="sr-only">Next</span>
        <IconChevronUp class="rotate-90 h-6 w-6" aria-hidden="true" />
      </BaseButtonIcon>
    </div>
    <!-- END mobile pagination -->

    <!-- START desktop pagination -->
    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-end">
      <nav class="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
        <button
          class="relative inline-flex items-center px-2 py-2 text-primary hover:text-secondary"
          @click="goToPreviousTrack"
        >
          <span class="sr-only">Previous</span>
          <IconChevronUp class="-rotate-90 h-6 w-6" aria-hidden="true" />
        </button>

        <template v-if="pages > 6">
          <!-- Render beginningSpread -->
          <template v-if="currentTrack.length < 9">
            <button
              v-for="page in currentTrack.slice(0, currentTrack.length - 1)"
              aria-current="page"
              class="min-w-[54px] z-10 text-body2 hover:text-secondary relative inline-flex justify-center items-center px-4 py-2 font-medium"
              :class="{
                'text-primary border-b-primary border-b-2':
                  page === currentPage,
                'text-gray-700': page !== currentPage
              }"
              @click="changePage(page)"
            >
              {{ page + 1 }}
            </button>
          </template>

          <template v-else>
            <button
              v-for="page in currentTrack.slice(0, 3)"
              aria-current="page"
              class="min-w-[54px] z-10 text-body2 hover:text-secondary relative inline-flex justify-center items-center px-4 py-2 font-medium"
              :class="{
                'text-primary border-b-primary border-b-2':
                  page === currentPage,
                'text-gray-700': page !== currentPage
              }"
              @click="changePage(page)"
            >
              {{ page + 1 }}
            </button>
            <span
              class="z-10 text-gray-700 text-body2 relative inline-flex justify-center items-center px-4 py-2 font-medium"
            >
              ...
            </span>
            <button
              v-for="page in currentTrack.slice(6, 9)"
              aria-current="page"
              class="min-w-[54px] z-10 text-body2 hover:text-secondary relative inline-flex justify-center items-center px-4 py-2 font-medium"
              :class="{
                'text-primary border-b-primary border-b-2':
                  page === currentPage,
                'text-gray-700': page !== currentPage
              }"
              @click="changePage(page)"
            >
              {{ page + 1 }}
            </button>
          </template>
        </template>

        <template v-else>
          <button
            v-for="page in currentTrack.slice(0, 5)"
            aria-current="page"
            class="min-w-[54px] z-10 text-body2 hover:text-secondary relative inline-flex justify-center items-center px-4 py-2 font-medium"
            :class="{
              'text-primary border-b-primary border-b-2': page === currentPage,
              'text-gray-700': page !== currentPage
            }"
            @click="changePage(page)"
          >
            {{ page + 1 }}
          </button>
        </template>

        <button
          class="relative inline-flex items-center px-2 py-2 text-primary hover:text-secondary"
          @click="goToNextTrack"
        >
          <span class="sr-only">Next</span>
          <IconChevronUp class="rotate-90 h-6 w-6" aria-hidden="true" />
        </button>
      </nav>
    </div>
    <!-- END desktop pagination -->
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

// Components
import IconChevronUp from '../icons/ChevronUp.vue'

import BaseButtonIcon from '../base/ButtonIcon.vue'

const props = defineProps({
  pages: {
    type: Number,
    default: 0
  },
  currentPage: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['change'])

const trackCounter = ref(0)
const currentTrack = computed(() =>
  [0, 1, 2, 3, 4, 5, 6, 7, 8]
    .map(page => page + trackCounter.value * 3)
    .filter(page => page <= props.pages)
)

const goToPreviousTrack = (): void => {
  if (currentTrack.value.at(0) === 0) return

  trackCounter.value--
  // @ts-ignore
  changePage(currentTrack.value.at(0))
}

const goToNextTrack = (): void => {
  // @ts-ignore
  if (currentTrack.value.at(-1) >= props.pages) return

  trackCounter.value++
  //@ts-ignore
  changePage(currentTrack.value.at(0))
}

const changePage = (page: number) => {
  if (page === props.currentPage) return

  emit('change', page)
}
</script>
