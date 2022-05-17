<template>
  <div>
    <h1 class="text-red-500">This is a test {{ headline }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  headline: String
})
</script>