<template>
  <div>
    <BasePicture v-if="icon" :images="icon" size="w-content h-10 !mb-6" />
    <BaseHeadline
      v-if="headline"
      :text="headline"
      tag="h3"
      :color="color"
      :size="3"
      class="!mb-6 w-full lg:max-w-[504px]"
    />
    <BaseText
      :text="text"
      :class="[
        textSize,
        {
          'text-sand': color === 'light',
          'text-primary': color === 'dark'
        }
      ]"
      class="w-full lg:max-w-[504px] mb-10"
    />
    <OverlayTrigger
      v-if="overlay && overlay.length"
      class="!mb-4"
      @show-overlay="$emit('overlay-visible', overlay)"
    />
    <BaseAction
      v-for="action in actions"
      :key="action"
      :to="action.content.link.url"
    >
      <BaseHtmlParser :content="action.content.text" tag="span" />
      <template #icon>
        <IconArrowRight />
      </template>
    </BaseAction>
  </div>
</template>

<script setup>
import BasePicture from '../../base/Picture.vue'
import BaseHeadline from '../../base/Headline.vue'
import BaseHtmlParser from '../../base/HtmlParser.vue'
import BaseAction from '../../base/Action.vue'
import BaseText from '../../base/Text.vue'
import IconArrowRight from '../../icons/Arrow/Right.vue'
import OverlayTrigger from '../o-06-08-overlay/trigger.vue'

const props = defineProps({
  color: {
    type: String,
    default: 'light'
  },
  icon: {
    type: Object,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  textSize: {
    type: String,
    required: true
  },
  actions: {
    type: Object,
    required: true
  },
  overlay: {
    type: Array,
    default: null
  }
})
</script>
