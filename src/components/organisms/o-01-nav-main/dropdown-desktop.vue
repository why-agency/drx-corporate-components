<template>
  <section
    class="hidden xl:block absolute left-0 w-full bg-white h-[558px] pt-9"
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
          <IconArrowRightFatShort class="ml-2" />
        </BaseHeadline>
      </UseDynamicAction>
      <!-- Children -->
      <div class="flex mt-12 justify-between">
        <div class="flex">
          <div
            v-if="firstChildren.length !== 0"
            class="flex flex-col space-y-7 w-[312px] h-[258px] border-r border-tertiary border-opacity-50"
          >
            <!-- Left side -->
            <UseDynamicAction
              v-for="child in firstChildren"
              :key="child"
              :to="child.link"
              :tag="child.link ? 'a' : 'div'"
              :target="child.target"
              class="hover:text-tertiary"
            >
              <BaseText :text="child.title" class="text-body2" />
            </UseDynamicAction>
          </div>
          <div
            v-if="lastChildren.length !== 0"
            class="flex flex-col space-y-7 pl-16 w-[312px] h-[258px] border-r border-tertiary border-opacity-50"
          >
            <!-- Right side -->
            <UseDynamicAction
              v-for="child in lastChildren"
              :key="child"
              :to="child.link"
              :tag="child.link ? 'a' : 'div'"
              :target="child.target"
              class="hover:text-tertiary"
            >
              <BaseText :text="child.title" class="text-body2" />
            </UseDynamicAction>
          </div>
        </div>
        <!-- Additional text -->
        <div
          class="flex flex-col !justify-between w-[328px] h-[258px] ml-16 text-body2"
        >
          <div>
            <!-- First additional text -->
            <div
              v-if="props.data.additionalNaviHeader1 && header1IsLink"
              class="flex hover:text-tertiary font-bold text-secondary text-body2 items-end mb-2"
            >
              <UseDynamicAction
                :to="props.data.additionalNaviHeader1.url"
                :tag="'a'"
                :target="props.data.additionalNaviHeader1.target"
              >
                <BaseText
                  :text="props.data.additionalNaviHeader1.link"
                  class="text-body2"
                />
              </UseDynamicAction>
              <IconArrowRight class="ml-2" />
            </div>
            <BaseText
              v-else-if="props.data.additionalNaviHeader1"
              :text="props.data.additionalNaviHeader1"
              class="font-bold text-secondary text-body2 mb-2"
            />
            <BaseText
              v-if="data.additionalNaviText1"
              :text="data.additionalNaviText1"
              class="text-body2 leading-8"
            />
          </div>
          <div>
            <!-- Second additional text -->
            <div
              v-if="props.data.additionalNaviHeader2 && header2IsLink"
              class="hover:text-tertiary font-bold text-secondary text-body2 mb-2"
            >
              <UseDynamicAction
                :to="props.data.additionalNaviHeader2.url"
                :tag="'a'"
                :target="props.data.additionalNaviHeader2.target"
              >
                <BaseText
                  :text="props.data.additionalNaviHeader2.link"
                  class="text-body2"
                />
              </UseDynamicAction>
              <IconArrowRight class="ml-2" />
            </div>
            <BaseText
              v-else-if="props.data.additionalNaviHeader2"
              :text="props.data.additionalNaviHeader2"
              class="font-bold text-secondary text-body2 mb-2"
            />
            <BaseText
              class="mt-auto text-body2 leading-8"
              v-if="data.additionalNaviText2"
              :text="data.additionalNaviText2"
            />
          </div>
        </div>
      </div>
    </div>
    <BaseHtmlParser
      id="newSocialIcons"
      :content="social"
      class="float-right mr-8 mt-12"
    />
  </section>
</template>

<script setup>
import BaseHeadline from '../../base/Headline.vue'
import BaseText from '../../base/Text.vue'
import BaseHtmlParser from '../../base/HtmlParser.vue'
import UseDynamicAction from '../../organisms/UseDynamicAction.vue'
import IconArrowRightFatShort from '../../icons/Arrow/RightFatShort.vue'
import IconArrowRight from '../../icons/Arrow/Right.vue'
import { computed } from 'vue'
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

const header1IsLink = computed(() => {
  return props.data.additionalNaviHeader1 instanceof Object
})

const header2IsLink = computed(() => {
  return props.data.additionalNaviHeader2 instanceof Object
})

const children = props.data.children

const firstChildren = props.data.children?.slice(0, 5)
const lastChildren = props.data.children?.slice(5)
</script>

<style>
#newSocialIcons ul {
  display: flex;
  margin-top: 52px;
}

#newSocialIcons ul li {
  margin-right: 33px;
}
</style>
