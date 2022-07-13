import { defineStore, createPinia, setActivePinia } from "pinia";

setActivePinia(createPinia())

export const useNav = defineStore('jobs', {
  state: () => {
    return {
      clicked: false,
      dropDownOpen: false
    }
  },
  actions: {
    setClick(click) {
      this.clicked = click
    },
    setIsDropdownOpen(open) {
      this.dropDownOpen = open
    }
  }
})
