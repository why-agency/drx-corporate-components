<template>
  <div class="px-4">
    <o-09-01-JobMarket v-if="jobsData" :data="jobsData" />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

import O0901JobMarket from '../components/organisms/o-09-01-JobMarket.vue'

const jobMarketUrl = 'https://development.draexlmaier.com/jobs.json/'
const jobsData = ref(null)

onMounted(async () => {
  fetch(jobMarketUrl)
    .then(response => response.json())
    .then(data => jobsData.value = data)
})
</script>
