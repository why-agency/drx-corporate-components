<template>
  <ul
    v-if="!isHomePage && internalCrumbs"
    class="mt-3.5 flex flex-wrap items-center"
  >
    <li
      v-for="item in internalCrumbs.slice(0, -1)"
      :key="item.link"
      class="flex items-center opacity-60 text-body2"
    >
      <UseDynamicAction
        :to="item.link"
        class="hover:text-secondary transition duration-300 !pr-2"
      >
        {{ item.title + '&nbsp;&nbsp;&nbsp;|' }}
      </UseDynamicAction>
    </li>

    <span class="opacity-60">{{ currentRoute }}</span>
  </ul>
</template>

<script>
import UseDynamicAction from '../organisms/UseDynamicAction.vue'
export default {
  components: { UseDynamicAction },
  props: {
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      home: { title: 'Home', link: '\/', target: '_top' }
    }
  },
  computed: {
    isHomePage() {
      return (
        !this.breadcrumbs ||
        (Array.isArray(this.breadcrumbs) && !this.breadcrumbs.length)
      )
    },
    internalCrumbs() {
      if (this.breadcrumbs && this.breadcrumbs.length) {
        return [this.home, ...this.breadcrumbs.slice(-1)]
      }
      return
    },
    currentRoute() {
      return this.internalCrumbs[this.internalCrumbs.length - 1]?.title
    }
  }
}
</script>
