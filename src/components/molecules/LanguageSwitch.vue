<template>
  <BaseDropdown
    ref="wrapper"
    :text="currentLanguage.hreflang"
    textWeigth="font-normal uppercase text-body3"
    :color="linkColor"
    @click="toggle"
  >
    <div v-if="clickedLang" class="absolute">
      <UseDynamicAction
        v-for="lang in showList"
        :key="lang"
        :to="lang.link"
        class="flex flex-col"
        :class="lang.link ? linkColor : 'text-gray-700 !cursor-auto'"
      >
        <BaseText
          :text="lang.hreflang"
          class="text-body3 uppercase"
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
  languages: {
    type: Array,
    default: undefined
  },
  color: {
    type: String,
    default: 'text-primary'
  }
})

const currentLanguage = computed(() =>
  props.languages?.find(lang => lang.active === 1)
)

const showList = computed(() =>
  props.languages?.filter(lang => lang.active === 0)
)

const clickedLang = ref(false)

function toggle() {
  clickedLang.value = !clickedLang.value
}

const wrapper = ref(false)
onClickOutside(wrapper, () => {
  if (clickedLang.value) {
    clickedLang.value = !clickedLang.value
  }
})

const linkColor = computed(() => `${props.color} hover:text-secondary`)
</script>
