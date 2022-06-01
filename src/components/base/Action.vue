<template>
  <UseDynamicAction :to="to">
    <div
      ref="backgroundanimation"
      class="min-h-[48px] relative group overflow-hidden cursor-pointer disabled:opacity-30 disabled:pointer-events-none focus:outline-none focus-visible:ring focus-visible:ring-focus bg-[length:200%_100%] bg-[position:100%]"
      :class="[$_color, $_size]"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div
        ref="textanimation"
        :class="[$_textColor]"
        class="w-pull px-4 pt-3 flex justify-between bg-[length:200%_100%] bg-[position:100%] relative bg-clip-text text-transparent overflow-hidden"
      >
        <div>
          <slot class="text-xl" />
        </div>
        <div
          v-if="$slots.icon"
          id="icon"
          :class="this.variant === 'large' ? 'mt-12 lg:mt-16' : ''"
          class="text-white"
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

const Variant = {
  default: 'default',
  large: 'large'
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
    },
    variant: {
      type: String,
      default: Variant.default
    }
  },
  computed: {
    $_color() {
      return {
        'bg-secondary text-secondary-inverse': this.color === 'secondary',
        'bg-white text-secondary': this.color === 'white'
      }
    },
    $_textColor() {
      return {
        'bg-button-text': this.variant === 'default',
        'bg-button-text-large': this.variant === 'large'
      }
    },
    $_size() {
      return {
        'min-h-[48px] w-56 bg-button-background': this.variant === 'default',
        'w-[328px] h-[87px] lg:w-[230px] lg:h-[108px] bg-button-background-large':
          this.variant === 'large'
      }
    }
  },
  methods: {
    onMouseEnter() {
      if (this.variant === 'large') {
        gsap.to('#icon', { delay: 1, duration: 0.5, color: '#1E2728' })
      } else {
        gsap.to('#icon', { delay: 1, duration: 0.5, color: '#0096A9' })
      }
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
      gsap.to('#icon', { delay: 1, duration: 0.5, color: 'white' })
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
