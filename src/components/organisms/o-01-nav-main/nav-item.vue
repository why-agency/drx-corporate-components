<template>
  <div>
    <BaseDropdown
      v-if="dropdown.children"
      :text="dropdown.title"
      :link="dropdown.link"
      :color="color"
      isNav
      @clicked="$emit('item-clicked', dropdown)"
    >
      <slot />
    </BaseDropdown>
    <UseDynamicAction
      v-else
      :to="dropdown.link"
      :tag="dropdown.link ? 'a' : 'div'"
      :target="dropdown.target"
      class="!text-primary  hover:!text-secondary"
    >
      <BaseText
        :animate="false"
        :class="color"
        class="text-body1 font-bold flex items-center xl:block hover:!text-secondary"
      >
        {{ dropdown.title }}
        <IconArrowRightFatShort class="!ml-2 h-4 xl:hidden" />
      </BaseText>
    </UseDynamicAction>
  </div>
</template>

<script setup>
import BaseDropdown from '../../base/Dropdown.vue'
import UseDynamicAction from '../UseDynamicAction.vue'
import BaseText from '../../base/Text.vue'
import IconArrowRightFatShort from '../../icons/Arrow/RightFatShort.vue'

const props = defineProps({
  dropdown: {
    type: Object,
    required: true
  },
  color: {
    type: String,
    default: ''
  }
})
</script>
