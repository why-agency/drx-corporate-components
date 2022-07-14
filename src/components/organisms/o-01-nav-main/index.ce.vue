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
          @clicked="changeStatus(dropdown)"
        >
          <DropdownDesktop
            v-if="activeCategory"
            :data="activeCategory"
            :class="scrollPosition ? 'top-[58px]' : 'top-[110px]'"
          />
        </BaseDropdown>
      </div>
      <div v-if="!scrollPosition" ref="breadcrumbs" class="flex">
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
          @clicked="changeStatus(dropdown)"
        >
          <DropdownDesktop
            v-if="activeCategory"
            :data="activeCategory"
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
    </div>
  </section>
  <div class="h-[1400px] w-full bg-primary absolute top-0"></div>
</template>

<script setup>
import { onClickOutside } from '@vueuse/core'
import { ref, computed, toRefs, onMounted } from 'vue'
import ButtonIcon from '../../base/ButtonIcon.vue'
import BaseLogo from '../../base/Logo.vue'
import BaseBreadcrumbs from '../../base/Breadcrumbs.vue'
import BaseDropdown from '../../base/Dropdown.vue'
import BaseAction from '../../base/Action.vue'
import DropdownDesktop from '../../organisms/o-01-nav-main/dropdown-desktop.vue'
import IconSearch from '../../icons/Search.vue'
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

const navStore = useNav()
const activeCategory = computed(() => navStore.activeCategory)

function changeStatus(content) {
  navStore.setActiveCategory(content)
}

const wrapper = ref(null)

onClickOutside(wrapper, () => navStore.setActiveCategory(null))

const $_textColor = computed(() => {
  return theme.value === 'light' || scrollPosition.value || activeCategory.value
    ? 'text-primary'
    : 'text-white'
})

const $_breadcrumbsColor = computed(() => {
  return theme.value === 'light' ? 'text-black' : 'text-white'
})

const $_logoColor = computed(() => {
  return theme.value === 'light' || scrollPosition.value || activeCategory.value
    ? '#1E2728'
    : 'white'
})

const $_borderColor = computed(() => ({
  'border-b border-gradient':
    theme.value === 'light' && !scrollPosition.value && !activeCategory.value,
  'border-b border-white':
    theme.value !== 'light' && !scrollPosition.value && !activeCategory.value
}))

const firstDropdowns = computed(() =>
  menuMain.value?.filter(item => item.children)?.slice(0, 3)
)

const lastDropdowns = computed(() =>
  menuMain.value?.filter(item => item.children)?.slice(3, 6)
)

let scrollPosition = ref(null)
onMounted(() => {
  window.addEventListener('scroll', function () {
    scrollPosition.value = window.scrollY
  })
})

const $_theme = computed(() => ({
  'from-white bg-opacity-30 text-primary':
    theme.value === 'light' && !scrollPosition.value && !activeCategory.value,
  'from-black bg-opacity-60 text-white':
    theme.value !== 'light' && !scrollPosition.value && !activeCategory.value,
  'bg-white shadow-lg pt-3 pb-2': scrollPosition.value,
  'bg-white shadow-lg': activeCategory.value
}))
</script>