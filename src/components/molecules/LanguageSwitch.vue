<template>
  <BaseDropdown
    ref="wrapper"
    :text="$_currentLanguage"
    textWeigth="font-normal uppercase text-body3"
    :color="linkColor"
    @click="toggle()"
  >
    <div v-if="clickedLang" class="absolute">
      <UseDynamicAction
        v-for="lang in showList"
        :key="lang"
        :to="lang.link ? lang.link : currentRoute"
        :tag="'a'"
        class="flex flex-col"
        :class="lang.link ? linkColor : 'text-gray-700 cursor-auto'"
      >
        <BaseText
          :text="lang.hreflang"
          class="text-body3 uppercase"
          @click="changeLabel(ang.hreflang)"
          :animate="false"
        />
      </UseDynamicAction>
    </div>
  </BaseDropdown>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref, computed, toRefs, onMounted } from 'vue'
import UseDynamicAction from '../organisms/UseDynamicAction.vue'
import BaseDropdown from '../base/Dropdown.vue'
import BaseText from '../base/Text.vue'
const props = defineProps({
  language: {
    type: Array,
    default: undefined
  },
  color: {
    type: String,
    default: 'text-primary'
  }
})

const $_currentLanguage = computed(() => {
  let name = ''
  props.language.forEach(lang => {
    if (lang.active === 1) {
      name = lang.hreflang
    }
  })
  return name
})

const showList = computed(() => {
  let list = []
  props.language.forEach(lang => {
    if (lang.active === 0) {
      list.push(lang)
    }
  })
  return list
})

const clickedLang = ref(false)

function changeLabel(label) {
  $_currentLanguage = label
}
function toggle() {
  clickedLang.value = !clickedLang.value
}

const wrapper = ref(false)
onClickOutside(wrapper, () => {if(clickedLang.value){clickedLang.value = !clickedLang.value}})

const currentRoute = computed(() => {
  let route = ''
  props.language.forEach(lang => {
    if (lang.active === 1) {
      route = lang.link
    }
  })
  return route
})

const linkColor = computed(() => `${props.color} hover:text-secondary`)
</script>
