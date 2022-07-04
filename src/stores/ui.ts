import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    overlay: null
  }),
  actions: {
    setOverlay(overlay) {
      this.overlay = overlay
    }
  }
})
