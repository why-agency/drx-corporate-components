<template>
  <section
    class="w-full flex bg-gradient-to-b fixed z-50 pt-6 pb-8"
    :class="$_theme"
  >
    <div class="flex-1 flex-col ml-9">
      <div
        class="flex space-x-9 items-center w-full h-full"
        :class="[$_borderColor, { 'h-16': !scrollPosition }]"
      >
        <BaseDropdown
          v-for="dropdown in firstDropdowns"
          :key="dropdown"
          :text="dropdown.title"
          :color="$_textColor"
          @clicked="clicked = !clicked"
        >
          <DropdownDesktop
            :data="dropdown"
            :class="scrollPosition ? 'top-[58px]' : 'top-[110px]'"
          />
        </BaseDropdown>
      </div>
    </div>
    <BaseLogo
      class="justify-self-center mx-20"
      :fill="$_logoColor"
      :class="{ 'w-20 h-8': scrollPosition }"
    />
    <div class="flex-1 flex-col mr-9">
      <div
        class="flex space-x-9 justify-end items-center w-full"
        :class="[$_borderColor, { 'h-16': !scrollPosition }]"
      >
        <BaseDropdown
          v-for="dropdown in lastDropdowns"
          :key="dropdown"
          :text="dropdown.title"
          :options="dropdown.children"
          :color="$_textColor"
          @clicked="clicked = !clicked"
        >
          <DropdownDesktop
            :data="dropdown"
            :class="scrollPosition ? 'top-[58px]' : 'top-[110px]'"
          />
        </BaseDropdown>
        <div>
          <div class="flex space-x-4">
            <ButtonIcon
              color="tertiary"
              class="self-center hover:text-secondary"
            >
              <IconSearch />
            </ButtonIcon>
            <LoginButton text="Login" :class="$_textColor" />
            <!-- TO DO -->
            <BaseAction variant="small" class="font-medium">
              Job finden
            </BaseAction>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="h-[1400px] w-full bg-primary absolute top-0"></div>
</template>

<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { ref, computed, toRefs, onMounted } from 'vue'
import ButtonIcon from '../../base/ButtonIcon.vue'
import BaseLogo from '../../base/Logo.vue'
import BaseDropdown from '../../base/Dropdown.vue'
import BaseAction from '../../base/Action.vue'
import DropdownDesktop from '../../organisms/o-01-nav-main/dropdown-desktop.vue'
import IconSearch from '../../icons/Search.vue'
import LoginButton from '../../organisms/o-01-nav-main/login.vue'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
const {
  menuMain,
  languageNavigation: langNav,
  menuBreadcrumb
} = toRefs(props.data)

const selectedTheme = menuMain.value?.[0]?.data?.theme
const clicked = ref(false)

const $_textColor = computed(() => {
  return selectedTheme === 'light' || scrollPosition.value || clicked.value
    ? 'text-primary'
    : 'text-white'
})

const $_logoColor = computed(() => {
  return selectedTheme === 'light' || scrollPosition.value || clicked.value
    ? '#1E2728'
    : 'white'
})

const $_borderColor = computed(() => ({
  'border-b border-gradient':
    selectedTheme === 'light' && !scrollPosition.value && !clicked.value,
  'border-b border-white':
    selectedTheme !== 'light' && !scrollPosition.value && !clicked.value
}))

const firstDropdowns = computed(() => {
  let list = []
  const menuElement = menuMain.value.slice(0, 3)
  menuElement.forEach(element => {
    if (element.children) {
      list.push(element)
    }
  })
  return list
})

const lastDropdowns = computed(() => {
  let list = []
  const menuElement = menuMain.value.slice(3, 6)
  menuElement.forEach(element => {
    if (element.children) {
      list.push(element)
    }
  })
  return list
})
let scrollPosition = ref(null)
onMounted(() => {
  window.addEventListener('scroll', function () {
    scrollPosition.value = window.scrollY
  })
})

const $_theme = computed(() => ({
  'from-white bg-opacity-30 text-primary':
    selectedTheme === 'light' && !scrollPosition.value && !clicked.value,
  'from-black bg-opacity-60 text-white':
    selectedTheme !== 'light' && !scrollPosition.value && !clicked.value,
  'bg-white shadow-lg pt-3 pb-2': scrollPosition.value,
  'bg-white shadow-lg': clicked.value
}))
</script>
