<template>
  <section
    class="hidden xl:block absolute left-0 w-full bg-white h-[558px] !pt-9"
  >
    <div class="frame-content-default">
      <!-- start headline -->
      <UseDynamicAction
        :to="data.link"
        :tag="data.link ? 'a' : 'div'"
        :target="data.target"
        class="text-black"
      >
        <BaseHeadline
          :size="4"
          tag="h4"
          class="text-secondary hover:text-tertiary flex items-end"
        >
          {{ data.navDropdownHeadline }}
          <IconArrowRightFatShort class="!ml-2 h-6" />
        </BaseHeadline>
      </UseDynamicAction>
      <!-- end headline -->

      <div class="flex mt-12 justify-between">
        <!-- start links -->
        <div class="flex">
          <!-- Left links column -->
          <dropdown-column v-if="firstChildren.length" :items="firstChildren" />
          <!-- Right link column -->
          <dropdown-column
            v-if="lastChildren.length"
            :items="lastChildren"
            class="pl-16"
          />
        </div>
        <!-- end links -->

        <!-- start additional text -->
        <div
          class="flex flex-col justify-between w-[328px] h-[258px] ml-16 text-body2"
        >
          <additional-text
            v-if="data.additionalNaviHeader1 || data.additionalNaviText1"
            :header="data.additionalNaviHeader1"
            :text="data.additionalNaviText1"
          />
          <additional-text
            v-if="data.additionalNaviHeader2 || data.additionalNaviHeader2"
            :header="data.additionalNaviHeader2"
            :text="data.additionalNaviText2"
          />
        </div>
        <!-- end additional text -->
      </div>
    </div>
    <BaseHtmlParser
      :content="social"
      class="newSocialIcons float-right !mr-8 mt-12"
    />
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
  },
  social: {
    type: String,
    default: ''
  }
})
const firstChildren = props.data.children?.slice(0, 5)
const lastChildren = props.data.children?.slice(5)
</script>

<style>
.newSocialIcons ul {
  display: flex;
  margin-top: 52px;
}

.newSocialIcons ul li {
  margin-right: 33px;
}
</style>
