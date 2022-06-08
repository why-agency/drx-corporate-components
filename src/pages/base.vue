<template>
  <div class="my-10 mx-4">
    <BaseCheckbox v-model="isChecked">Check me, please 🙌</BaseCheckbox>

    <p class="mt-10">
      Which animals do you like?
      <span>{{ animalsThatILike.join(' ') }}</span>
    </p>
    <div class="flex gap-10 mt-6">
      <BaseCheckbox v-model="animalsThatILike" value="🦊">🦊</BaseCheckbox>
      <BaseCheckbox v-model="animalsThatILike" value="🦅">🦅</BaseCheckbox>
      <BaseCheckbox v-model="animalsThatILike" value="🐍">🐍</BaseCheckbox>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import BaseCheckbox from '../components/base/Checkbox.vue'

const isChecked = ref(false)
const animalsThatILike = ref([])
</script>
