<template>
  <div
    class="flex frame-default space-x-2 absolute lg:bottom-20 left-0 invisible"
  >
    <BaseButtonIcon
      :color="isDark ? 'white' : 'primary'"
      variant="outline"
      @click="go('<')"
    >
      <IconArrowLeftSmall />
    </BaseButtonIcon>
    <BaseButtonIcon
      :color="isDark ? 'white' : 'primary'"
      variant="outline"
      @click="go('>')"
    >
      <IconArrowRightSmall />
    </BaseButtonIcon>
  </div>
</template>

<script setup>
import BaseButtonIcon from '../base/ButtonIcon.vue'
import IconArrowRightSmall from '../icons/Arrow/RightSmall.vue'
import IconArrowLeft from '../icons/Arrow/LeftSmall.vue'

const props = defineProps({
  isDark: {
    type: Boolean,
    default: false
  },
  go: {
    type: Function,
    default: undefined
  }
})
</script>
