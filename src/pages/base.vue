<template>
  <div class="my-10 mx-4">
    <h2 class="text-h2 mb-6">Checkoxes ✅</h2>

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

    <h2 class="text-h2 mt-20">Chips 🍟</h2>
    <div class="flex gap-4 mt-6">
      <BaseChip @click="handleClick">Germany</BaseChip>
      <BaseChip color="white" @click="handleClick">Clear all filters</BaseChip>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import BaseCheckbox from '../components/base/Checkbox.vue'
import BaseChip from '../components/base/Chip.vue'

const isChecked = ref(false)
const handleClick = () => console.log('clicked')

const animalsThatILike = ref([])
</script>
