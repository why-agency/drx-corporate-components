<template>
  <div class="mb-4">
    <BaseHeadline v-bind="headlineProps" />
    <BaseSubline text="This is a subline" :layout="2" />
    <BaseAction to="https://draexlmaier.loc/">
      Action
      <template v-slot:iconSuffix>
        <ArrowDownFat />
      </template>
      <template v-slot:iconPrefix>
        <ArrowLeftFat />
      </template>
    </BaseAction>
    <BaseHeadline text="Testing real data below" />
    <div>{{ overline }}</div>
    <div>{{ quote }}</div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue'
import BaseHeadline from '../base/Headline.vue'
import BaseSubline from '../base/Subline.vue'
import BaseAction from '../base/Action.vue'
import ArrowDownFat from '../icons/Arrow/DownFat.vue'
import ArrowLeftFat from '../icons/Arrow/LeftFat.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const headlineProps = ref({ text: 'This is a headline', layout: 3, tag: 'h2' })

const overline = computed(() => props.data?.content?.overline)
const text = computed(() => props.data?.content?.quote?.text)
</script>
