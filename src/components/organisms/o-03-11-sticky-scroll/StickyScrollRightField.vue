<template>
  <div>
    <BasePicture :images="icon" size="w-content h-10 mb-6" />
    <BaseHeadline
      v-if="headline"
      :text="headline"
      tag="h3"
      :color="color"
      :layout="3"
      class="mb-6"
    />
    <BaseHtmlParser
      :content="text"
      :class="[
        textSize,
        {
          'text-sand': color === 'light',
          'text-primary': color === 'dark'
        }
      ]"
      class="w-full lg:max-w-[504px] mb-10"
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
import IconArrowRight from '../../icons/Arrow/Right.vue'
import { ref } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    required: true
  },
  color: {
    type: String,
    default: 'light'
  }
})

const icon = ref(props.data?.icon)
const headline = ref(props.data?.headline)
const text = ref(props.data?.text?.text)
const textSize = ref(props.data?.text?.size)
const actions = ref(props.data?.actions)
</script>
