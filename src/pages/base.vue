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

    <h2 class="text-h2 mt-20 mb-6">Text Field 🔖</h2>
    <BaseTextField
      v-model="text"
      label="Keep looking for jobs"
      placeholder="Your job is out there ✨"
    >
      <template #iconPrefix>
        <IconSearch />
      </template>
    </BaseTextField>
    <p v-if="text.length >= 3" class="mt-4">
      Recommended job: {{ recommendedJob }}
    </p>

    <h2 class="text-h2 mt-20">Job Market 💻</h2>

    <div class="grid grid-cols-1 gap-4 mt-6">
      <o-09-01-JobMarketCard v-for="card in jobCards" v-bind="card" />
    </div>

    <div class="grid grid-cols-1 gap-4 mt-10">
      <o-09-01-JobMarketCardSkeleton v-for="card in jobCards" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import IconSearch from '../components/icons/Search.vue'

import BaseCheckbox from '../components/base/Checkbox.vue'
import BaseChip from '../components/base/Chip.vue'
import BaseTextField from '../components/base/TextField.vue'

import O0901JobMarketCard from '../components/organisms/o-09-01-JobMarketCard.vue'
import O0901JobMarketCardSkeleton from '../components/organisms/o-09-01-JobMarketCardSkeleton.vue'

const isChecked = ref(false)
const handleClick = () => console.log('clicked')

const animalsThatILike = ref([])

const text = ref('')
const recommendedJob = computed(() => {
  if (text.value.length < 3) return ''

  const _text = text.value.toLowerCase()
  if (_text.includes('tech')) return 'Software engineer 💻'
  if (_text.includes('green')) return 'Gardener 🥬'
  return 'Latrine cleaner 💩'
})

const jobCards = [
  {
    title:
      'Projektleiter Supply Chain Management / Logistik (m/w/d) - Interieur',
    category: 'Logistik',
    degree: 'Master',
    location: {
      city: 'Munich',
      country: 'GER'
    },
    url: '/jobs/387686'
  },
  {
    title: 'Auszubildende (m/w/d) - Fachkraft für Lagerlogistik LEI',
    category: 'Elektrotechnik',
    degree: 'Master',
    location: {
      city: 'Düsseldorf',
      country: 'GER'
    },
    url: '/jobs/387686',
    isNew: true
  },
  {
    title: 'Commodity Manager Electronics - Embedded SW (m/f/x)',
    category: 'Entwicklung',
    degree: 'Master',
    location: {
      city: 'Leipzig',
      country: 'GER'
    },
    url: '/jobs/387686'
  },
  {
    title:
      'Projektleiter Supply Chain Management / Logistik (m/w/d) - Interieur Projektleiter Supply Chain Management / Logistik (m/w/d) - Interieur',
    category: 'Logistik',
    degree: 'Master',
    location: {
      city: 'Munich',
      country: 'GER'
    },
    url: '/jobs/387686'
  }
]
</script>
