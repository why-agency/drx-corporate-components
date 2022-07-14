<template>
  <ul
    v-if="!isHomePage && !isSearch"
    class="mt-3.5 flex flex-wrap items-center"
  >
    <li
      v-for="item in internalCrumbs.slice(0, -1)"
      :key="item.link"
      class="flex items-center opacity-60 text-body2"
    >
      <router-link
        :to="item.link"
        class="hover:text-secondary transition duration-300 pr-2"
      >
        {{ item.title + '&nbsp;&nbsp;&nbsp;|' }}
      </router-link>
    </li>

    <span class="opacity-60">{{ currentRoute }}</span>
  </ul>
</template>

<script>
export default {
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
    internalCrumbs() {
      if (this.breadcrumbs && this.breadcrumbs.length) {
          this.breadcrumbs.unshift(this.home)
        return this.breadcrumbs
      }

      return
    },
    isHomePage() {
      return this.internalCrumbs.length === 1
    },
    isSearch() {
      return this.$route.name === 'search'
    },
    currentRoute() {
      return this.internalCrumbs[this.internalCrumbs.length - 1].title
    }
  }
}
</script>
