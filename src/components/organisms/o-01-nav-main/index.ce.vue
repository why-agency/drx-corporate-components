<template>
  <section class="w-full flex">
    <BaseDropdown :options="['das', 'sadsa', 'aewrew']" text="first label"/>
    <BaseLogo class="justify-center"/>
  </section>
</template>

<script setup>
import { useBreakpoints, breakpointsTailwind } from '@vueuse/core'
import { ref, computed, onMounted, toRefs } from 'vue'
import BaseHeadline from '../../base/Headline.vue'
import BaseText from '../../base/Text.vue'
import ButtonIcon from '../../base/ButtonIcon.vue'
import BaseLogo from '../../base/Logo.vue'
import BaseDropdown from '../../base/Dropdown.vue'
import MActionBar from '../../molecules/ActionBar.vue'
</script>
