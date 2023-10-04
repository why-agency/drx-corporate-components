<template>
  <div
    class="flex flex-col space-y-7 w-[312px] h-[258px] border-r border-tertiary border-opacity-50"
  >
    <UseDynamicAction
      v-for="item in items"
      :key="item"
      :to="item.link"
      :tag="item.link ? 'a' : 'div'"
      :target="item.target"
      class="!text-primary hover:!text-tertiary"
    >
      <BaseText :text="item.title" class="text-body2" />
    </UseDynamicAction>
  </div>
</template>

<script setup>
import UseDynamicAction from '../../organisms/UseDynamicAction.vue'
import BaseText from '../../base/Text.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>
