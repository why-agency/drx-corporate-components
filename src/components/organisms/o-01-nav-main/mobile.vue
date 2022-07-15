<template>
  <section class="w-screen h-max">
    <div
      :class="[theme, { 'to-white h-14': openMenuStatus }]"
      class="fixed z-50 w-full bg-gradient-to-b pt-3 px-6 flex justify-between h-14"
    >
      <IconMenu v-if="!openMenuStatus" :class="textColor" @click="toggleMenu" />
      <IconClose v-else :class="textColor" @click="toggleMenu" />
      <BaseLogo class="h-8" :fill="logoColor" />
      <IconSearch />
    </div>
    <div v-if="openMenuStatus" class="bg-white px-6 mt-14 h-screen">
      <div class="flex w-full justify-between pt-4">
        <UseDynamicAction
          :to="locations.url"
          :tag="'a'"
          :target="locations.target"
          :class="textColor"
          class="hover:text-secondary flex items-center space-x-2"
        >
          <IconWorld class="mt-1" />
          <BaseText
            :text="locations.link"
            class="text-body3"
            :animate="false"
          />
        </UseDynamicAction>
        <MLanguageSwitch :languages="langNav" :color="textColor" />
      </div>
      <LoginButton
        :data="career"
        :class="textColor"
        class="mt-2.5 !font-normal items-end"
        :iconWidth="19"
        :iconHeigth="19"
      />
      <div class="mb-8">
        <BaseDropdown
          v-for="dropdown in dropdowns"
          :key="dropdown"
          :text="dropdown.title"
          :link="dropdown.link"
          :color="textColor"
          isNav
          @clicked="changeStatus(dropdown)"
          class="py-8 border-b border-tertiary"
        >
          <DropdownMobile v-if="activeCategory" :data="activeCategory" />
        </BaseDropdown>
      </div>
      <BaseAction
        v-if="jobmarket && jobmarket.url"
        :to="jobmarket.url"
        :target="jobmarket.target"
        variant="small"
        class="font-medium"
      >
        Job finden
      </BaseAction>
      <BaseHtmlParser
        :content="social"
        class="newSocialIcons flex justify-center pb-9"
      />
    </div>
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
const activeCategory = computed(() => navStore.activeCategory)
function changeStatus(content) {
  if (navStore.activeCategory === content) {
    navStore.setActiveCategory(null)
  } else {
    navStore.setActiveCategory(content)
  }
}
</script>
