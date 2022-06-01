<template>
  <UseDynamicAction :to="to">
    <div
      ref="backgroundanimation"
      class="min-h-[48px] p-2 relative w-56 group overflow-hidden cursor-pointer disabled:opacity-30 disabled:pointer-events-none focus:outline-none focus-visible:ring focus-visible:ring-focus bg-[length:200%_100%] bg-[position:100%] bg-button-background"
      :class="$_color"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div
        ref="textanimation"
        class="w-full flex justify-between bg-button-text bg-[length:200%_100%] bg-[position:100%] relative bg-clip-text text-transparent overflow-hidden"
      >
        <div>
          <slot class="text-xl" />
        </div>
        <div
          v-if="$slots.icon"
          :class="{ 'pl-3': $slots.icon }"
          class="transform scale-75 md:scale-100 text-white"
          :width="size === 14"
          :height="size === 14"
        >
          <slot name="icon" />
        </div>
      </div>
    </div>
  </UseDynamicAction>
</template>

<script>
import { gsap } from 'gsap'
import UseDynamicAction from '../organisms/UseDynamicAction.vue'

const Color = {
  secondary: 'secondary',
  white: 'white'
}

export default {
  components: { UseDynamicAction },
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    color: {
      type: String,
      default: Color.secondary
    }
  },
  data() {
    return {
      classesBg: []
    }
  },
  computed: {
    $_color() {
      return {
        'bg-secondary text-secondary-inverse': this.color === 'secondary',
        'bg-white text-secondary': this.color === 'white'
      }
    }
  },
  methods: {
    onMouseEnter() {
      gsap.fromTo(
        [this.$refs.textanimation, this.$refs.backgroundanimation],
        {
          backgroundPosition: '100%'
        },
        {
          backgroundPosition: '0',
          duration: 2
        }
      )
    },
    onMouseLeave() {
      gsap.fromTo(
        [this.$refs.textanimation, this.$refs.backgroundanimation],
        {
          backgroundPosition: '0'
        },
        {
          backgroundPosition: '-100%',
          duration: 2
        }
      )
    }
  }
}
</script>
