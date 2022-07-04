<template>
  <BaseAction
    color="tertiary"
    class="text-left"
    @click="$emit('show-overlay')"
  >
    {{ triggerText }}
    <template #icon>
      <IconExpand />
    </template>
  </BaseAction>
</template>

<script setup>
import BaseAction from '../../base/Action.vue'
import IconExpand from '../../icons/Expand.vue'

const triggerText = 'Mehr erfahren'
</script>
