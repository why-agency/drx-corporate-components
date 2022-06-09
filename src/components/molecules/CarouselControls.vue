<template>
  <div class="flex space-x-2">
    <BaseButtonIcon
      color="tertiary"
      variant="outline"
      size="sm"
      @click="go('<')"
    >
      <IconArrowLeftSmall class="w-5" />
    </BaseButtonIcon>
    <BaseButtonIcon
      color="tertiary"
      variant="outline"
      size="sm"
      @click="go('>')"
    >
      <IconArrowRightSmall class="w-5" />
    </BaseButtonIcon>
  </div>
</template>

<script setup>
import BaseButtonIcon from '../base/ButtonIcon.vue'
import IconArrowRightSmall from '../icons/Arrow/RightSmall.vue'
import IconArrowLeftSmall from '../icons/Arrow/LeftSmall.vue'

const props = defineProps({
  go: {
    type: Function,
    default: undefined
  }
})
</script>
