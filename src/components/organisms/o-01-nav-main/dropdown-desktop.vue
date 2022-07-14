<template>
  <section
    class="hidden xl:block absolute left-0 w-full bg-white h-[528px] pt-9"
  >
    <div class="frame-content-default">
      <UseDynamicAction
        :to="data.link"
        :tag="data.link ? 'a' : 'div'"
        :target="data.target"
      >
        <BaseHeadline
          :size="4"
          tag="h4"
          class="text-secondary hover:text-tertiary flex items-end"
        >
          {{ data.navDropdownHeadline }}
          <IconArrowRightFatShort class="ml-2 h-6" />
        </BaseHeadline>
      </UseDynamicAction>
      <div class="flex mt-12 justify-between">
        <div class="flex">
          <!-- Left side -->
          <dropdown-column v-if="firstChildren.length" :items="firstChildren" />
          <!-- Right side -->
          <dropdown-column v-if="lastChildren.length" :items="lastChildren" class="pl-16" />
        </div>
        <div
          class="flex flex-col justify-between min-w-[388px] max-w-[508px] h-[258px] ml-16 text-body2"
        >
          <div>
            <!-- First additional text -->
            <div
              v-if="header1Url"
              class="flex hover:text-tertiary font-bold text-secondary text-body2 items-end"
            >
              <UseDynamicAction
                :to="header1Url"
                :tag="'a'"
                :target="add1Header.target"
              >
                <BaseText :text="add1Header.link" class="text-body2" />
              </UseDynamicAction>
              <IconArrowRight class="ml-2" />
            </div>
            <BaseText
              v-else-if="add1Header"
              :text="add1Header"
              class="font-bold text-secondary text-body2"
            />
            <BaseText
              v-if="data.additionalNaviText1"
              :text="data.additionalNaviText1"
              class="text-body2"
            />
          </div>
          <div>
            <!-- Second additional text -->
            <div
              v-if="header2Url"
              class="hover:text-tertiary font-bold text-secondary text-body2"
            >
              <UseDynamicAction
                :to="header2Url"
                :tag="'a'"
                :target="add2Header.target"
              >
                <BaseText :text="add2Header.link" class="text-body2" />
              </UseDynamicAction>
              <IconArrowRight class="ml-2" />
            </div>
            <BaseText
              v-else-if="add2Header"
              :text="add2Header"
              class="font-bold text-secondary text-body2"
            />
            <BaseText
              class="mt-auto text-body2"
              v-if="data.additionalNaviText2"
              :text="data.additionalNaviText2"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseHeadline from '../../base/Headline.vue'
import BaseText from '../../base/Text.vue'
import BaseHtmlParser from '../../base/HtmlParser.vue'
import UseDynamicAction from '../../organisms/UseDynamicAction.vue'
import IconArrowRightFatShort from '../../icons/Arrow/RightFatShort.vue'
import IconArrowRight from '../../icons/Arrow/Right.vue'
import DropdownColumn from './dropdown-column.vue'

import { computed } from 'vue'
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})
const add1Header = props.data.additionalNaviHeader1
const add2Header = props.data.additionalNaviHeader2
const header1Url = computed(() => add1Header?.url)
const header2Url = computed(() => add2Header?.url)

const firstChildren = props.data.children?.slice(0, 5)
const lastChildren = props.data.children?.slice(5)
</script>
