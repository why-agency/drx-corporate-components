<template>
  <section
    v-if="isXl"
    ref="wrapper"
    class="w-full flex bg-gradient-to-b fixed top-0 z-50"
    :class="$_theme"
  >
    <div class="flex-1 flex-col !ml-9">
      <div
        class="flex space-x-9 items-center w-full h-full"
        :class="[$_borderColor, { 'h-16': !scrollPosition }]"
      >
        <div v-for="dropdown in firstDropdowns" :key="dropdown">
          <BaseDropdown
            v-if="dropdown.children"
            :text="dropdown.title"
            :link="dropdown.link"
            :color="$_textColor"
            isNav
            @clicked="changeStatus(dropdown)"
          >
            <DropdownDesktop
              v-if="activeCategory"
              :data="activeCategory"
              :social="socialFooter"
              :class="scrollPosition ? 'top-[58px]' : 'top-[109px]'"
            />
          </BaseDropdown>
          <UseDynamicAction
            v-else
            :to="dropdown.link"
            :tag="dropdown.link ? 'a' : 'div'"
            :target="dropdown.target"
          >
            <BaseText
              :animate="false"
              :class="$_textColor"
              class="text-body1 font-bold hover:text-tertiary"
            >
              {{ dropdown.title }}
            </BaseText>
          </UseDynamicAction>
        </div>
      </div>
      <div
        v-if="!scrollPosition && !activeCategory"
        ref="breadcrumbs"
        class="flex"
      >
        <BaseBreadcrumbs
          :breadcrumbs="menuBreadcrumb"
          :color="$_breadcrumbsColor"
        />
      </div>
    </div>
    <BaseLogo
      class="justify-self-center mx-20"
      :fill="$_logoColor"
      :is-small="scrollPosition || isSearchOverlayVisible"
      :home-link="homeLink"
    />
    <div class="flex-1 flex-col !mr-9">
      <div
        class="flex space-x-9 justify-end items-center w-full"
        :class="[$_borderColor, { 'h-16': !scrollPosition }]"
      >
        <div v-for="dropdown in lastDropdowns" :key="dropdown">
          <BaseDropdown
            v-if="dropdown.children"
            :text="dropdown.title"
            :link="dropdown.link"
            :color="$_textColor"
            isNav
            @clicked="changeStatus(dropdown)"
          >
            <DropdownDesktop
              v-if="activeCategory"
              :data="activeCategory"
              :social="socialFooter"
              :class="scrollPosition ? 'top-[58px]' : 'top-[110px]'"
            />
          </BaseDropdown>
          <UseDynamicAction
            v-else
            :to="dropdown.link"
            :tag="dropdown.link ? 'a' : 'div'"
            :target="dropdown.target"
          >
            <BaseText
              :animate="false"
              :class="$_textColor"
              class="text-body1 font-bold hover:text-secondary"
            >
              {{ dropdown.title }}
            </BaseText>
          </UseDynamicAction>
        </div>
        <div>
          <div class="flex space-x-4">
            <ButtonIcon
              variant="transparent"
              :color="buttonColor"
              class="self-center hover:text-secondary"
              @click="openSearchOverlay"
            >
              <IconSearch />
            </ButtonIcon>
            <LoginButton
              v-if="dcareerLogin"
              :data="dcareerLogin"
              :class="$_textColor"
            />
            <!-- TO DO -->
            <!-- <BaseAction
              v-if="jobmarket && jobmarket.url"
              :to="jobmarket.url"
              :target="jobmarket.target"
              variant="small"
              class="font-medium"
            >
              Job finden
            </BaseAction> -->
          </div>
        </div>
      </div>
      <div
        v-if="!scrollPosition && !activeCategory"
        class="flex justify-end space-x-4 mt-3.5"
      >
        <MLanguageSwitch :languages="langNav" :color="$_textColor" />
        <UseDynamicAction
          v-if="locations && locations.url"
          :to="locations.url"
          :tag="'a'"
          :target="locations.target"
          :class="$_textColor"
          class="hover:text-secondary flex items-center space-x-2"
        >
          <IconWorld class="mt-1" />
          <BaseText
            v-if="locations.link"
            :text="locations.link"
            class="text-body3"
            :animate="false"
          />
        </UseDynamicAction>
      </div>
    </div>
    <SearchOverlay
      v-if="isSearchOverlayVisible"
      :class="scrollPosition ? 'top-[58px]' : 'top-[109px]'"
    />
  </section>
  <o-01-NavMainMobile
    v-else
    :theme="$_theme"
    :textColor="$_textColor"
    :logoColor="$_logoColor"
    :buttonColor="buttonColor"
    :locations="locations"
    :career="dcareerLogin"
    :langNav="langNav"
    :dropdowns="menuMain"
    :jobmarket="jobmarket"
    :social="socialFooter"
    :home-link="homeLink"
  />
</template>

<script setup>
import {
  onClickOutside,
  useBreakpoints,
  breakpointsTailwind
} from '@vueuse/core'
import { ref, computed, toRefs, onMounted, onBeforeUnmount, watch } from 'vue'
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
import IconWorld from '../../icons/world.vue'
import LoginButton from '../../organisms/o-01-nav-main/login.vue'
import O01NavMainMobile from '../../organisms/o-01-nav-main/mobile.vue'
import SearchOverlay from './search-overlay.vue'
import { useNav } from '../../../stores/nav'
import { useSearch } from '../../../stores/search'
import { useScrollLock } from '../../../composables/useScrollLock.ts'

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

const breakpoints = useBreakpoints(breakpointsTailwind)
const isXl = breakpoints.greater('xl')

// store
const navStore = useNav()
const activeCategory = computed(() => navStore.activeCategory)
const searchStore = useSearch()
const isSearchOverlayVisible = computed(
  () => searchStore.isSearchOverlayVisible
)
const openSearchOverlay = () => {
  navStore.setActiveCategory(null)
  searchStore.toggleSearchOverlay(true)
}

const isOverlayVisible = computed(
  () => activeCategory.value || isSearchOverlayVisible.value
)

function changeStatus(content) {
  navStore.setActiveCategory(content)
}

const wrapper = ref(null)

onClickOutside(wrapper, () => navStore.setActiveCategory(null))

const $_textColor = computed(() => {
  return theme.value === 'light' ||
    scrollPosition.value ||
    isOverlayVisible.value
    ? 'text-primary'
    : 'text-white'
})

const buttonColor = computed(() =>
  theme.value === 'light' || scrollPosition.value || isOverlayVisible.value
    ? 'primary'
    : 'white'
)

const $_breadcrumbsColor = computed(() => {
  return theme.value === 'light' ? '!text-black' : '!text-white'
})

const $_logoColor = computed(() => {
  return theme.value === 'light' ||
    scrollPosition.value ||
    isOverlayVisible.value
    ? '#1E2728'
    : 'white'
})

const $_borderColor = computed(() => ({
  'border-b border-gradient':
    theme.value === 'light' && !scrollPosition.value && !isOverlayVisible.value,
  'border-b border-white':
    theme.value !== 'light' && !scrollPosition.value && !isOverlayVisible.value
}))

const firstDropdowns = computed(() =>
  menuMain.value?.filter(item => item.data.drx_issearch === 0)?.slice(0, 3)
)

const lastDropdowns = computed(() =>
  menuMain.value?.filter(item => item.data.drx_issearch === 0)?.slice(3, 6)
)

let scrollPosition = ref(null)
onMounted(() => {
  window.addEventListener('scroll', function () {
    scrollPosition.value = window.scrollY
  })
  setSearchData()
})

const $_theme = computed(() => ({
  'from-white bg-opacity-30 text-primary':
    theme.value === 'light' && !scrollPosition.value && !isOverlayVisible.value,
  'from-black bg-opacity-60 text-white':
    theme.value !== 'light' && !scrollPosition.value && !isOverlayVisible.value,
  'bg-white shadow-lg !pt-[12px] !pb-[12px]': scrollPosition.value,
  '!pt-6 !pb-8': !scrollPosition.value,
  'bg-white shadow-lg': isOverlayVisible.value
}))

const setSearchData = () => {
  if (searchData.value) {
    searchStore.setSearchData(searchData.value)
  }
}

const subscribedActions = ['setSearchText']
const unsubscribe = searchStore.$onAction(({ name, after }) => {
  after(async () => {
    if (subscribedActions.includes(name)) {
      await searchStore.getSearchResults()
      await searchStore.getTotalSearchResultsCount()
    }
  })
})
onBeforeUnmount(() => unsubscribe())

// scroll lock
const isLocked = useScrollLock()
watch(
  isOverlayVisible,
  isOverlayVisible => (isLocked.value = !!isOverlayVisible)
)
</script>
