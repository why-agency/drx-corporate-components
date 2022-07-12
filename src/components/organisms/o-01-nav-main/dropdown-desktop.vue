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
          <IconArrowRightFatShort class="ml-2" />
        </BaseHeadline>
      </UseDynamicAction>
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
              <BaseText :text="child.title" class="text-body2"/>
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
              <BaseText :text="child.title" class="text-body2"/>
            </UseDynamicAction>
          </div>
        </div>
        <div class="flex flex-col justify-between max-w-[388px] h-[258px] ml-16">
          <BaseHtmlParser
            :content="data.additionalNaviText1"
          />
          <BaseHtmlParser
          class="mt-auto"
            :content="data.additionalNaviText2"
          />
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
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  }
})

const children = props.data.children

const firstChildren = props.data.children?.slice(0, 5)
const lastChildren = props.data.children?.slice(5)
</script>
