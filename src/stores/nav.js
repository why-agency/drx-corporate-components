import { defineStore, createPinia, setActivePinia } from "pinia";

setActivePinia(createPinia())

export const useNav = defineStore('nav', {
  state: () => {
    return {
      activeCategory: null,
      homeLink: ''
    }
  },
  actions: {
    setActiveCategory(activeCategory) {
      this.activeCategory = activeCategory
    }
  }
})
