<template>
  <section class="w-screen h-screen overflow-y-scroll fixed z-50">
    <!-- START TOP NAVI -->
    <div
      :class="$_theme"
      class="w-full bg-gradient-to-b !pt-3 !px-6 flex justify-between h-14"
    >
      <BaseButtonIcon
        variant="transparent"
        :color="buttonColor"
        @click="toggleMenu"
      >
        <IconMenu v-if="!openMenuStatus" />
        <IconClose v-else />
      </BaseButtonIcon>
      <BaseLogo class="h-8" :fill="$_logoColor" />
      <BaseButtonIcon variant="transparent" :color="buttonColor">
        <IconSearch />
      </BaseButtonIcon>
    </div>
    <!-- END TOP NAVI -->

    <!-- START DROPDOWN MOBILE -->
    <div v-if="openMenuStatus" class="bg-white !px-6 h-max w-full">
      <div class="flex w-full justify-between !pt-4">
        <UseDynamicAction
          v-if="locations && locations.url"
          :to="locations.url"
          :tag="'a'"
          :target="locations.target"
          :class="$_textColor"
          class="hover:text-secondary flex items-center space-x-2"
        >
          <IconWorld class="!mt-1" />
          <BaseText
            v-if="locations.link"
            :text="locations.link"
            class="text-body3"
            :animate="false"
          />
        </UseDynamicAction>
        <MLanguageSwitch :languages="langNav" :color="$_textColor" />
      </div>
      <LoginButton
        v-if="career"
        :data="career"
        :class="$_textColor"
        class="mt-2.5 !font-normal items-end"
        :iconWidth="19"
        :iconHeigth="19"
      />
      <div class="!mb-8">
        <BaseDropdown
          v-for="dropdown in dropdowns"
          :key="dropdown"
          :text="dropdown.title"
          :link="dropdown.link"
          :color="$_textColor"
          isNav
          @clicked="changeStatus(dropdown)"
          class="!py-8 border-b border-tertiary"
        >
          <DropdownMobile
            v-if="activeCategory && !close"
            :data="activeCategory"
          />
        </BaseDropdown>
      </div>
      <!--<BaseAction
        v-if="jobmarket && jobmarket.url"
        :to="jobmarket.url"
        :target="jobmarket.target"
        variant="small"
        class="font-medium"
      >
        Job finden
      </BaseAction>-->
      <BaseHtmlParser
        v-if="social"
        :content="social"
        class="newSocialIcons flex justify-center pb-9"
      />
    </div>
    <!-- END DROPDOWN MOBILE -->
  </section>
</template>

<script setup>
import { ref, computed, toRefs, onMounted } from 'vue'
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
import DropdownMobile from '../../organisms/o-01-nav-main/dropdown-mobile.vue'
import BaseButtonIcon from '../../base/ButtonIcon.vue'
import { useNav } from '../../../stores/nav'

const props = defineProps({
  theme: {
    type: Object,
    default: () => ({})
  },
  textColor: {
    type: String,
    default: 'text-white'
  },
  logoColor: {
    type: String,
    default: 'white'
  },
  buttonColor: {
    type: String,
    default: 'dark'
  },
  locations: {
    type: Object,
    default: () => ({})
  },
  career: {
    type: Object,
    default: () => ({})
  },
  langNav: {
    type: Object,
    default: () => ({})
  },
  dropdowns: {
    type: Object,
    default: () => ({})
  },
  jobmarket: {
    type: Object,
    default: () => ({})
  },
  social: {
    type: String,
    default: ''
  }
})
const openMenuStatus = ref(false)
function toggleMenu() {
  openMenuStatus.value = !openMenuStatus.value
}

const navStore = useNav()
const close = ref(false)
const activeCategory = computed(() => navStore.activeCategory)
const changeStatus = content => {
  navStore.setActiveCategory(
    navStore.activeCategory === content ? null : content
  )
  close.value = navStore.activeCategory === content ? false : true
}
const $_theme = computed(() => {
  return openMenuStatus.value ? 'bg-white text-primary' : props.theme
})
const $_textColor = computed(() => {
  return openMenuStatus.value ? 'text-primary' : props.textColor
})
const $_logoColor = computed(() => {
  return openMenuStatus.value ? '#1E2728' : props.logoColor
})
</script>
