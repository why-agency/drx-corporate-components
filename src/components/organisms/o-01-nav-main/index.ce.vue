<template>
  <section
    ref="wrapper"
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
          isNav
          @clicked="changeStatus(dropdown)"
        >
          <DropdownDesktop
            v-if="navStore.clicked"
            :data="naviContent"
            :social="socialFooter"
            :class="scrollPosition ? 'top-[58px]' : 'top-[110px]'"
          />
        </BaseDropdown>
      </div>
      <div
        v-if="!scrollPosition && !navStore.clicked"
        ref="breadcrumbs"
        class="flex"
      >
        <BaseBreadcrumbs
          :breadcrumbs="menuBreadcrumb"
          :class="$_breadcrumbsColor"
        />
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
          :color="$_textColor"
          isNav
          @clicked="changeStatus(dropdown)"
        >
          <DropdownDesktop
            v-if="navStore.clicked"
            :data="naviContent"
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
            <LoginButton :data="dcareerLogin" :class="$_textColor" />
            <!-- TO DO -->
            <BaseAction
              v-if="jobmarket && jobmarket.url"
              :to="jobmarket.url"
              :target="jobmarket.target"
              variant="small"
              class="font-medium"
            >
              Job finden
            </BaseAction>
          </div>
        </div>
      </div>
      <div v-if="!scrollPosition && !navStore.clicked" class="flex justify-end space-x-4 mt-3.5">
        <MLanguageSwitch :language="langNav" />
        <UseDynamicAction
          :to="locations.url"
          :tag="'a'"
          :target="locations.target"
          class="hover:text-secondary flex items-center space-x-2"
        >
          <IconWorld class="mt-1"/>
          <BaseText
            :text="locations.link"
            class="text-body3"
            :animate="false"
          />
        </UseDynamicAction>
      </div>
    </div>
  </section>
  <div class="h-[1400px] w-full bg-primary absolute top-0"></div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref, computed, toRefs, onMounted } from 'vue'
import MLanguageSwitch from '../../molecules/LanguageSwitch.vue'
import ButtonIcon from '../../base/ButtonIcon.vue'
import BaseLogo from '../../base/Logo.vue'
import BaseBreadcrumbs from '../../base/Breadcrumbs.vue'
import BaseDropdown from '../../base/Dropdown.vue'
import BaseAction from '../../base/Action.vue'
import BaseText from '../../base/Text.vue'
import UseDynamicAction from '../../organisms/UseDynamicAction.vue'
import DropdownDesktop from '../../organisms/o-01-nav-main/dropdown-desktop.vue'
import IconSearch from '../../icons/Search.vue'
import IconWorld from '../../icons/World.vue'
import LoginButton from '../../organisms/o-01-nav-main/login.vue'
import { useNav } from '../../../stores/nav'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})
const {
  menuMain,
  languageNavigation: langNav,
  menuBreadcrumb,
  theme,
  searchData,
  socialFooter,
  homeLink,
  dcareerLogin,
  jobmarket,
  locations
} = toRefs(props.data)

const clicked = ref(false)
const navStore = useNav()
const naviContent = ref({})

function changeStatus(content) {
  if (navStore.clicked && naviContent.value === content) {
    clicked.value = false
    navStore.setClick(clicked.value)
    navStore.setIsDropdownOpen(clicked.value)
  } else if (navStore.clicked && naviContent.value !== content) {
    naviContent.value = content
  } else if (!navStore.clicked) {
    naviContent.value = content
    clicked.value = !clicked.value
    navStore.setClick(clicked.value)
    navStore.setIsDropdownOpen(clicked.value)
  }
}

const wrapper = ref(null)

onClickOutside(
  wrapper,
  () => (
    (clicked.value = false),
    navStore.setClick(clicked.value),
    navStore.setIsDropdownOpen(clicked.value)
  )
)

const $_textColor = computed(() => {
  return theme.value === 'light' || scrollPosition.value || clicked.value
    ? 'text-primary'
    : 'text-white'
})

const $_breadcrumbsColor = computed(() => {
  return theme.value === 'light' ? 'text-black' : 'text-white'
})

const $_logoColor = computed(() => {
  return theme.value === 'light' || scrollPosition.value || clicked.value
    ? '#1E2728'
    : 'white'
})

const $_borderColor = computed(() => ({
  'border-b border-gradient':
    theme.value === 'light' && !scrollPosition.value && !clicked.value,
  'border-b border-white':
    theme.value !== 'light' && !scrollPosition.value && !clicked.value
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
    theme.value === 'light' && !scrollPosition.value && !clicked.value,
  'from-black bg-opacity-60 text-white':
    theme.value !== 'light' && !scrollPosition.value && !clicked.value,
  'bg-white shadow-lg pt-3 pb-2': scrollPosition.value,
  'bg-white shadow-lg': clicked.value
}))
</script>
