<template>
  <section
    class="w-screen overflow-y-scroll fixed z-50 top-0"
    :class="{ 'bg-white h-screen': isSearchOverlayVisible || openMenuStatus }"
  >
    <!-- START TOP NAVI -->
    <div
      class="w-full bg-white text-primary !pt-3 !pb-3 !px-6 flex justify-between h-14 items-center"
    >
      <BaseButtonIcon
        variant="transparent"
        color="primary"
        @click="toggleMenu"
      >
        <IconMenu v-if="!openMenuStatus && !isSearchOverlayVisible" />
        <IconClose v-else />
      </BaseButtonIcon>
      <BaseLogo fill="#1E2728" is-small :home-link="homeLink" />
      <BaseButtonIcon
        variant="transparent"
        color="primary"
        @click="openSearchOverlay"
      >
        <IconSearch />
      </BaseButtonIcon>
    </div>
    <!-- END TOP NAVI -->

    <!-- START NAV DROPDOWN MOBILE -->
    <div v-if="openMenuStatus" class="bg-white !px-6 h-max w-full">
      <div class="flex w-full justify-between !pt-4">
        <UseDynamicAction
          v-if="locations && locations.url"
          :to="locations.url"
          :tag="'a'"
          :target="locations.target"
          class="text-primary hover:text-secondary flex items-center space-x-2"
        >
          <IconWorld class="!mt-1" />
          <BaseText
            v-if="locations.link"
            :text="locations.link"
            class="text-body3"
            :animate="false"
          />
        </UseDynamicAction>
        <MLanguageSwitch
          v-if="langNav && langNav.length"
          :languages="langNav"
          class="text-primary"
        />
      </div>
      <LoginButton
        v-if="career"
        :data="career"
        class="text-primary mt-2.5 !font-normal items-end"
        :iconWidth="19"
        :iconHeigth="19"
        text-size="text-body3"
      />
      <div v-if="dropdownsNotSearch" class="!mb-8">
        <NavItem
          v-for="dropdown in dropdownsNotSearch"
          :key="dropdown"
          :dropdown="dropdown"
          @item-clicked="changeStatus"
          class="text-primary !py-8 border-b border-tertiary"
        >
          <DropdownMobileContent v-if="activeCategory" :data="activeCategory" />
        </NavItem>
      </div>
      <BaseAction
        v-if="jobmarket && jobmarket.url"
        :to="jobmarket.url"
        :target="jobmarket.target"
        variant="small"
        class="font-medium"
      >
        {{ jobmarket.link }}
      </BaseAction>
      <BaseHtmlParser
        v-if="social"
        :content="social"
        class="newSocialIcons flex justify-center pb-9"
      />
    </div>
    <!-- END NAV DROPDOWN MOBILE -->

    <!-- START SEARCH OVERLAY-->
    <SearchOverlay v-if="isSearchOverlayVisible" />
    <!-- END SEARCH OVERLAY-->
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import MLanguageSwitch from '../../molecules/LanguageSwitch.vue'
import ButtonIcon from '../../base/ButtonIcon.vue'
import BaseLogo from '../../base/Logo.vue'
import BaseDropdown from '../../base/Dropdown.vue'
import BaseAction from '../../base/Action.vue'
import BaseText from '../../base/Text.vue'
import UseDynamicAction from '../../organisms/UseDynamicAction.vue'
import IconSearch from '../../icons/Search.vue'
import IconWorld from '../../icons/world.vue'
import IconMenu from '../../icons/Menu.vue'
import IconClose from '../../icons/Close.vue'
import LoginButton from '../../organisms/o-01-nav-main/login.vue'
import BaseHtmlParser from '../../base/HtmlParser.vue'
import DropdownMobileContent from '../../organisms/o-01-nav-main/dropdown-mobile-content.vue'
import BaseButtonIcon from '../../base/ButtonIcon.vue'
import SearchOverlay from './search-overlay.vue'
import NavItem from './nav-item.vue'
import { useNav } from '../../../stores/nav'
import { useSearch } from '../../../stores/search'
import { useScrollLock } from '../../../composables/useScrollLock.ts'

const props = defineProps({
  locations: {
    type: Object,
    default: () => ({})
  },
  career: {
    type: Object,
    default: undefined
  },
  langNav: {
    type: Object,
    default: null
  },
  dropdowns: {
    type: Object,
    default: () => ({})
  },
  jobmarket: {
    type: Object,
    default: () => null
  },
  social: {
    type: String,
    default: ''
  },
  homeLink: {
    type: Object,
    default: null
  }
})
// Overlays
const openMenuStatus = ref(false)
const searchStore = useSearch()
const isSearchOverlayVisible = computed(
  () => searchStore.isSearchOverlayVisible
)

// toggle nav overlay
function toggleMenu() {
  if (searchStore.isSearchOverlayVisible) {
    searchStore.toggleSearchOverlay(false)
  } else {
    openMenuStatus.value = !openMenuStatus.value
    if (activeCategory.value) {
      navStore.setActiveCategory(null)
    }
  }
}

// toggle search overlay
const openSearchOverlay = () => {
  openMenuStatus.value = false
  searchStore.toggleSearchOverlay(true)
}

// toggle nav items dropdowns
const navStore = useNav()
const activeCategory = computed(() => navStore.activeCategory)
const changeStatus = content => {
  navStore.setActiveCategory(
    activeCategory.value?.title === content?.title ? null : content
  )
}

// scroll lock
const isLocked = useScrollLock()
watch(openMenuStatus, openMenuStatus => (isLocked.value = !!openMenuStatus))

const dropdownsNotSearch = computed(() =>
  props.dropdowns?.filter(dropdown => dropdown.data.drx_issearch === 0)
)
</script>
