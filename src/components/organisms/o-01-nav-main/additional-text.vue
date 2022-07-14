<template>
  <div>
    <!-- First additional text -->
    <div
      v-if="url"
      class="flex hover:text-tertiary font-bold text-secondary text-body2 items-end"
    >
      <UseDynamicAction :to="url" :target="header.target">
        <BaseText :text="header.title || header.link" class="text-body2" />
      </UseDynamicAction>
      <IconArrowRight class="ml-2" />
    </div>
    <BaseText
      v-else-if="header"
      :text="header"
      :size="2"
      class="font-bold text-secondary"
    />
    <BaseText v-if="text" :text="text" size="2" />
  </div>
</template>

<script setup>
import { computed } from 'vue'

import BaseText from '../../base/Text.vue'
import UseDynamicAction from '../../organisms/UseDynamicAction.vue'
import IconArrowRight from '../../icons/Arrow/Right.vue'

const props = defineProps({
  header: {
    type: [Object, String],
    default: null
  },
  text: {
    type: String,
    default: ''
  }
})

const url = computed(() => props.header?.url)
</script>
