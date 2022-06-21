<template>
    <div>
        <BaseButtonIcon></BaseButtonIcon>
        <BaseHeadline :text="headline" />
        <BaseText :text="text"/>
        <BaseAction :to="action"/>
    </div>
</template>
<script setup>
import BaseHeadline from '../../base/Headline.vue'
import BaseAction from '../../base/Action.vue'
import BaseText from '../../base/Text.vue'
import BaseButtonIcon from '../../base/ButtonIcon.vue'
const props = defineProps({
  icon: {
    type: Object,
    default: () => ({})
  },
  headline: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  action: {
    type: Object,
    default: () => ({})
  }
})
</script>