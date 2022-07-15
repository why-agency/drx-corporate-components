<template>
  <section>
    <!-- links -->
    <dropdown-column
      class="border-r-0 !mt-8 !h-max"
      v-if="data.children !== null"
      :items="data.children"
    />
    <!-- start additional text -->
    <div class="w-full !mt-8 text-body2">
      <additional-text
        v-if="data.additionalNaviHeader1 || data.additionalNaviText1"
        :header="data.additionalNaviHeader1"
        :text="data.additionalNaviText1"
        class="mb-8"
      />
      <additional-text
        v-if="data.additionalNaviHeader2 || data.additionalNaviHeader2"
        :header="data.additionalNaviHeader2"
        :text="data.additionalNaviText2"
      />
    </div>
    <!-- end additional text -->
  </section>
</template>

<script setup>
import BaseHeadline from '../../base/Headline.vue'
import BaseHtmlParser from '../../base/HtmlParser.vue'
import UseDynamicAction from '../../organisms/UseDynamicAction.vue'
import IconArrowRightFatShort from '../../icons/Arrow/RightFatShort.vue'
import DropdownColumn from './dropdown-column.vue'
import AdditionalText from './additional-text.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
</script>
