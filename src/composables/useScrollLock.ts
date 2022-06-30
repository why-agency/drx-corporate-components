import { ref, watch } from 'vue'

const body = document.querySelector('body')
const scrollPosition = ref(0)
const isLocked = ref(false)

const lockScrolling = (body: HTMLBodyElement | null) => {
  if (!body) return

  scrollPosition.value = window.pageYOffset
  body.style.overflow = 'hidden'
  body.style.position = 'fixed'
  body.style.top = `-${scrollPosition.value}px`
  body.style.width = '100%'
}

const unlockScrolling = (body: HTMLBodyElement | null) => {
  if (!body) return

  body.style.removeProperty('overflow')
  body.style.removeProperty('position')
  body.style.removeProperty('top')
  body.style.removeProperty('width')
  window.scrollTo(0, scrollPosition.value)
}

watch(isLocked, isLocked => {
  if (isLocked) {
    lockScrolling(body)
  } else {
    unlockScrolling(body)
  }
})

export const useScrollLock = () => isLocked
